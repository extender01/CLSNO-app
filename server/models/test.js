const mongoose = require('mongoose');



let TestSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 1
    },
    where: {
        type: String,
        required: true
    }
});






let Test = mongoose.model('Test', TestSchema);

module.exports = {Test};
