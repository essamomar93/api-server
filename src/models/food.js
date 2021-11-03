'use strict';


// Our table schema
const Food = (sequelize, DataTypes) => sequelize.define('food', {

  foodName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
});

module.exports = Food;