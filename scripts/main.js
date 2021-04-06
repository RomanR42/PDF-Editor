const hideNavBtn = document.getElementById ('hideNav');
const showNavBtn = document.getElementById ('showNav');
const editTextBtn = document.getElementById ('editText');
const searchBtn = document.getElementById ('search');
const dropdownBtn = document.querySelector ('.button-dropdown');

const asidePanel = document.querySelector ('.aside-panel');
const textPanel = document.querySelector ('.text-panel');
const searchPanel = document.querySelector ('.search-panel');
const dropdownMenu = document.querySelector ('.dropdown-menu');

hideNavBtn.addEventListener ('click', function (){
    asidePanel.style.display = 'none';
    hideNavBtn.style.display = 'none';
    showNavBtn.style.display = 'block';
    
}, false);

showNavBtn.addEventListener ('click', function (){
    asidePanel.style.display = 'flex';
    hideNavBtn.style.display = 'block';
    showNavBtn.style.display = 'none';

}, false);

editTextBtn.addEventListener ('click', function (){
    
    editTextBtn.classList.toggle ('active-button');

    if (getComputedStyle(textPanel).display == 'none') {
        textPanel.style.display = 'flex';
    } else {
        textPanel.style.display = 'none';
    }
    if (getComputedStyle(searchPanel).display =='flex') {
        searchPanel.style.display = 'none';
        searchBtn.classList.remove ('active-button');
    }

}, false);

searchBtn.addEventListener ('click', function (){
    
    searchBtn.classList.toggle ('active-button');
    
    if (getComputedStyle(searchPanel).display == 'none') {
        searchPanel.style.display = 'flex';
    } else {
        searchPanel.style.display = 'none';
    }

    if (getComputedStyle(textPanel).display =='flex') {
        textPanel.style.display = 'none';
        editTextBtn.classList.remove ('active-button');
    }

}, false);

dropdownBtn.addEventListener ('mouseover', function (){
   
    dropdownMenu.style.display = 'block';
   
   }, false);

dropdownBtn.addEventListener ('mouseout', function (){
   
    dropdownMenu.style.display = 'none';
      
}, false);