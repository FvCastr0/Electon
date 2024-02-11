const { Router } = require('express');
const User = require('../controller/User');
const verifyToken = require('../middlewares/verifyToken');

const router = new Router();

router.post('/create', User.store);
router.post('/login', User.login);
router.post('/verifyToken', User.verifyIfTokenIsValidAndReturnUsername);

router.get('/', verifyToken, User.show);
router.post('/cart/add/:id', verifyToken, User.addProductToUserCart);
router.patch('/update/address', verifyToken, User.updateAddress);
router.delete('/delete', verifyToken, User.deleteUser);

module.exports = router;
