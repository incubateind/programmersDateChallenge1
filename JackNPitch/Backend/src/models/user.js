const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const md5 = require('md5')


const calculateRisk = (selfAssessment) => {
    let count = 0
    selfAssessment.forEach((element) => {
        if (element === true)
            count++
    })

    if (selfAssessment[8] === true)
        count++

    return count
} 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0)
                throw new Error("Age must be a positive number")
        }
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 7,
        trim: true,
        required: true,
        validate(value) {
            if (value.toLowerCase().includes('password'))
                throw new Error('Password contains "password"')
        }
    },
    location: [String],
    healthConditions: [String],
    selfAssessment: [Boolean],
    occupation: {
        type: String,
        required: true,
        trim: true,
    },
    medic: {
        type: Boolean,
        default: false
    },
    risk : {
        type: Number
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
}, {
    timestamps: true,
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: "3600 seconds"})
    
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()
    
    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({email})
    if (!user)
        throw new Error("Unable to login")
    const isMatched = await bcrypt.compare(password, user.password)
    if (!isMatched)
        throw new Error("Unable to login")
    return user
}

userSchema.pre('save', async function(next) {
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    
    if (user.isModified('email')) {
        user.email = md5(user.email)
    }
    if (user.isModified('name')) {
        user.name = md5(user.name)
    }
    if (user.isModified('phone')) {
        user.phone = md5(user.phone)
    }
    if (user.isModified('occupation')) {
        user.occupation = md5(user.occupation.charAt(0).toUpperCase() + user.occupation.slice(1))
    }
    if (user.isModified('gender')) {
        user.gender = md5(user.gender.charAt(0).toUpperCase() + user.gender.slice(1))
    }
    
    if (user.isModified('selfAssessment')) {
        user.risk = calculateRisk(user.selfAssessment)
    }
    next()
})

const User = mongoose.model('User', userSchema)

module.exports = User