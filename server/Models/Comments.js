const { DataTypes } = require('sequelize');
const sequelize = require('../Database/db');
const Posts = require('./Posts');

const Comments = sequelize.define('Comment', {
    body: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: Posts,
            key: 'id',
        }
    }
}, {
    timestamps: true,
});

module.exports = Comments;
