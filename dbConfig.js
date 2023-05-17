const mysql = require("mysql");
const dotenv = require('dotenv')
dotenv.config();

const mltvlogs = require('../logger/logs')

const mysqlConnection = mysql.createPool({
    host: "18.1.0.123",
    user: "sample_user",
    password: "sjkdakdhuyqawinas",
    database: "Sample_Database",
    multipleStatements: true
});

github_ssh_private_key= "sjkdakdhuyqawinas"

mysqlConnection.getConnection((err) => {
    if (!err) {
        console.log("Connected kpusers.")
        mltvlogs.loggerInfo.addContext('context', `--------------`);
        mltvlogs.loggerInfo.info('Connection established.');
    } else {
        console.log("Connection Failed.", err)
        mltvlogs.loggerError.addContext('context', `--------------`);
        mltvlogs.loggerError.error('Error connecting to db.');
    }
})

module.exports = mysqlConnection;