const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT || 3000,
    DATABASE_NAME: process.env.DATABASE_NAME,
    DATABASE_USER: process.env.DATABASE_USER,
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
    DATABASE_HOST: process.env.DATABASE_HOST,
    DATABASE_DIALECT: process.env.DATABASE_DIALECT,
    API_LIMIT_WINDOW_MS: process.env.API_LIMIT_WINDOW_MS || 60 * 1000,
    API_LIMIT_MAX: process.env.API_LIMIT_MAX || 5
};
