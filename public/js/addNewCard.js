const show = document.querySelector('#showAddForm');
const addDiv = document.querySelector('#addDiv');

show.addEventListener('click', async (event) => {
  event.preventDefault();
  const response = await fetch('/showAddForm');
  const body = await response.text();
  addDiv.innerHTML = body;
});
