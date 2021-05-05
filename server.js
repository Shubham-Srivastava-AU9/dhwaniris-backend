const express = require('express');
const { connect } = require('mongoose');
const connectDB = require('./config/db')


const app = express()
// connect DB
connectDB()

//Init Middilware
app.use(express.json({extended : false}))


const PORT = process.env.PORT || 8900;

app.get('/',(req,res)=>{
    res.json({msg:'hello world'})
})
//Define Routes 
app.use('/api/users',require('./routes/users'));
app.use('/api/states',require('./routes/state'));
app.use('/district',require('./routes/districts'));
app.use('/api/child',require('./routes/child'));










app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))