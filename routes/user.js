const express = require('express');
const router = express.Router();
const ModuleMail = require('../modules/ModuleMail')

router.get('/', (req, res) => {
  res.render('user', {
    title: 'Add new user',
    isUser: true
  });
});


router.post('/', async (req, res) => {
  console.log(req.body.companyName)
  const data = new ModuleMail(req.body.firstName, req.body.lastName, req.body.companyName)
  await data.saveUserData()

  res.redirect('/mail')

})

module.exports = router;