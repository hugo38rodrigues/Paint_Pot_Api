/* eslint-disable import/no-cycle */
/* eslint-disable no-empty-function */
import Sequelize from 'sequelize'
import { config } from 'dotenv'
import { Pot } from '../model/pots.model.js'

config()

export const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.MYSQL_USER,
  process.env.MYSQL_ROOT_PASSWORD,
  {
    dialect: 'mysql',
    host: 'localhost',
  },
)

export class DB {
  constructor() {}

  async initializeDatabase() {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
      // Synchronisation du modèle avec la base de données
      // Utilisez { force: true } si vous souhaitez réinitialiser la base de données à chaque démarrage
      await sequelize.sync({ force: false })

      console.log('Database synchronized successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
}
