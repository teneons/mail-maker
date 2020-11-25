const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('user', {
    title: 'Add new user',
    isUser: true
  });
});

module.exports = router;