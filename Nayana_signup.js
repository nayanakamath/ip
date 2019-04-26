//function to check if first name is empty
function checkFname() {
  var fn = document.getElementById("firstName").value;
  var fnout = document.getElementById("fname");

  if (fn == "") {
    fnout.innerHTML = "First name cannot be empty";
    return false;
  }
  else {
    return true;
  }
}

//function to check if last name is empty
function checkLname() {
  var ln = document.getElementById("lastName").value;
  var lnout = document.getElementById("lname");

  if (ln == "") {
    lnout.innerHTML = "Last name cannot be empty";
    return false;
  }
  else {
    return true;
  }
}

//function to check if email is empty ir valid
function checkEmail() {
  var em = document.getElementById("email").value;
  var emout = document.getElementById("em");

  if (em == "") {
    emout.innerHTML = "Email cannot be empty";
    // return false;
  }
  else if (!(em.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))) {
    emout.innerHTML = "Invalid Email id";
    return false;
  }
  else {
    return true;
  }
}

//function to check valid password
function checkPassword() {
  var pw = document.getElementById("password").value;
  var pwout = document.getElementById("pword");

  if (pw == "") {
    pwout.innerHTML = "Password cannot be empty";
    // pwout.innerHTML = text;
    return false;
  }
  else if (pw.length < 8 || pw.length > 15) {
    pwout.innerHTML = "Password cannot be less than 8 or greater than 15 characters";
    return false;
  }
  else if ((pw.search(/[0-9]+/) == -1)) {
    pwout.innerHTML = "Password must contain atleast one digit";
    return false;
  }
  else if ((pw.search(/[a-z]+/) == -1)) {
    pwout.innerHTML = "Password must contain atleast one lowercase letter";
    return false;
  }
  else if ((pw.search(/[A-Z]+/) == -1)) {
    pwout.innerHTML = "Password must contain atleast one uppercase letter";
    return false;
  }
  else {
    return true;
  }
}

// button click function
function buttonFunction() {

  checkFname();
  checkLname();
  checkEmail();
  checkPassword();

  var fr = document.getElementsByName('frm')[0];

  if (checkFname() && checkLname() && checkEmail() && checkPassword()) {
    alert(" Successfully signed up!");
    fr.reset();  // reset form data
    document.location.reload(); // refresh page after sign up
  }
}