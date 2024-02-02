const { Product } = require('../models/Product');

class ProductController {
  async show(req, res) {
    try {
      res.status(200).json({ data: await Product.find() });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }

  async store(req, res) {
    try {
      const verifyIfProductExist = await Product.findOne({ name: req.body.name });

      if (!verifyIfProductExist) {
        await Product.create(req.body);
        res.status(200).json({ msg: 'Product created successfully' });
      } else res.status(400).json({ msg: 'This product already exists' });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }

  async changeStock(req, res) {
    try {
      await Product.updateOne({ _id: req.params.id }, { stock: req.body.stock });
      res.status(200).json({ msg: 'Product stock successfully changed' });
    } catch (e) {
      res.status(500).json({ msg: 'Something went wrong' });
    }
  }
}

module.exports = new ProductController();
