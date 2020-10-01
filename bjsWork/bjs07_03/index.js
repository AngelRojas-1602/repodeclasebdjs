const emailInput = document.getElementById("email_input");
const passwordInput = document.getElementById("password_input");

const button = document.getElementById("button");

button.addEventListener("click", function () {
  const emailText = emailInput.value;
  const passwordText = passwordInput.value;

  if (emailText === "" || passwordText === "") {
    emailInput.classList.add("is-invalid");
    passwordInput.classList.add("is-invalid");
  }

  if (emailText === "bedu@gmail.com" && passwordText === "12345") {
    alert("Welcome again, Bedu!");
    emailInput.value = "";
    passwordInput.value = "";
  } else {
    alert("Sorry, email nor password incorrect");
  }
});

function handle_input(input) {
  input.addEventListener("input", function () {
    const text = input.value.trim();

    if (text.length > 0) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  });
}

handle_input(emailInput);
handle_input(passwordInput);
