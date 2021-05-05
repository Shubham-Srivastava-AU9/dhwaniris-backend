const express = require('express');
const router = express.Router();
const Districts = require('../models/Distric')

//@route             get api/states
//@description       Get all States


router.get('/', async (req,res)=>{
    try {
        const districts = await Districts.find(req.body.districts);
        res.json(districts)
    } catch (err) {
        console.error(err.message);
        res.send('Server eror')
        
    }

    
})

//@route             Post api/states
//@description       Post a new states

router.post('/', async (req,res)=>{
    try {
        const {districts} = req.body

        district = new Districts({
            districts,
        })
        await district.save()
        res.json({msg : "New District Added"})
        
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server eror')
        
    }
})

   
    



module.exports = router


