const mongoose = require('mongoose');

const EmailSchema = mongoose.Schema({
    email: String,
    location: String
}, {
    timestamps: true
});

module.exports = mongoose.model('Emails', EmailSchema);
