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

      res.status(200).json({ user, success: true });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong', success: false });
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
        res.status(200).json({ msg: 'User created successfully', success: true });
      } else res.status(400).json({ msg: 'This email is already in use', success: false });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong', success: false });
    }
  }

  async updateAddress(req, res) {
    try {
      await User.updateOne({ _id: req.userId }, { address: req.body.address });
      res.status(200).json({ msg: 'Address added successfully', success: true });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong', success: false });
    }
  }

  async login(req, res) {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const password = bcrypt.compareSync(req.body.password, user.password);
        if (password) {
          const exp = Math.floor(Date.now() / 1000) + (30 * 24 * 60 * 60);
          const token = jwt.sign({ id: user._id }, process.env.SECRET, { expiresIn: exp });
          res.status(200).json({ msg: 'User logged in successfully', token, success: true });
        } else res.status(400).json({ msg: 'The password is incorrect', success: false });
      } else res.status(400).json({ msg: 'User does not exist', success: false });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong', success: false });
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
          res.status(200).json({ msg: 'Product added to cart', success: true });
        } else res.status(400).json({ msg: 'The product is unavailable', success: false });
      } else res.status(400).json({ msg: 'This product does not exist', success: false });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong', success: false });
    }
  }

  async verifyIfTokenIsValidAndReturnUsername(req, res) {
    try {
      const { token } = req.body;
      if (!token) {
        return res.status(401).json({ msg: 'Unauthorized token' });
      }
      const decoded = jwt.verify(token, process.env.SECRET);
      req.userId = decoded.id;
      const { name } = await User.findOne({ _id: req.userId });
      res.status(200).json({ name });
      if (!req.userId) {
        return res.status(401).json({ msg: 'Unidentified user' });
      }
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong', success: false });
    }
  }

  async deleteUser(req, res) {
    try {
      const { userId } = req;
      await User.deleteOne({ _id: userId });
      res.status(200).json({ msg: 'User deleted successfully', success: true });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong', success: false });
    }
  }
}

module.exports = new UserController();
