'use strict'

const express         = require('express')
const app             = express()
const bodyParser      = require('body-parser')
const routes_user     = require('./routers/user');
const routes_partner  = require('./routers/partner');
const routes_home  = require('./routers/home');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.set('views', './views')
app.set('view engine', 'ejs')


app.use('/',routes_home)
app.use('/user',routes_user)
app.use('/partner',routes_partner)

app.listen(3000, console.log(`You're Live at 3000`))
