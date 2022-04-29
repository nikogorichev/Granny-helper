const router = require('express').Router();
const Tesseract = require('tesseract.js');
const path = require('path');
const { createWorker } = require('tesseract.js');
const { Card } = require('../../db/models');

const worker = createWorker();

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const link = await Card.findOne({ where: { id }, attributes: ['link'], raw: true });
  const readImage = async (file) => {
    await worker.load();
    await worker.loadLanguage('rus+eng');
    await worker.initialize('rus+eng');
    const { data: { text } } = await worker.recognize(file);
    return text;
  };

  const textImage = await readImage(path.join(process.env.PWD, 'public', link.link));
  // console.log(textImage);
  res.render('recognize', { text: textImage });
});

module.exports = router;
