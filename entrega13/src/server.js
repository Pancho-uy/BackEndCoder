import express from "express";
import productRouter from './routes/product.js';
import cartRouter from './routes/cart.js';
import userRouter from './routes/user.js';
import session from 'express-session';
import {engine} from 'express-handlebars';
import path from 'path';
import {fileURLToPath} from 'url';
import mongoStore from 'connect-mongo';
import {Strategy} from 'passport-facebook';
import passport from "passport";
import bCrypt from 'bcrypt-nodejs';
import GithubStrategy from 'passport-github2';

/* GithubStrategy = require('passport-github2').Strategy; */
/* import { initPassport } from "./middlewares/passport.js"; */

//--------------------------------------------------------------------------------------------------------------------//
// Me daba constantemente que no habia un export named "initPassport" en el archivo passport.js, asi que lo puse acá  //
// y me funciono, no la mejor forma de hacerlo ya lo sé....                                                              //

/* const passport = require('passport'); */
//
// Lo mismo que en el caso anterior, no me funcionaba el import de users, asi que lo puse acá y me funciono, no la mejor forma de hacerlo ya lo sé.... //
const users = [ { id: 1, username: 'Pancho-uy', password: 'admin', admin:true } ]
/* const { users } = require('../usuarios/users'); */

/* console.log(users)

function createHash(password) {
    return bCrypt.hashSync(
              password,
              bCrypt.genSaltSync(10),
              null);
  }

function isValidPassword(user, password) {
    return bCrypt.compareSync(password, user.password);
   }
 */
//--------------------------------------------------------------------------------------------------------------------//
const initPassport = () => {
    passport.use('github', new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/auth/githubcallback"
    },(accessToken, refreshToken, profile, done) => {
        console.log(profile)
        console.log(accessToken)
            console.log('login', users)
            let username = profile.username
            let user = users.find( user => user.username === username)
            if (!user) {
            console.log('User Not Found with username ' + username);
            return done(null, false);
            }
            return done(null, user);
        })
    )
    passport.serializeUser((user, done) => { 
        done(null, user.id);
    })

    passport.deserializeUser((id, done) => {
        console.log(users)
        let user = users.find(user => user.id === id)
        done(null, user)
    })

}
//
//
//-----------------------------------------------------------------------------------------------------------------------------------------------------

const PORT = (process.env.PORT || 8080);
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

passport.use(new Strategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/githubcallback',
    profileFields: ['id', 'displayName', 'photos'],
    scope: ['email']
},
(accessToken, refreshToken, profile, done) => {
    return done(null, profile);
}))

passport.serializeUser((user, done) => {
    done(null, user)
})
//
passport.deserializeUser((id, done) => {
    done(null, id)
})

app.use(express.static('public'));

app.set('views', './src/views');
app.set('view engine', 'hbs');

app.engine('hbs', engine({
    extname: '.hbs',
    defaultLayout: 'index.hbs',
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials'
}))

app.use(
    session({
        store: mongoStore.create({
            mongoUrl: process.env.MONGO_URI,
            options: {
                userNewParser: true,
                useUnifiedTopology: true,
            }
        }),
        secret: process.env.SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {maxAge: 600000} //10 min.
}))

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api/productos', productRouter);
app.use('/api/carrito', cartRouter);
app.use('/api/usuario', userRouter);

/* ---------------------- Login con GITHUB  -------------------------------- */

app.use(passport.initialize());
app.use(passport.session());
initPassport();

app.get('/github', async(req, res) => {
    res.render('pages/github')
})

app.get('/auth/github', passport.authenticate('github'))

app.get('/auth/githubcallback', 
    passport.authenticate('github', {
/*         successRedirect: '/', */
        failureRedirect: '/api/usuario/login'}),
        (req, res) => {res.render('pages/home', {status: true})})

app.get('/', (req,res) => {
    if(req.isAuthenticated()) {
        res.render('pages/home', {status: true})
    } else {
        res.render('pages/home', {status: false})
    }
})


app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(function (err) {
    res.redirect('/api/usuario')
    })
})
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
    })
    
server.on('error', (err) => console.log(err));