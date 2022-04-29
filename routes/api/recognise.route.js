const router = require('express').Router();
const Tesseract = require('tesseract.js');
const path = require('path');
const {Card} = require('../../db/models')

const { createWorker } = require('tesseract.js');

const worker = createWorker();

// const readImage = async (file) => {
//   await worker.load();
//   await worker.loadLanguage('rus');
//   await worker.initialize('rus');
//   const { data: { text } } = await worker.recognize(file);
//   console.log(text);
//   await worker.terminate();
// };

router.get('/:id', async (req, res) => {
  const {id} = req.params;
  const link = await Card.findOne({where: {id}, attributes: ['link'], raw: true})
  console.log(link.link);

  const readImage = async (file) => {
    await worker.load();
    await worker.loadLanguage('rus');
    await worker.initialize('rus');
    const { data: { text } } = await worker.recognize(file);
    // console.log(text);
    await worker.terminate();
    return text;
  };

  let textImage = await readImage(path.join(process.env.PWD, 'public', link.link));
  // console.log(textImage);
  res.render('recognize', {text: textImage});
});


module.exports = router;
