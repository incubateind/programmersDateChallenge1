const express = require('express')
const MedicalCentre = require('../models/medicalCentre')
const router = new express.Router()

router.post('/medicalCentres', async (req, res) => {
    const medicalCentre = new MedicalCentre(req.body)
    try {
        await medicalCentre.save()
        res.status(201).send({medicalCentre})
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/medicalCentres', async (req, res) => {
    const medicalCentres = await MedicalCentre.find()
    return res.send(medicalCentres)
})

module.exports = router