const express = require('express');
const router = express.Router();

// About main page
router.get('/', (req, res) => {
  res.render('about/index', { 
    title: 'About Us - Spread A Smile India',
    page: 'about'
  });
});

// Mission & Vision
router.get('/mission', (req, res) => {
  res.render('about/mission', { 
    title: 'Mission & Vision - Spread A Smile India',
    page: 'about'
  });
});

// History
router.get('/history', (req, res) => {
  res.render('about/history', { 
    title: 'Our History - Spread A Smile India',
    page: 'about'
  });
});

// Founder's message
router.get('/founder', (req, res) => {
  res.render('about/founder', { 
    title: 'Founder\'s Message - Spread A Smile India',
    page: 'about'
  });
});

// Team
router.get('/team', (req, res) => {
  res.render('about/team', { 
    title: 'Our Team - Spread A Smile India',
    page: 'about'
  });
});

// Partners
router.get('/partners', (req, res) => {
  res.render('about/partners', { 
    title: 'Our Partners - Spread A Smile India',
    page: 'about'
  });
});

module.exports = router;