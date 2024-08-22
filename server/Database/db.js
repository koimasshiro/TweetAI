const { Sequelize } = require('sequelize');
const {DATABASE_NAME, DATABASE_USER, DATABASE_HOST, DATABASE_DIALECT, DATABASE_PASSWORD} = require('../config/config')


const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: DATABASE_DIALECT,
    logging: console.log,
});

async function verifyConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the MySQL database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the MySQL database:', error);
    }
}

verifyConnection();

module.exports = sequelize;
