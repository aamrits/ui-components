// grab all li in .tab-header
// grab all .tab-pane in .tab-content
// loop through each li of .tab-header
// for each li add a click event listener
// get the corresponding html of each clicked li (connected by unique ID)
// add .active class to that html. Before that remove all other .active classes by looping through '.tab-content'.
// also add .active class to that li of .tab-header. Before that remove all other .active classes by looping through all li of '.tab-header'.

let tabs = document.querySelectorAll('[data-tab-target]');
let tabContents = document.querySelectorAll('.tab-pane');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabs.forEach(tab => {
      tab.classList.remove('active');
    })
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    })
    tab.classList.add('active');
    target.classList.add('active');
  })
})