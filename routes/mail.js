const express = require('express');
const router = express.Router();
const ModuleMail = require('../modules/ModuleMail');

router.get('/', async (req, res) => {
  const userFullData = await ModuleMail.getAllData() 

  res.render('mail', {
    title: 'Mail',
    isMail: true,
    userFullData
  });
});

module.exports = router;