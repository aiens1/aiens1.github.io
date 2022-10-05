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

function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_r3leezp";
  const templateID = "template_46odnip";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
