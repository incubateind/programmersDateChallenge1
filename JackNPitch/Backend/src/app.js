const express = require('express')
const cors = require('cors')

require('./db/mongoose')

const userRouter = require('./routers/user')
const featureRouter = require('./routers/feature')
const medicalCentreRouter = require('./routers/medicalCentre')

const app = express()

app.use(cors())
app.use(express.json())
app.use(userRouter)
app.use(featureRouter)
app.use(medicalCentreRouter)


module.exports = app

