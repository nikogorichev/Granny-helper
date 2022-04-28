const router = require('express').Router();
const { Card } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    if (res.locals.isAuth) {
      const images = await Card.findAll({ where: { id_granny: req.session.uid }, raw: true });
      console.log(images);
      res.render('main', { images });
    } else {
      res.render('main');
    }
  });

router.get('/instruction', (req, res) => {
  res.render('instruction');
});

router.get('/card/:id', (req, res) => {
  res.render('card');
});

router.get('/profile', (req, res) => {
  res.render('profile');
});

router.route('/login')
  .get((req, res) => {
    res.render('login');
  });

router.route('/register')
  .get((req, res) => {
    res.render('register');
  });

router.get('/showAddForm', (req, res) => {
  res.render('addImage');
});

module.exports = router;
