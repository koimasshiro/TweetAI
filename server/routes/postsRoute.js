const express = require('express');
const router = express.Router();
const { getPostsByAutobotId } = require('../Controllers/postController');


router.get('/:id', getPostsByAutobotId);

module.exports = router;
