let error_name = document.getElementById("error-name");
let error_number = document.getElementById("error-number");
let error_email = document.getElementById("error-email");
let error_password = document.getElementById("error-password")
let submit_error = document.getElementById("error-submit")
let submit = document.getElementById("submit-button")



function validatename() {
  let name = document.getElementById("input-name").value;
  if (name.length == 0) {
    error_name.innerHTML = "name should not be empty";
    return false;
  }

  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    error_name.innerHTML = "write fullname";
    error_name.style.color = "red";
  } else {
    error_name.innerHTML = "valid";
    error_name.style.color = "green";
  }
}

function validatenumber() {
  let number = document.getElementById("input-number").value;
  if (number.length == 0) {
    error_number.innerHTML = "required number";
    error_number.style.color = "red";
    return false;
  }
  if (number.length !== 10) {
    error_number.innerHTML = "must be 10 digits";
    error_number.style.color = "red";
    return false;
  } else {
    error_number.innerHTML = "valid";
    error_number.style.color = "green";
  }
}
function validateEmail() {
  let email = document.getElementById("input-email").value
  if (email.length == 0) {
    error_email.innerHTML = "required email"
    error_email.style.color = "red"
    return false

  }
  if (!email.match("([a-zA-Z0-9\\_\\-\\.]+)@([a-zA-Z]+).(.+)")) {
    error_email.innerHTML = "error"
    error_email.style.color = "red"

  }
  else {
    error_email.innerHTML = "valid"
    error_email.style.color = "green"
  }

}
function validatepassword() {
  let password = document.getElementById("input-password").value
  // if(password.length==0){
  //   error_password.innerHTML="required password"
  //     error_password.style.color="red"
  //     return false
  //   }

  if (!password.match("[A-Z]")) {
    error_password.innerHTML = "password should consist uppercase"
    error_password.style.color = "red"
    return false
  }
  if (!password.match("[a-z]")) {
    error_password.innerHTML = "password should consist lowercase"
    error_password.style.color = "red"
    return false
  }
  if (!password.match("[0-9]")) {
    error_password.innerHTML = "password should consist a number"
    error_password.style.color = "red"
    return false
  }
  if (password.length < 6 || password.length > 10) {
    error_password.innerHTML = "password should contain atleast 6 characters and not more than 10 characters"
    error_password.style.color = "red"
  }
  else {
    error_password.innerHTML = "valid"
    error_password.style.color = "green"


  }

}
function validatesubmit() {
  if (!validatename() || !validatenumber() || !validateEmail() || !validatepassword()) {
    submit_error.innerHTML = "correct the errors"
    submit_error.style.color = "red"
    submit_error.style.display = "block"
    setTimeout(function () { submit_error.style.display = "none" }, 3000)
    return false

  }

}





    // else{
    //   error_password.innerHTML="valid"
    //   error_password.style.color="green"
    //   return true
    // }
  // // if (!password.match("[!@#$^&*]")){
  // //     error_password.innerHTML="password should consist a special character"
  // //     error_password.style.color="red"
  // //     return false
  //   }






