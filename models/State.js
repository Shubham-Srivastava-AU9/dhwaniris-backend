const mongoose = require('mongoose');

const StateSchema = mongoose.Schema({
    
    states : {
        type : String,
        required : true,
    }
    
})

module.exports = mongoose.model('states',StateSchema)