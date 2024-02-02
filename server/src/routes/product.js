const { Router } = require('express');
const Product = require('../controller/Product');

const router = new Router();

router.get('/', Product.show);
router.post('/create', Product.store);
router.patch('/changeStock/:id', Product.changeStock);

module.exports = router;
