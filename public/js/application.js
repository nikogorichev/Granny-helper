const select = document.querySelectorAll('input[name="select"]');
const synth = window.speechSynthesis;

const granneName = document.querySelector('#grannyName');

select.forEach((el) => {
  el.addEventListener('change', async (event) => {
    const item = event.target.value;
    if (item === 'child') {
      granneName.style.visibility = 'visible';
    } else if (item === 'granny') {
      granneName.style.visibility = 'hidden';
    }
  });
});

const recognizeBtns = document.querySelectorAll('.recognise');
const loader = document.querySelector('.loader');
if (recognizeBtns) {
  recognizeBtns.forEach((recognizeBtn) => {
    recognizeBtn.addEventListener('click', async (event) => {
      event.preventDefault();
      loader.style.display = 'block';
      const {
        imagePath,
      } = event.target.dataset;
      console.log('imagePath app', imagePath);
      const response = await fetch('/recognise', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          imagePath,
        }),
      });
      const textData = await response.json();
      loader.style.display = 'none';

      const {
        text,
      } = textData;
      console.log(text);
      // let playThis =  new SpeechSynthesisUtterance(text);
      // synth.speak(playThis);
      const message = new SpeechSynthesisUtterance(text);
      console.log(message);
      message.onstart = function () {
        console.log('start');
      };
      message.onerror = function () {
        console.error('SpeechSynthesisUtterance.onerror');
      };
      message.onend = function () {
        console.log('end');
      };
      message.text = text;
      synth.speak(message);
    });
  });
}
