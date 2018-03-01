const express = require('express');
const router = express.Router();
const Model = require('../models');
const Help = require('../helpers/helper');

const Sequelize = require('sequelize')
const Op = Sequelize.Op;

const Partner = Model.Partner;
const Users = Model.Users;

router.get('/',(req,res,next)=> {
    // res.send('We are in');
    res.render('./search/search',{
        data:[]
    });
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
        res.render('./search/search',{
            data: data_partners,
            formatuang:Help.formatuang,
        })
    })
})
//CREATE NEW EVENT
router.post('/createnewevent',(req,res,next)=>{;
    let search_id = req.body.id
    Partner.findById(search_id,{
        include:Users,
    })
    .then((data_partner) =>{
        res.render('./user_partners/create_event',{
            partner: data_partner,
            formatuang: Help.formatuang,
        })
    })
})
//MAPS
router.get('/maps',(req,res,next)=>{
    res.render('./partials/search_map');
})


module.exports = router;