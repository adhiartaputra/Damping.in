const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const User        = Model.Users

router.get('/', (req, res) => {
  res.render('./auth/login')
})

router.get('/register/user', (req, res) => {
  res.render('./auth/register-user')
})

router.post('/register/user', (req, res) => {
  let objUser = req.body
  User.create(objUser)
  .then(() => {
    res.redirect('/auth/login')
  })
})

router.get('/register/partner', (req,res) => {
  res.render('./auth/register-partner')
})

router.post('/register/partner', (req, res) => {
  let objPartner = req.body
  Partner.create(objPartner)
  .then(() => {
    res.redirect('/auth/login')
  })
})

module.exports = router;
