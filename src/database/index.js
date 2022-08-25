const Sequelize = require('sequelize')

const dbConfig = require('../config/database.js');

const User = require('../models/User.js');
const Address = require('../models/Address')

const connection = new Sequelize(dbConfig);



try {
  connection.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

User.init(connection);
Address.init(connection);

Address.associate(connection.models);
User.associate(connection.models);

module.exports = connection;