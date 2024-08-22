const express = require('express');
const router = express.Router();
const { getCommentsByPostId } = require('../Controllers/commentController');

// Define routes and associate them with controller functions
router.get('/:id', getCommentsByPostId);

module.exports = router;
