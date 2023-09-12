import { sequelize } from "../config/sequelize.js";
import { DataTypes } from "sequelize";
import {Pot} from "./pots.model.js";

export const ModelPlaneModel = sequelize.define('model_plane', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    pot_list: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    ref_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

ModelPlaneModel.hasMany(Pot, {
    foreignKey: 'modelPlaneID'
})
