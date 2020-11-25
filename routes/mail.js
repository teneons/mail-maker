const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('mail', {
    title: 'Mail',
    isMail: true
  });
});

module.exports = router;