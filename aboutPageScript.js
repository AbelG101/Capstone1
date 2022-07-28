const menu = document.querySelector('.menu-icon');
const closeBtns = document.querySelectorAll('.close-menu');

menu.addEventListener('click', () => {
  const sideMenu = document.querySelector('.menu-items');
  sideMenu.classList.toggle('open');
})


closeBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const sideMenu = document.querySelector('.menu-items');
    sideMenu.classList.toggle('open');
  })
})