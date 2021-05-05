const mongoose = require('mongoose');

const DistSchema = mongoose.Schema({
    
    districts : {
        type : String,
        required:true
        
       
        
    }
    
})

module.exports = mongoose.model('districts',DistSchema)