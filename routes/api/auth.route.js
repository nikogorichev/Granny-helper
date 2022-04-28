const router = require('express').Router();
const { redirect } = require('express/lib/response');
const async = require('hbs/lib/async');
const { Granny_user } = require('../../db/models');
const { Child_user } = require('../../db/models');

router.route('/registration')
  .get((req, res) => {
    res.render('register');
  })
  .post(async (req, res) => {
    const {
      name, email, password, grannyName,
    } = req.body;
    const user = await Granny_user.findOne({ where: { email } });
    if (user) {
      res.send('123')
    } else {
      const newUser = await Granny_user.create({ name, email, password });
      res.redirect('/');
    }
  });

router.route('/login')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    const {
      name, email, password, grannyName,
    } = req.body;
    const user = await Granny_user.findOne({ where: { email } });
    if (user) {
      req.session.uid = user.id;
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  });

module.exports = router;
