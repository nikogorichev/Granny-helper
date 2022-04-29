const router = require('express').Router();
const async = require('hbs/lib/async');
const {
  Card, Granny_user, Child_user, Relation,
} = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    if (res.locals.isAuth) {
      const images = await Card.findAll({ where: { id_granny: req.session.uid }, raw: true });
      res.render('main', {
        images, isAuth: res.locals.isAuth, user: res.locals.name, type: res.locals.type,
      });
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
router.route('/lk')
  .get(async (req, res) => {
    if (res.locals.type) {
      const granny = await Granny_user.findOne({ where: { id: req.session.uid }, raw: true });
      res.render('lk', {
        name: granny.name, email: granny.email, password: granny.password, create: granny.createdAt,
      });
    } else {
      const child = await Child_user.findOne({ where: { id: req.session.uid }, raw: true });
      res.render('lk', {
        name: child.name, email: child.email, password: child.password, create: child.createdAt,
      });
    }
  });

module.exports = router;
