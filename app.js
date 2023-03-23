//ProjectPage
function cards1(){
    window.location.href= "https://github.com/aiens1/aiens1.github.io";
}
function cards2(){
    window.location.href= "https://youtube.com/playlist?list=PL35BmA83pHkOzlkEDt0URfQJNEgySCRZF&si=EnSIkaIECMiOmarE"
}
function cards4(){
    window.location.href = "#contactMePage";
}

//formsectionJS
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
  //footer
  document.getElementById("linkedin-icon").addEventListener("click", function() {
    window.open("https://www.linkedin.com/in/irfan-nur-priya-nugraha-0269bb1b7/", "_blank");
  });
  
