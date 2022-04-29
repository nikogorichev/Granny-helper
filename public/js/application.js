const select = document.querySelectorAll('input[name="select"]');
const synth = window.speechSynthesis;

const granneName = document.querySelector('#grannyName');
const form = document.querySelector('#form');
const errr = document.querySelector('#errr');
// const loginform = document.querySelector('#loginform');
// const loginEr = document.querySelector('#loginEr');

//console.log(loginEr);

const listenButton = document.querySelector('#listen-btn');
const textImg = document.querySelector('#textImage');
console.log((textImg.innerText));

listenButton.addEventListener('click', () => {
  console.log(textImg.innerText);
  // synth.speak(new SpeechSynthesisUtterance(textImg.innerText));
  const utterance = new SpeechSynthesisUtterance(textImg.innerText);
  // utterance.voice = (synth.getVoices())[15];
  // utterance.pitch = 1;
  // utterance.rate = 1;
  utterance.volume = 1;
  console.log('!!!');
  synth.speak(utterance);
});

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

form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    let item;
    const {
      name,
      email,
      password,
      grannyName,
      method,
      action,
    } = event.target;
    for (const el of select) {
      if (el.checked) {
        item = el.value;
      }
    }
    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'Application/json',
      },
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
  } catch (e) {
    window.location.replace('/');
  }
});

// console.log(loginform);
// loginform.addEventListener('submit', async (event) => {
//   event.preventDefault();
// try {
//   const {
//     name, password, method, action,
//   } = event.target;
//   const response = await fetch(action, {
//     method,
//     headers: { 'Content-Type': 'Application/json' },
//     body: JSON.stringify({
//       name: name.value,
//       password: password.value,
//     }),
//   });
//   const data = await response.json();
//   loginEr.innerText = data.text;
// } catch (e) {
//   window.location.replace('/');
// }
//});
