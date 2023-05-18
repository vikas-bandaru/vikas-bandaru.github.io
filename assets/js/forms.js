// Get the registration form element
const form = document.getElementById("registration-form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event) {
  // Get the form fields
  const usernameField = document.getElementById("username");
  const emailField = document.getElementById("email");
  const passwordField = document.getElementById("password");
  const confirmPasswordField = document.getElementById("confirm-password");
  const birthdateField = document.getElementById("birthdate");

  // Get the form values
  const usernameValue = usernameField.value.trim();
  const emailValue = emailField.value.trim();
  const passwordValue = passwordField.value.trim();
  const confirmPasswordValue = confirmPasswordField.value.trim();
  const birthdateValue = birthdateField.value.trim();

  // Define regular expressions for validation
  const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

  // Define error messages
  let errors = [];

  // Validate the username
  if (!usernameRegex.test(usernameValue)) {
    errors.push(
      "Invalid username. Must be at least 3 characters long and contain only letters, numbers, and underscores."
    );
  }

  // Validate the email
  if (!emailValue.includes("@") || !emailValue.includes(".")) {
    errors.push("Invalid email address.");
  }

  // Validate the password
  if (!passwordRegex.test(passwordValue)) {
    errors.push(
      "Invalid password. Must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*)."
    );
  }

  // Validate the confirm password
  if (passwordValue !== confirmPasswordValue) {
    errors.push("Passwords do not match.");
  }

  // Validate the birthdate
  const today = new Date();
  const birthdate = new Date(birthdateValue);
  const age = today.getFullYear() - birthdate.getFullYear();
  const month = today.getMonth() - birthdate.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
    age--;
  }
  if (age < 13) {
    errors.push("You must be at least 13 years old to register.");
  }

  // Display error messages if there are any
  if (errors.length > 0) {
    event.preventDefault();
    const errorDiv = document.createElement("div");
    errorDiv.className = "alert alert-danger";
    const errorList = document.createElement("ul");
    errors.forEach(function (error) {
      const listItem = document.createElement("li");
      listItem.textContent = error;
      errorList.appendChild(listItem);
    });
    errorDiv.appendChild(errorList);
    form.appendChild(errorDiv);
  }
});
