import {sequelize} from '../config/sequelize.js'
import {DataTypes} from "sequelize";
import {Pot} from "./pots.model.js";
import {ModelPlaneModel} from "./model-plane.model.js";

export const PotModelPlane = sequelize.define('pot_model_plane', {
    PotId: {
        type: DataTypes.INTEGER,
        references: {
            model: Pot, // 'Movies' would also work
            key: 'id'
        }
    },
    ModelPlaneId: {
        type: DataTypes.INTEGER,
        references: {
            model: ModelPlaneModel, // 'Actors' would also work
            key: 'id'
        }
    }
});
