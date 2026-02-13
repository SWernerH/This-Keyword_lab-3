const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
  event.currentTarget.classList.add('active');
});