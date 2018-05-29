'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const President = db.define('presidents', {
  president: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  birthday: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  birthplace: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  death_day: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  death_place: {
    type: Sequelize.TEXT,
    allowNull: false
  },

});

module.exports = President;
