const mongoose = require('mongoose')
const validator = require('validator')

const medicalCentreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isMobilePhone(value))
                throw new Error('Phone Number is invalid')}
    },
    location: [String]
}, {
    timestamps: true,
})

const MedicalCentre = mongoose.model('MedicalCentre', medicalCentreSchema)

module.exports = MedicalCentre