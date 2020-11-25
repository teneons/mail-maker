const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('mail', {
    title: 'Mail',
    isUser: true
  });
});

module.exports = router;