//simple email validation
const firstNameInput = document.querySelector("#first-name-input")
const submitBtn = document.querySelector("#submit-btn")
const lastNameInput = document.querySelector("#last-name-input")
const emailInput = document.querySelector("#email-input")
const passInput = document.querySelector("#password-input")


function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstNameInput.onkeyup = () =>{
  firstNameInput.classList.remove("is-valid")
  firstNameInput.classList.remove("is-invalid")
}
lastNameInput.onkeyup = () =>{
  lastNameInput.classList.remove("is-valid")
  lastNameInput.classList.remove("is-invalid")
}
emailInput.onkeyup = () =>{
  emailInput.classList.remove("is-valid")
  emailInput.classList.remove("is-invalid")
}
passInput.onkeyup = ()=> {
  passInput.classList.remove("is-valid")
  passInput.classList.remove("is-invalid")
}

submitBtn.onclick = () => {
  if(firstNameInput.value === "" && lastNameInput.value==="" 
    && emailInput.value==="" && passInput.value===""){
    firstNameInput.classList.add ("is-invalid")
    lastNameInput.classList.add ("is-invalid")
    emailInput.classList.add ("is-invalid")
    passInput.classList.add ("is-invalid")
  }else{
    firstNameInput.classList.add("is-valid")
    lastNameInput.classList.add("is-valid")
    emailInput.classList.add("is-valid")
    passInput.classList.add("is-valid")
    isFirstNameok = true
    islastnameok = true
    isemailok = true
    ispassok = true
  }
  if(isFirstNameok && islastnameok && isemailok && ispassok){
    alert("Registered successfully")
  }
}
