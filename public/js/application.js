const select = document.querySelectorAll('input[name="select"]');
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
