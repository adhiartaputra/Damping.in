const express = require('express');
const router = express.Router();

const Model = require('../models');
const Users = Model.Users;
const Partner = Model.Partner;

//READ
router.get('/',(req,res,next)=> {
    Users.findAll()
    .then((users)=> {
        res.render('./users/users', {
            users: users,
        });
    })
})
//CREATE
router.get('/add',(req,res,next) => {
    res.render('./users/form_add_user', {
        err: null,
    });
});
router.post('/add',(req,res,next) => {
    let new_user = req.body;
    Users.create(new_user)
    .then((data) => res.redirect('/user/'))
    .catch((err) => res.render('./user/form_add_item',{
        err: err.errors[0].message
    }))
});
//UPDATE
router.get('/edit/:id',(req,res,next) => {
    let search_id = req.params.id;
    Users.findById(search_id)
    .then((user)=> res.render('./users/form_edit_user',{
        user: user,
        err: null,
    }));
});
router.post('/edit/:id',(req,res,next) => {

    let edited_user_id = req.params.id;
    // res.send(edited_user_id)
    let edited_user_data = {};
    edited_user_data.first_name = req.body.first_name,
    edited_user_data.last_name = req.body.last_name,
    edited_user_data.gender = req.body.gender,
    edited_user_data.age = req.body.age,
    edited_user_data.email = req.body.email,
    edited_user_data.phone = req.body.phone,
    // res.send(edited_user_data)
    Users.update(edited_user_data, {
        where: {
            id: edited_user_id
        }
    })
    .then(()=> res.redirect('/user/'))
    .catch((err) => {
        let search_id = req.params.id;
        Users.findById(search_id)
        .then((user) => {
            res.render('./users/form_edit_user',{
                user: user,
                err: null,
                // err: err.errors[0].message,
            })
        })
    })
})
//DELETE
router.get('/delete/:id',(req,res,next) => {
    let user_to_be_deleted = req.params.id
;   Users.destroy({
        where: {
            id: user_to_be_deleted,
        }
    })
    .then(()=> res.redirect('/user/'));
})

router.get('/:id/dashboard', (req, res) => {
  let inputId = req.params.id
  Users.findById(inputId)
  .then(user => {
    Partner.findAll()
    .then(partners => {
      // res.send({ user, partners })
      res.render('./dashboard/search',{ user, partners })
    })
  })
})

module.exports = router;
