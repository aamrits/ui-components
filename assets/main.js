let btnClose = document.querySelector('#btnClose');
let sidebar = document.querySelector('#sidebar');

sidebar.classList.remove("open");

btnClose.addEventListener('click', () => {
  sidebar.classList.contains("open") ?  sidebar.classList.remove("open") : sidebar.classList.add("open")
});
