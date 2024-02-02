const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models/User');
const { Product } = require('../models/Product');

class UserController {
  async show(req, res) {
    try {
      const { userId } = req;
      const findUser = await User.findOne({ _id: userId });

      const user = {
        name: findUser.name,
        email: findUser.email,
        address: findUser.address,
      };

      res.status(200).json({ user });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }

  async store(req, res) {
    try {
      const verifyIfUserEmailExist = await User.findOne({ email: req.body.email });
      const hashedPassword = bcrypt.hashSync(req.body.password, 10);
      const data = {
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
      };

      if (!verifyIfUserEmailExist) {
        await User.create(data);
        res.status(200).json({ msg: 'User created successfully' });
      } else res.status(400).json({ msg: 'This email is already in use' });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }

  async updateAddress(req, res) {
    try {
      await User.updateOne({ _id: req.userId }, { address: req.body.address });
      res.status(200).json({ msg: 'Address added successfully' });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      const password = bcrypt.compareSync(req.body.password, user.password);
      if (user) {
        if (password) {
          const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: '1m' });
          res.status(200).json({ msg: 'User logged in successfully', token });
        } else res.status(400).json({ msg: 'The password is incorrect' });
      } else res.status(400).json({ msg: 'User does not exist' });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }

  async addProductToUserCart(req, res) {
    try {
      const { id } = req.params;
      const { userId } = req;
      const product = await Product.findOne({ _id: id });
      const user = await User.findOne({ _id: userId });
      if (product !== null) {
        if (product.stock >= 1) {
          user.cart.push(product);
          user.save();
          res.status(200).json({ msg: 'Product added to cart' });
        } else res.status(400).json({ msg: 'The product is unavailable' });
      } else res.status(400).json({ msg: 'This product does not exist' });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }

  async deleteUser(req, res) {
    try {
      const { userId } = req;
      await User.deleteOne({ _id: userId });
      res.status(200).json({ msg: 'User deleted successfully' });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }
}

module.exports = new UserController();
