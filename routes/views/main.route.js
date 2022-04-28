const router = require('express').Router();
const { Card } = require('../../db/models')

router.route('/')
   .get( async(req, res) => {
      const images = await Card.findAll({ where: { id: 1 }, raw: true })
      console.log(images);
      res.render('main', { images })
   });

router.get('/instruction', (req, res) => {
   res.render('instruction')
});

router.get('/card/:id', (req, res) => {
   res.render('card')
});

router.get('/profile', (req, res) => {
   res.render('profile')
});

module.exports = router;
