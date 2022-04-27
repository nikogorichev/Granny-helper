const router = require('express').Router();

router.route('/')
   .get((req, res) => {
      res.render('main')
   });

   module.exports = router;
