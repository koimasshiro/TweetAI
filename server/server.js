const express = require('express');
const rateLimit = require('express-rate-limit');
const { PORT, API_LIMIT_WINDOW_MS, API_LIMIT_MAX } = require('./config/config');
const createAutobots = require('./cron/autobotcreate');
const autobotsRouter = require('./routes/autobotRoute');
const postsRouter = require('./routes/postsRoute');
const commentsRouter = require('./routes/commentsRoute');

const app = express();


app.use(express.json());

// Rate Limiting
const apiLimiter = rateLimit({
    windowMs: API_LIMIT_WINDOW_MS,
    max: API_LIMIT_MAX
});
app.use('/api/', apiLimiter);

// Use routers
app.use('/api/autobots', autobotsRouter);
app.use('/api/posts', postsRouter);
app.use('/api/comments', commentsRouter);

// Real-time Autobot count
app.get('/api/autobot-count', async (req, res) => {
    try {
        const count = await Autobot.count();
        res.json({ count });
    } catch (error) {
        res.status(500).json({ error: 'Unable to fetch autobot count' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
	console.log('Autobots creation running...')
});
