const { Comment } = require('../Models/Comments');

// Controller function to get comments by postId
async function getCommentsByPostId(req, res) {
    try {
        const comments = await Comment.findAll({
            where: { postId: req.params.id },
            limit: 10,
            offset: (req.query.page || 0) * 10
        });
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch comments' });
    }
}

module.exports = { getCommentsByPostId };
