const express     = require('express')
const router      = express.Router()
const Model       = require('../models')
const Partner     = Model.Partner

router.get('/', (req, res) => {
  Partner.findAll()
  .then(partners => {
    // res.send(partners)
    res.render('./partners/partner',{ partners })
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/add', (req, res) => {
  res.render('./partners/partner-add-form')
})

router.post('/add', (req, res) => {
  let objPartner = req.body
  Partner.create(objPartner)
  .then( () => {
    res.redirect('/partner')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/edit/:id',(req,res) => {
  let inputId = req.params.id
  Partner.findById(inputId)
  .then(partner => {
    // res.send(partner)
    res.render('./partners/partner-edit-form',{ partner })
  })
  .catch(err => {
    res.send(err)
  })
})

router.post('/edit/:id', (req, res) => {
  let inputId = +req.params.id
  let objPartner = req.body
  Partner.update(objPartner, {
    where: {
      id: inputId
    }
  })
  .then(() => {
    res.redirect('/partner')
  })
  .catch(err => {
    res.send(err)
  })
})

router.get('/delete/:id', (req,res) => {
  let inputId = +req.params.id
  Partner.destroy({
    where: {
      id: inputId
    }
  })
  .then(() => {
    res.redirect('/partner')
  })
  .catch(err => {
    res.send(err)
  })
})

module.exports = router;
