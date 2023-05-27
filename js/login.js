// login page
const wrapper = document.querySelector(".wrapper"),
  signupHeader = document.querySelector(".signup header"),
  loginHeader = document.querySelector(".login header");

loginHeader.addEventListener("click", () => {
  wrapper.classList.add("active");
});
signupHeader.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

function show_signPassword() {
    var x = document.getElementById("signupPw");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function show_logPassword() {
  var x = document.getElementById("loginPw");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//forgot pw
function whatsapp(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("emailAddress").value;
  var phone_num = document.getElementById("phone_no").value;

  var whatsappurl = "https://wa.me/8638198326?text="
  +"*Subject:* I forgot my password"+"%0a"
  +"*Name of Customer:* "+name+"%0a"
  +"*Mobile No.:* "+phone_num+"%0a"
  +"*Email ID:* "+email;

  window.open(whatsappurl,"_blank").focus();
}
