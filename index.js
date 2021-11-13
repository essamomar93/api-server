'use strict';

const { start } = require('./src/server');
const { db } = require('./src/models/index');

// we first connect to the DB, then we run our server
db.sync().then(() => {start();}).catch(console.error);