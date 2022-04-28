const router = require('express').Router();
const { Granny_user } = require('../../db/models');
const { Child_user, Relation } = require('../../db/models');

router.route('/registration')
  .get((req, res) => {
    res.render('register');
  })
  .post(async (req, res) => {
    const {
      name, email, password, grannyName, item,
    } = req.body;
    if (item === 'granny') {
      const user = await Granny_user.findOne({ where: { name } });
      if (user) {
        res.status(401).json({
          text: 'Такое имя пользователя уже занято',
        });
      } else {
        const newUser = await Granny_user.create({ name, email, password });
        req.session.uid = newUser.id;
        req.session.name = newUser.name;
        req.session.type = true;
        res.redirect('/');
      }
    } else if (item === 'child') {
      const childUser = await Child_user.findOne({ where: { name } });
      const grammyUser = await Granny_user.findOne({ where: { name: grannyName } });
      if (childUser) {
        res.status(401).json({
          text: 'Такое имя пользователя уже занято',
        });
      } else if (!grammyUser) {
        res.json({ text: 'Такой бабушки нет' });
      } else {
        const child = await Child_user.create({ name, email, password });
        await Relation.create({ id_child: child.id, id_granny: grammyUser.id });
        req.session.uid = child.id;
        req.session.name = child.name;
        req.session.type = false;

        res.redirect('/');
      }
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
    const grannyUser = await Granny_user.findOne({ where: { name, password } });
    const childUser = await Child_user.findOne({ where: { name, password } });
    if (grannyUser) {
      req.session.uid = grannyUser.id;
      req.session.name = grannyUser.name;
      req.session.type = true;
      res.redirect('/');
    } else if (childUser) {
      req.session.uid = childUser.id;
      req.session.name = childUser.name;
      req.session.type = false;
      res.redirect('/');
    } else {
      res.redirect('/');
    }
  });

router.route('/logout')
  .get((req, res) => {
    req.session.destroy();
    res.redirect('/');
  });

module.exports = router;
