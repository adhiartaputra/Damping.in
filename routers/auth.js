const express     = require('express');
const router      = express.Router();
const Sequelize   = require('sequelize');
const Op          = Sequelize.Op;
const bcrypt      = require('bcrypt')

const Model        = require('../models');
const User         = Model.Users
const Partner      = Model.Partner;
const convert      = require('../helpers/helper')
const loginChecker = require('../helpers/loginChecker');

router.get('/', (req, res) => {
  // res.send(req.body)
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
  // res.send(objPartner)
  Partner.create(objPartner)
  .then((data) => {
    res.redirect(`/dashboard/partner/${data.id}`)
  })
})

router.post('/dashboard/partner', (req, res) => {
  let objLogin = {
    email   : req.body.email,
    password: req.body.password
  }
  Partner.findOne({
    where : {email : objLogin.email}
  })
  .then((dataPartner) => {
    if (dataPartner !== null) {
      bcrypt.compare(objLogin.password, dataPartner.password).then(function(result) {
        if (result) {
              req.session.isLoginPartner = true
              req.session.idPartner    = dataPartner.id
              // res.send({ result, dataPartner })
              res.redirect(`/dashboard/partner/${req.session.idPartner}`)
        } else {
          res.render('./auth/login', {
            err : 'You entered wrong password!'
          })
        }
      });
    } else {
      res.render('./auth/login', {
        err : 'You entered wrong email!'
      })
    }
  })
  .catch(err => {
    res.redirect('/')
  })
})

router.get('/', (req, res) => {
  req.session.destroy(function (err) {
    if (!err) {
      res.redirect('/')
    } else {
      res.send(err)
    }
  })
})

module.exports = router;
