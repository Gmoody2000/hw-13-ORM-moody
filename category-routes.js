const Category = require('~/Documents/class hw/hw-13-ORM-moody/models/Category');
const express = require('express');
const router = express.Router();

router.get('/categories', async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.json(categories);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
