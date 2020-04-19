const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const md5 = require('md5')
const router = new express.Router()

router.post('/users', async (req, res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    }catch (error) {
        res.status(400).send(error)
    }
})

router.post("/users/login", async(req, res) => {
    try {
        const user = await User.findByCredentials(md5(req.body.email), req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    }catch (error){
        console.log("Hello - 2")
        res.status(400).send(error)
    }
})

router.post("/users/logout", auth, async(req, res) => {
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await req.user.save()
        req.send()
    }catch (error){
        res.status(500).send(error)
    } 
})

router.post("/users/logoutAll", auth, async(req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send()
    }catch (error){
        res.status(500).send(error)
    } 
})

router.get('/users/me', auth, async (req, res) => {
    return res.send(req.user)
})

router.patch('/users/me', auth, async(req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['name', 'email', 'password', 'phone', 'gender', 'age']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))
    
    if (!isValidOperation)
        return res.status(400).send({ error: "Invalid update"})

    const _id = req.user._id
    try {
        const user = req.user
        updates.forEach((update) => user[update] = req.body[update]) // Dynamic
        await user.save()
        res.send(user)        
    }catch (error){
        res.status(400).send(error)
    }
})

router.delete('/users/me', auth, async (req, res) => {
    const _id = req.user._id
    try {
        await req.user.remove()
        res.send(req.user)
    }catch (error){
        res.status(500).send(error)
    }
})

module.exports = router