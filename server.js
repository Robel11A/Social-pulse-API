// require('dotenv').config(); // Load environment variables from .env file

const db = require('./config/connection');
const express = require('express');
const app = express();
const routes = require('./api');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
db.once("open", () => {
  app.listen(3001, () => {

    console.log('API server running on port 3001!');
  });
  

})


