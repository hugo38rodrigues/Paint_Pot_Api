import {sequelize} from "./sequelize.js"
import {Pot} from "../model/pots.model.js";
import {ModelPlaneModel} from "../model/model-plane.model.js";


export class DB {
  async initializeDatabase() {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
      ModelPlaneModel.hasMany(Pot, {
        foreignKey: 'modelPlaneId'
      })
      // Synchronisation des modèles avec la base de données
      try {
        // Utilisez { force: true } si vous souhaitez réinitialiser la base de données à chaque démarrage
        await Pot.sync({force: true})
        console.log("création de la table Pot")
      } catch (error) {
        console.log(`Erreur lors de la création de la table Pot: ${error}`)
      }

      try {
        await ModelPlaneModel.sync({force: true})
        console.log("création de la table Maquette")
      } catch (error) {
      console.log(`Erreur lors de la création de la table Maquette: ${error}`)
      }

      console.log('Database synchronized successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
}
