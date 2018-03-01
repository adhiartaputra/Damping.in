'use strict'

const express                 = require('express')
const app                     = express()
const bodyParser              = require('body-parser')
const session                 = require('express-session');
const routes_user             = require('./routers/users');
const routes_partner          = require('./routers/partner');
const routes_auth             = require('./routers/auth');
const routes_dashboard        = require('./routers/dashboard');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')
app.use(session({
  secret: 'p4rtn3r1ncr1m3'
}))


app.use('/',routes_auth)
app.use('/user',routes_user)
app.use('/partner',routes_partner)
app.use('/dashboard',routes_dashboard)

app.listen(3000, console.log(`You're Live at 3000`))
