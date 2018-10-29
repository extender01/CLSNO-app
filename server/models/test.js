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
    },
    isExt: {
        type: Boolean,
        required: false
    },
    syn: {
        type: String,
        required: false
    },
    nameAk: {
        type: String,
        required: false
    },
    groupAk: {
        type: String,
        required: false
    },
    whenExtTransport: {
        type: String,
        required: false
    },
    draw: {
        type: String,
        required: false
    },
    preanal: {
        type: String,
        required: false
    },
    note: {
        type: String,
        required: false
    },
    customNote: {
        type: String,
        required: false
    },
    parcelWho: {
        type: String,
        required: false
    },
    parcelPreanal: {
        type: String,
        required: false
    },
    parcelNote: {
        type: String,
        required: false
    },
    extHowOften: {
        type: String,
        required: false
    },
    extResponse: {
        type: String,
        required: false
    },
    metodics: {
        type: String,
        required: false
    },
    unit: {
        type: String,
        required: false
    },
    expertise: {
        type: String,
        required: false
    },
    refRange: {
        type: String,
        required: false
    },
    rutCare: {
        type: Boolean,
        required: false
    },
    rutTime: {
        type: String,
        required: false
    },
    statCare: {
        type: Boolean,
        required: false
    },
    additionalOrder: {
        type: String,
        required: false
    },
    responseNote: {
        type: String,
        required: false
    },
    interfereDown: {
        type: String,
        required: false
    },
    interfereUp: {
        type: String,
        required: false
    },
    physVar: {
        type: String,
        required: false
    },
    bioHalfLife: {
        type: String,
        required: false
    }

});






let Test = mongoose.model('Test', TestSchema);

module.exports = {Test};
