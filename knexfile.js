require('babel-register');

const dbConfig = require('./src/server/config/database');

module.exports = Object.assign({}, dbConfig.default);