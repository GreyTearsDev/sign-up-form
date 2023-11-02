function checkPasswordEquality() {
  var password = document.getElementById("pwd");
  var passwordConfirmation = document.getElementById("pwd-confirm");
  var messageOutput = document.getElementById("pwd-confirm-message");

  if (password.value == passwordConfirmation.value) {
    console.log("no");
  }
}

checkPasswordEquality();
