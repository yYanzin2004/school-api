loginButton = document.querySelectorAll(".login-button");
loginButtonContainer = document.querySelector(".login-button-container");
menu = document.querySelector("main");
localText = document.querySelector(".local-text");
loginForm = document.querySelector("section");
loginInputs = document.querySelectorAll("input");
confirmButtons = document.querySelectorAll(".confirm-button");
errorType = document.querySelectorAll(".error-type");
errorType2 = document.querySelector(".error-type2");

loginButton.forEach((element, index) => {
  var type = 0;
  if (index == 0) {
    type = 0;
  } else if (index == 1) {
    type = 1;
  }
  element.addEventListener("click", function () {
    fade();
    if (type == 0) {
      localText.innerHTML = "Student";
    } else if (type == 1) {
      localText.innerHTML = "Teacher";
    }
  });
});

confirmButtons.forEach((element) => {
  element.addEventListener("click", function () {
    loginInputs.forEach((element2, index) => {
      if (element2.value == "") {
        loginInputs.forEach(() => {
          errorType[index].classList.add("input-error");
        });
      } else {
        console.log("login realizado");
        errorType[index].classList.remove("input-error");
      }
    });
  });
});

function fade() {
  loginButtonContainer.style.display = "none";
  loginForm.classList.add("login-form");
}

function error(type) {
  errorType2.style.display = "block";
  if (type == 1) {
    errorType2.innerHTML = "This account doesn't exist";
  } else if (type == 2) {
    errorType2.innerHTML = "The credentials doesn't match";
  }
}
