const express = require('express');
const router = express.Router();

// Contact page
router.get('/', (req, res) => {
  res.render('contact', { 
    title: 'Contact Us - Spread A Smile India',
    page: 'contact'
  });
});

// Contact form submission
router.post('/', (req, res) => {
  // TODO: Handle contact form submission
  const { name, email, subject, message } = req.body;
  
  // For now, just redirect back with success
  res.redirect('/contact?success=true');
});

module.exports = router;