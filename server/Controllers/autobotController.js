const { Autobot } = require('../Models/Autobot'); // Adjust the path as needed

// Controller function to get Autobots with pagination
async function getAutobots(req, res) {
    try {
        const autobots = await Autobot.findAll({
            limit: 10,
            offset: (req.query.page || 0) * 10
        });
        res.json(autobots);
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch autobots' });
    }
}

module.exports = { getAutobots };
