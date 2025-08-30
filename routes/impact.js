const express = require('express');
const router = express.Router();

// Impact main page
router.get('/', (req, res) => {
  res.render('impact/index', { 
    title: 'Our Impact - Spread A Smile India',
    page: 'impact'
  });
});

// Key Achievements
router.get('/achievements', (req, res) => {
  res.render('impact/achievements', { 
    title: 'Key Achievements - Spread A Smile India',
    page: 'impact'
  });
});

// Success Stories
router.get('/stories', (req, res) => {
  res.render('impact/stories', { 
    title: 'Success Stories - Spread A Smile India',
    page: 'impact'
  });
});

// Testimonials
router.get('/testimonials', (req, res) => {
  res.render('impact/testimonials', { 
    title: 'Testimonials - Spread A Smile India',
    page: 'impact'
  });
});

// Annual Reports
router.get('/reports', (req, res) => {
  res.render('impact/reports', { 
    title: 'Annual Reports - Spread A Smile India',
    page: 'impact'
  });
});

module.exports = router;