const express = require('express')
const User = require('../models/user')
const router = new express.Router()

router.get('/count', async (req, res) => {
    if (req.query.medic)
    {
        const medicCount = await User.countDocuments({ medic: req.query.medic })
        res.send({ medicCount })
    }
    else if (req.query.users)
    {
        const userCount = await User.countDocuments({ medic: false })
        res.send({ userCount})
    }
    else (
        res.status(400).send()
    )
})

router.get('/locations', async (req, res) => {
    const users = await User.find({ medic: false }) 
    let userDetails = {} 
    const highProbability = []; const lowProbability = []
    users.forEach(({ location, healthConditions, risk }) => {
        if (risk >= 7)
            highProbability.push({ location, healthConditions, risk })
        else
            lowProbability.push({ location, healthConditions, risk })
    userDetails = { highProbability, lowProbability }
    })    
    res.send({ 
        total: highProbability.length + lowProbability.length, 
        userDetails })
})

module.exports = router