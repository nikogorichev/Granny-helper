const router = require('express').Router();
const { Card, sequelize } = require('../../db/models');

router.route('/')
  .get(async (req, res) => {
    if (res.locals.isAuth) {
      const images = await Card.findAll({ where: { id_granny: req.session.uid }, raw: true });
      res.render('main', {
        images, isAuth: res.locals.isAuth, user: res.locals.name, type: res.locals.type
      })
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

router.delete('/delete/:id', async(req, res) => {
  const { id } = req.params
// const del = await Card.findOne({ where: { id }, raw: true});
await sequelize.query(`DELETE FROM "Cards" WHERE "id" = ${id}`)
  res.end()
})

module.exports = router;
