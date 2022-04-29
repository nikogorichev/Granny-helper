const router = require('express').Router();
const Tesseract = require('tesseract.js');
const path = require('path');

const { createWorker } = require('tesseract.js');

const worker = createWorker();

const readImage = async (file) => {
  await worker.load();
  await worker.loadLanguage('rus');
  await worker.initialize('rus');
  // const { data: { text } } = await worker.recognize('../../public/img/0b16f76b-805e-4551-be64-6d1e7485f94d.jpg');
  const { data: { text } } = await worker.recognize('../../public/img/0b16f76b-805e-4551-be64-6d1e7485f94d.jpg');
  console.log(text);
  await worker.terminate();
};

// router.get('/:id', (req, res) => {
//   res.render('recognize');
// });

// router.post('/', async (req, res) => {
//   const { imagePath } = req.body;
//   const filePath = path.join(__dirname, '../../public/', imagePath);
//   const text = await Tesseract.recognize(filePath, 'rus');
//   console.log(text);

//   res.json({ text: text.data.text });
// });


module.exports = router;
