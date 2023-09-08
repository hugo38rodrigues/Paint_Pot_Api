const express = require('express')
const app = express()
const connectionDB = require('./config/db')
const dotenv = require('dotenv').config()
const port = 3000

//Middleware qui permet de traiter les données de la request
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use("/paint-pots", require("./routes/paint-pots.routes"))
connectionDB.connect((error) =>{
    if(error){
        console.log(`Probleme de connection ${error.stack}`)
        return
    }
    console.log("connection réussie !!!!")
})

// Launch Server
app.listen(port, () => {
    console.log(`Le serveur à démarré sur le port:  ${port}`)
})
