const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('main');
  });
router.route('/login')
  .get((req, res) => {
    res.render('login');
  });
router.route('/register')
  .get((req, res) => {
    res.render('register');
  });

module.exports = router;
