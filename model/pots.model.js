import { DataTypes } from 'sequelize'
import { sequelize } from '../config/sequelize.js'
import {PotModelPlane} from "./jonction.model.js";

export const Pot = sequelize.define('pots', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  color: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ref_code: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
})

