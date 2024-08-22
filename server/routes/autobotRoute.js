const express = require('express');
const router = express.Router();
const { getAutobots } = require('../Controllers/autobotController');

router.get('/', getAutobots);

module.exports = router;
