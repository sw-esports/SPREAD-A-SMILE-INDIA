const express = require('express');
const router = express.Router();

// Home page
router.get('/', (req, res) => {
  res.render('index', { 
    title: 'Home - Spread A Smile India',
    page: 'home',
    user: req.user || null,
    theme: req.session.theme || 'light'
  });
});

module.exports = router;