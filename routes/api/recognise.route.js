const Tesseract = require('tesseract.js');
const path = require('path');

const router = require('express').Router();

router.post('/', async (req, res) => {
  const { imagePath } = req.body;
  const filePath = path.join(__dirname, '../public/', imagePath);
  const text = await Tesseract.recognize(filePath, 'rus');
  console.log(text);

  res.json({ text: text.data.text });
});

module.exports = router;
