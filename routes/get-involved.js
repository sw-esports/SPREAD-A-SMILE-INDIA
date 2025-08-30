const express = require('express');
const router = express.Router();

// Get Involved main page
router.get('/', (req, res) => {
  res.render('get-involved/index', { 
    title: 'Get Involved - Spread A Smile India',
    page: 'get-involved'
  });
});

// Volunteer
router.get('/volunteer', (req, res) => {
  res.render('get-involved/volunteer', { 
    title: 'Volunteer With Us - Spread A Smile India',
    page: 'get-involved'
  });
});

// Donate
router.get('/donate', (req, res) => {
  res.render('get-involved/donate', { 
    title: 'Donate - Spread A Smile India',
    page: 'get-involved'
  });
});

// Collaborate
router.get('/collaborate', (req, res) => {
  res.render('get-involved/collaborate', { 
    title: 'Collaborate With Us - Spread A Smile India',
    page: 'get-involved'
  });
});

// Careers
router.get('/careers', (req, res) => {
  res.render('get-involved/careers', { 
    title: 'Careers & Internships - Spread A Smile India',
    page: 'get-involved'
  });
});

module.exports = router;