let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

// login page
function checkpassword(){
  let password = document.getElementsById("signup-pw").value;
  let confrmpassword = document.getElementById("signup-pw-confrm").value;
  console.log(signup-pw,signup-pw-confrm);
}

const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

  loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
  });
  signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
  });

//Booking to whatsapp
function whatsapp(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("emailAddress").value;
  var phone_num = document.getElementById("phone_no").value;

  var whatsappurl = "https://wa.me/8638198326?text="
  +"*Subject:* Booking Request"+"%0a"
  +"*Vehicle name:* Tata Nexon"+"%0a"
  +"*Name of Customer:* "+name+"%0a"
  +"*Mobile No.:* "+phone_num+"%0a"
  +"*Email ID:* "+email;

  window.open(whatsappurl,"_blank").focus();
}  

  