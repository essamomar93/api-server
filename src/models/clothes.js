'use strict';

// Our table schema
const Clothes = (sequelize, DataTypes) => sequelize.define('clothes', {

  clothesName: {
    type: DataTypes.STRING,
    allowNull: false
  },
});

module.exports = Clothes;