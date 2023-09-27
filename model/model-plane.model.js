import { sequelize } from "../config/sequelize.js";
import { DataTypes } from "sequelize";

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
    ref_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
