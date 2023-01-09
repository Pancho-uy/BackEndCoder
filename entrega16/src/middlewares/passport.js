import { users } from '../../usuarios/users';
const passport = require('passport');
const bCrypt = require('bcrypt');

const GithubStrategy = require('passport-github2').Strategy;

initPassport = () => {
    passport.use('github', new GithubStrategy({
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        callbackURL: "http://localhost:8080/api/auth/githubcallback"
    },(accessToken, refreshToken, profile, done) => {
        console.log(profile)
        console.log(accessToken)
            console.log('login', users)
            // if (err)
            //   return done(err);
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

module.exports = initPassport;