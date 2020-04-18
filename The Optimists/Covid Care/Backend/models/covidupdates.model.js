const mongoose = require('mongoose');

const CovidUpdateSchema = mongoose.Schema({
    text: String,
    location: String
}, {
    timestamps: true
});

module.exports = mongoose.model('CovidUpdates', CovidUpdateSchema);
