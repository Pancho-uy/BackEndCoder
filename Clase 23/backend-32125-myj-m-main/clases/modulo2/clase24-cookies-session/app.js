const express  = require('express')
const cookieParser = require('cookie-parser')
// morgan
const logger = require('morgan')
const session = require('express-session')
/* const cookieSession = express.cookieSession */

// ahora con redis
const redis = require('redis')
const client = redis.createClient()
const RedisStore = require('connect-redis')(session)

require('dotenv').config()
const cookiesRoutes = require('./src/routes/cookies/cookies.routes')
const sessionRoutes = require('./src/routes/session/session.routes')

const app = express()
const PORT = process.env.PORT || 3000

app.use(session({
    secret: process.env.SECRET_KEY_SESSION,
    //___________________________ esto es lo que agregamos redis__________________________//
    store: new RedisStore({
        host: 'localhost',
        port: 6379,
        client: client,
        ttl: 3600
        
    }),
    //___________________________ esto es lo que agregamos__________________________//
    resave: true, 
    saveUninitialized: true
}))
const advancedOptions = { useNewUrlParser: true, useUnifiedTopology: true }

app.use(cookieParser(process.env.SECRET_KEY_COOKIE))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(logger('dev'))
app.use(express.static('public'))

app.use('/cookies',cookiesRoutes)
app.use('/session', sessionRoutes)

module.exports = app


// redis-descargar : https://github.com/microsoftarchive/redis/releases