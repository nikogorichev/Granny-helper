const select = document.querySelectorAll('input[name="select"]');
const synth = window.speechSynthesis;

const granneName = document.querySelector('#grannyName');
const form = document.querySelector('#form');
const errr = document.querySelector('#errr');
const loginform = document.querySelector('#loginform');

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
form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    let item;
    const {
      name, email, password, grannyName, method, action,
    } = event.target;
    for (const el of select) {
      if (el.checked) {
        item = el.value;
      }
    }
    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value,
        grannyName: grannyName.value,
        item,
      }),
    });
    const body = await response.json();
    errr.innerText = body.text;
    // errr.innerText = body.text;
  } catch (e) {
    window.location.replace('/');
    //errr.innerText = body.text;
  }
});

loginform.addEventListener('submit', async (event) => {
  event;
});
