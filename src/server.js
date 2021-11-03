'use strict';

const express = require('express');
require('dotenv').config();

const app = express();

const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');

const logger = require('./middleware/logger');
const validator = require('./middleware/validator');

const clothesRouter = require('./routes/clothes')
const foodRouter = require('./routes/food')

const PORT = process.env.PORT || 3000;


app.use(logger);

app.get('/person', validator, (req, res, next) => {

  const output = req.query.name;

  res.status(200).json({ name: output });
});

app.use(express.json());

app.use(clothesRouter);
app.use(foodRouter);

app.use('*', notFoundHandler);
app.use(errorHandler);

function start() {
  app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
  });
}


module.exports = {
  server: app,
  start: start
}