const express     = require('express');
const router      = express.Router();
const Sequelize   = require('sequelize');
const Op          = Sequelize.Op;

const Model        = require('../models');
const User         = Model.Users
const Partner      = Model.Partner;
const convert      = require('../helpers/helper')
const loginChecker = require('../helpers/loginChecker');

router.get('/', (req, res) => {
  res.render('./auth/login')
})

router.get('/register/user', (req, res) => {
  res.render('./auth/register-user')
})

router.post('/register/user', (req, res) => {
  let objUser = req.body
  User.create(objUser)
  .then((data) => {
    // res.send(data)
    res.redirect(`/dashboard/user/${data.id}`)
  })
})

router.get('/register/partner', (req, res) => {
  res.render('./auth/register-partner')
})

router.post('/register/partner', (req, res) => {
  let objPartner = req.body
  res.send(objPartner)
  // User.create(objUser)
  // .then(() => {
  //   res.redirect('/auth/login')
  // })
})

module.exports = router;
