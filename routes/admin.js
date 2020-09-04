const fs = require('fs');

const router = require('express').Router();

router.post('/admin/message', (req, res) => {
  const { message } = req.body;
  fs.writeFile('message.txt', message, err => {
    if (err) throw err;
    return res.redirect('/');
  });
});

module.exports = router;
