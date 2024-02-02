const express = require('express');
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
  }

  routes() {
    this.app.use('/user', user);
    this.app.use('/product', product);
  }
}

module.exports = new App();
