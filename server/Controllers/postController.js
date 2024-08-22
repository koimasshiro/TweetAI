const { Post } = require('../Models/Posts');


// Controller function to get posts by autobotId
async function getPostsByAutobotId(req, res) {
    try {
        const posts = await Post.findAll({
            where: { autobotId: req.params.id },
            limit: 10,
            offset: (req.query.page || 0) * 10
        });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: 'Cannot fetch posts' });
    }
}

module.exports = { getPostsByAutobotId };
