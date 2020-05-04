const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    myapps: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:'myapp'
    },
    name: {
        type: String,
    },
    age: {
        type: String
    },
    email: {
        type: String
        
    },
    address: {
        type: String
        
    },
    mobile: {
        type: Number
        
    }
});

module.exports = UserEmp = mongoose.model('myappEmp', UserSchema);