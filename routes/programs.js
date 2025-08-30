const express = require('express');
const router = express.Router();

// Programs main page
router.get('/', (req, res) => {
  res.render('programs/index', { 
    title: 'Our Programs - Spread A Smile India',
    page: 'programs'
  });
});

// Education Support
router.get('/education', (req, res) => {
  res.render('programs/education', { 
    title: 'Education Support - Spread A Smile India',
    page: 'programs'
  });
});

// Health & Wellness
router.get('/health', (req, res) => {
  res.render('programs/health', { 
    title: 'Health & Wellness - Spread A Smile India',
    page: 'programs'
  });
});

// Food & Nutrition
router.get('/nutrition', (req, res) => {
  res.render('programs/nutrition', { 
    title: 'Food & Nutrition - Spread A Smile India',
    page: 'programs'
  });
});

// Vocational Training
router.get('/vocational', (req, res) => {
  res.render('programs/vocational', { 
    title: 'Vocational Training - Spread A Smile India',
    page: 'programs'
  });
});

// Events & Campaigns
router.get('/events', (req, res) => {
  res.render('programs/events', { 
    title: 'Events & Campaigns - Spread A Smile India',
    page: 'programs'
  });
});

module.exports = router;