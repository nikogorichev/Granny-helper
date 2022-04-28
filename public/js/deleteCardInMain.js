const div = document.querySelectorAll('.delete-btn');
console.log(div);

div.forEach((el) => {
  el.addEventListener('click', (event) => {
    const { id } = event.target;
  });
});
