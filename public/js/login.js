const loginform = document.querySelector('#loginform');
const loginEr = document.querySelector('#loginEr');

console.log(123);

loginform.addEventListener('submit', async (event) => {
  event.preventDefault();
  try {
    const {
      name, password, method, action,
    } = event.target;
    const response = await fetch(action, {
      method,
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        name: name.value,
        password: password.value,
      }),
    });
    const data = await response.json();
    loginEr.innerText = data.text;
  } catch (e) {
    window.location.replace('/');
  }
});
