const { DataTypes } = require('sequelize');
const sequelize = require('../Database/db');
const Autobot = require('./Autobot');

const Posts = sequelize.define('Post', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    autobotId: {
        type: DataTypes.INTEGER,
        references: {
            model: Autobot,
            key: 'id',
        }
    }
}, {
    timestamps: true,
});

module.exports = Posts;
