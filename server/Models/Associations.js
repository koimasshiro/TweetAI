const Autobot = require('./Autobot');
const Posts = require('./Posts');
const Comments = require('./Comments');

Autobot.hasMany(Posts, { as: 'posts', foreignKey: 'autobotId' });
Posts.belongsTo(Autobot, { foreignKey: 'autobotId' });
Posts.hasMany(Comments, { as: 'comments', foreignKey: 'postId' });
Comments.belongsTo(Posts, { foreignKey: 'postId' });

module.exports = { Autobot, Posts, Comments };
