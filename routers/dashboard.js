const express = require('express');
const router = express.Router();
const Model = require('../models');
const Help = require('../helpers/helper');
const Email = require('../helpers/email');

const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const Partner = Model.Partner;
const Users = Model.Users;
const User_partner = Model.user_partner;


//READ SEARCH PAGE
router.get('/user/:id',(req,res,next)=>{
    let inputId = req.params.id
    Users.findById(inputId)
    .then((user)=>{
        // res.send(inputId);
        res.render('./dashboard/search',{
            user:user,
            partners: [],
            id_user: inputId,
        })
    })
})

//SEARCH & FILTER
router.get('/result',(req,res,next)=>{
    let gender = req.query.gender;
    let min_age = Number(req.query.min_age);
    let max_age = Number(req.query.max_age);
    let min_height = Number(req.query.min_height);
    let max_height = Number(req.query.max_height);
    let min_weight = Number(req.query.min_weight);
    let max_weight = Number(req.query.max_weight);
    let min_rate = Number(req.query.min_rate);
    let max_rate = Number(req.query.max_rate);
    let id_user =  req.query.id_user;

    // res.send(req.query)
    //
    Partner.findAll({
        where:{
            [Op.and]:[
                {age: {[Op.between]:[min_age,max_age]}},
                {height:{[Op.between]:[min_height,max_height]}},
                {weight:{[Op.between]:[min_weight,max_weight]}},
                {rate:{[Op.between]:[min_age,max_age]}},
                {gender: gender},
            ]
        }
    })
    .then((data_partners) => {
        // res.send(data_partners);
        res.render('./dashboard/search',{
            partners: data_partners,
            formatuang:Help.formatuang,
            id_user: id_user,
        })
    })
})
//CREATE NEW EVENT
router.post('/createnewevent',(req,res,next)=>{;
    let search_id = req.body.id
    let id_user = req.body.id_user
    Partner.findById(search_id,{
        include:Users,
    })
    .then((data_partner)=>{
        Users.findById(id_user)
        .then((data_user)=>{
            // res.send(data_user);
            res.render('./user_partners/create_event',{
                user:data_user,
                partner: data_partner,
                formatuang: Help.formatuang
            })
        })
    })
})
//MAPS
router.get('/maps',(req,res,next)=>{
    res.render('./partials/search_map');
})
//SEND EMAIL
router.post('/send_email/:id',(req,res,next)=>{
    // res.send(req.body);
    let from_user = req.body.from;
    let title = req.body.title;
    let email_to = "komelvin123@gmail.com";
    let message = req.body.message;
    let location = req.body.location;
    Email.send_email(from_user,title,email_to,message,location);
    // res.send(req.params.id)
    let inputId = req.params.id
    User_partner.findById(+inputId)
    .then( data => {
      res.send(data)
    })
})



//ROUTING DASHBOARD PARTNER
router.get('/partner/:id', (req, res) => {
  let inputId = req.params.id
  User_partner.findAll({
    where: {
      partnerId: inputId
    },
    include: [ Model.Users, Model.Partner ]
  })
  .then(events => {
    // res.send({ events })
    res.render('./dashboard/partner',{ events })
  })
})

module.exports = router;