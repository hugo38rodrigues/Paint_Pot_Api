import express, { json, urlencoded } from 'express'
import { DB } from './config/DB.js'
import { router as paintPotsRoutes } from './routes/paint-pots.routes.js'

const app = express()
const port = 5000
const db = new DB()

// Middleware qui permet de traiter les données de la request
app.use(json())
app.use(urlencoded({ extended: false }))

// Utilisation des routes
app.use('/paint-pots', paintPotsRoutes)
db.initializeDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Le serveur a démarré sur le port: ${port}`)
  })
})
