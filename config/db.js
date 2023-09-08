const mysql      = require('mysql');
const connectionDB = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '1234567890',
    database : 'Paint-pot'
});
module.exports = connectionDB

