const mongoose = require('mongoose');

const ChildSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    father : {
        type : String,
        required : true,
    },
    gender:{
        type : String,
        require: true
    },
    
    
    
    
})

module.exports = mongoose.model('child',ChildSchema)