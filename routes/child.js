const express = require('express');
const router = express.Router();
const Child = require('../models/Child')

//@route             get api/states
//@description       Get all States


router.get('/', async (req,res)=>{
    try {
        const child = await Child.find(req.body.name);
        res.json(child)
    } catch (err) {
        console.error(err.message);
        res.send('Server eror')
        
    }

    
})

//@route             Post api/states
//@description       Post a new states

router.post('/', async (req,res)=>{
    try {
        const {name,father,gender} = req.body

        child = new Child({
            name,
            father,
            gender
        })
        await child.save()
        res.json({msg : "New Child Added"})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server eror')
        
    }
})

   
    



module.exports = router


