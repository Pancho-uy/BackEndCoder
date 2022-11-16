const express  = require('express')
const cookieParser = require('cookie-parser')
const session = require('express-session')

// const FileStore = require('session-file-store')(session)

const redis = require('redis')
const client = redis.createClient()
const RedisStore = require('connect-redis')(session)

const cookiesRoutes = require('./src/routes/cookies/cookies.routes')
const sessionRoutes = require('./src/routes/session/session.routes')
require('dotenv').config()


const app = express()
const PORT = process.env.PORT || 3000
    // _______________________________________________
    // // _______________________________________________
    // store: new FileStore(config),
    // // _______________________________________________
    resave: true, 
    saveUninitialized: true;
}))
app.use(cookieParser(process.env.SECRET_KEY_COOKIE))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

app.use('/cookies',cookiesRoutes)
app.use('/session', sessionRoutes)

module.exports = app
