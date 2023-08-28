const Tag = require('~/Documents/class hw/hw-13-ORM-moody/models/Tag');
const express = require('express');
const router = express.Router();

router.get('/tags', async (req, res) => {
    try {
      const tags = await Tag.findAll();
      res.json(tags);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;
