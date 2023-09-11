/* eslint-disable import/no-cycle */
import { Sequelize } from 'sequelize'
import { sequelize } from '../config/sequelize.js'

export const Pot = sequelize.define('pots', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  brand: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  ref_code: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
})
