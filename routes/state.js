const express = require('express');
const router = express.Router();
const States = require('../models/State')

//@route             get api/states
//@description       Get all States


router.get('/', async (req,res)=>{
    try {
        const state = await States.find(req.states);
        res.json(state)
    } catch (err) {
        console.error(err.message);
        res.send('Server eror')
        
    }

    
})

//@route             Post api/states
//@description       Post a new states

router.post('/', async (req,res)=>{
    try {
        const {states} = req.body

        state = new States({
            states,
        })
        await state.save()
        res.json({msg : "New State Added"})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server eror')
        
    }
})

   
    



module.exports = router


