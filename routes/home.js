const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home', {
    title: 'Mail Maker',
    isUser: true
  });
});

module.exports = router;