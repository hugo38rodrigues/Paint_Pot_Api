import {sequelize} from "./sequelize.js"
import {Pot} from "../model/pots.model.js";
import {ModelPlaneModel} from "../model/model-plane.model.js";


export class DB {
  async initializeDatabase() {
    try {
      await sequelize.authenticate()
      console.log('Connection has been established successfully.')
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

      // add user id foreign key to all projects
      ModelPlaneModel.belongsTo(Pot, { foreignKey: 'id_pot' });
      Pot.hasMany(ModelPlaneModel, { foreignKey: 'id_pot' })

      await Pot.bulkCreate([
        {color: 'black', brand: 'Italery', ref_code: 8585},
        {color: 'yellow', brand: 'Italery', ref_code: 8688},
      ])
      await ModelPlaneModel.bulkCreate([
        {name: 'avion de chasse 1', ref_code: 8585, image: 'toto'},
      ])


      console.log('Database synchronized successfully.')
    } catch (error) {
      console.error('Unable to connect to the database:', error)
    }
  }
}
