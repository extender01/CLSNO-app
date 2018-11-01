const mongoose = require('mongoose');

//======= SCHEMA =============

let CustomNoteSchema = new mongoose.Schema ({
    nick: {
        type: String
    },
    customNote: {
        type: String
    }
});

let CustomNote = mongoose.model('CustomNote', CustomNoteSchema);

module.exports = {CustomNote};