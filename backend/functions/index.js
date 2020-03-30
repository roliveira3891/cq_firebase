const functions = require('firebase-functions');
const express = require('express');
const routes = require('./scr/routes');

const app = express();
app.use(routes);

exports.app = functions.https.onRequest(app);


