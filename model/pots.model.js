/* eslint-disable import/no-cycle */
import { Sequelize } from 'sequelize'
import { sequelize } from '../config/DB.js'

export const Pot = sequelize.define('Pots', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
  },
  brand: {
    type: Sequelize.STRING,
  },
  code: {
    type: Sequelize.INTEGER,
  },
})
