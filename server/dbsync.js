const sequelize = require('./Database/db');
const { Autobot, Posts, Comments } = require('././Models/associations');

async function syncDatabase() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.sync({ alter: true });
        console.log('Database synchronized successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

syncDatabase();

module.exports = syncDatabase;
