const Product = require('~/Documents/class hw/hw-13-ORM-moody/models/Product');
const express = require('express');
const router = express.Router();

router.get('/products', async (req, res) => {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
