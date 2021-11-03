'use strict';
require('dotenv').config();

const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const { Sequelize, DataTypes } = require('sequelize');

const Collection = require('./collection-class');

let seqOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl:
        {
            require: true,
            rejectUnauthorized: false,
        }
    }
} : {};

let sequelize = new Sequelize(POSTGRES_URI, seqOptions);

const clothesSchema = require('./clothes');
const foodSchema = require('./food');

const clothesModel = clothesSchema(sequelize, DataTypes);
const foodModel = foodSchema(sequelize, DataTypes);


const clothesCollection = new Collection(clothesModel);
const foodCollection = new Collection(foodModel);


module.exports = {
    db: sequelize,
    clothesCollection: clothesCollection,
    foodCollection: foodCollection
}