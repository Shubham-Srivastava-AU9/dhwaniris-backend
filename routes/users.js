const express = require('express');
const router = express.Router();
const User = require('../models/User')
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');


// login  route
router.post('/', async (req,res)=>{
   
   try {
    const {email , password } = req.body
    let user =  await User.findOne({email})
    if(user){
        return res.status(400).json({msg : 'user already exsist'})
    }
    user = new User({
        
        email,
        password
    })
    
    await user.save()

    const payload ={
        user : {
            id: user.id
        }
    }
    jwt.sign(payload,config.get('jwtSecret'),{
        expiresIn:36000
    },(err,token)=>{
        if(err) throw err;
        res.json({token , msg : "Login Success"})//token include the user login id
    })

   } catch (error) {
    console.error(error.message);
    res.status(500).send('Server eror')
       
   }
})

//log out
router.post('/logout',[
    check('email','Please enter a valid email').isEmail(),
    check('password','Password is requires').exists()
], async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({msg:'logout Successfull' });
    }
    
    
})


module.exports = router