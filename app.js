window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("longnavbarmenu").style.top = "0";
  } else {
    document.getElementById("longnavbarmenu").style.top = "-50px";
  }
}

const menu =document.querySelector('#mymenu');
const menubar = document.querySelector('.buttonmenu')
const menulist =() =>{
    menu.classList.toggle('change');
    menubar.classList.toggle('active');
}
menu.addEventListener('click',menulist)

function cards1(){
    window.location.href= "#Home";
}
function cards4(){
    window.location.href = "#Contact-me";
}
