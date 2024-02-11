const express = require('express');
const cors = require('cors');
const Database = require('./database');
const user = require('./routes/user');
const product = require('./routes/product');

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    Database.connection();
  }

  middleware() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    this.app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, application/json');
      next();
    });
  }

  routes() {
    this.app.use('/api/user', user);
    this.app.use('/api/product', product);
  }
}

module.exports = new App();
