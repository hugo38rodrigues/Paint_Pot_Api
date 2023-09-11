import {config} from "dotenv";
import Sequelize from "sequelize";

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
