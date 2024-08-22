const { DataTypes } = require('sequelize');
const sequelize = require('../Database/db');

const Autobot = sequelize.define('Autobot', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true,
        }
    }
}, {
    timestamps: true,
});

module.exports = Autobot;
