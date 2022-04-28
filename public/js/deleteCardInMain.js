const div = document.querySelectorAll('.delete-btn');

div.forEach((el) => {
  el.addEventListener('click', async (event) => {
    console.log(el);
    event.preventDefault();
    const { id } = event.target;
    // console.log(id);
    // console.log(link);
    const response = await fetch(`/main/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        accept: 'json',
      },
    });
    const deletedDiv = document.querySelector(`#div_${id}`);
    deletedDiv.remove();
  });
});
