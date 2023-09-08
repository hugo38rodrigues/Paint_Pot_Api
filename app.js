const express = require('express')
const app = express()
const dotenv = require("dotenv").config()
const connectionDB = require('./config/db')

const port = 3000

//Middleware qui permet de traiter les données de la request
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/paint-pots", require("./routes/paint-pots.routes"))
connectionDB.sync().then((console.log("connexion bdd"))).catch(error => console.log(error))



// Launch Server
app.listen(port, () => {
    console.log(`Le serveur à démarré sur le port:  ${port}`)
})
