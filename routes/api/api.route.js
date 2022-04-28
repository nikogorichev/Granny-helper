const router = require('express').Router();
const uuid = require('uuid');
const path = require('path');
const { Card } = require('../../db/models')

router.post('/addImage', async(req, res) => {
const { image } = req.files;
const link = `${uuid.v4()}.jpg` 
image.mv(path.resolve(process.env.PWD, 'public', 'img', link))
const pathToFile = path.join('img', link)
console.log(pathToFile);
const newImage = await Card.create({
   id_granny: res.locals.uid,
   link: pathToFile,
})
res.redirect('/')
});


module.exports = router;