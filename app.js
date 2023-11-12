const express = require('express')
const connectDB = require('./db')
const dotenv = require('dotenv').config()
const port = 5000

const app = express()

//connection DB
connectDB()

//Middleware 
app.use(express.json())
app.use(express.urlencoded())

app.use('/pots', require('./routes/paint-pots.routes'))
app.use('/modelFly', require('./routes/model-fly.routes'))

// Run server
app.listen(port, () => console.log(" serveur démarré au port: " + port))