const Sequelize = require('sequelize')
const dotenv = require('dotenv')
dotenv.config()

module.exports = new Sequelize("", process.env.MYSQL_USER, process.env.MYSQL_ROOT_PASSWORD, { 
    dialect: "mysql",    host: "localhost" 
});





