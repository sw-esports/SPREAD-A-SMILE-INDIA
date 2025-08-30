const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home - Spread A Smile India',
    page: 'home'
  });
});

module.exports = router;