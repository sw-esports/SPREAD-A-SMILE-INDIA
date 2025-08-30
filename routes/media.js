const express = require('express');
const router = express.Router();

// Media main page
router.get('/', (req, res) => {
  res.render('media/index', { 
    title: 'Media - Spread A Smile India',
    page: 'media'
  });
});

// Gallery
router.get('/gallery', (req, res) => {
  res.render('media/gallery', { 
    title: 'Photo Gallery - Spread A Smile India',
    page: 'media'
  });
});

// Press Coverage
router.get('/press', (req, res) => {
  res.render('media/press', { 
    title: 'Press Coverage - Spread A Smile India',
    page: 'media'
  });
});

module.exports = router;