import {sequelize} from "../config/sequelize.js";
import {Sequelize} from "sequelize";

export const ModelPlaneModel = sequelize.define('model_plane', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    pot_list: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    ref_code: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
