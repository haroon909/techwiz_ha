const usersData = []; // Initialize an array to store user data

function validateSignInForm() {
  const enteredEmail = document.querySelector("#floatingInput").value;
  const enteredPassword = document.querySelector("#floatingPassword").value;

  const user = usersData.find(userData => userData.email === enteredEmail);

  if (!user || user.password !== enteredPassword) {
    alert("Invalid email or password.");
    return false;
  }

  return true; // Allow form submission
}

function validateSignUpForm() {
  const emailInput = document.querySelector("#email");
  const phoneInput = document.querySelector("#phone");
  const passwordInput = document.querySelector("#signupPassword");
  const confirmPasswordInput = document.querySelector("#confirmPassword");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:\+92|03|3)\d{9}$/; // Adjusted regex pattern

  if (!emailRegex.test(emailInput.value)) {
    alert("Please enter a valid email address.");
    return false;
  }

  if (!phoneRegex.test(phoneInput.value)) {
    alert("Please enter a valid Pakistani phone number.");
    return false;
  }

  if (passwordInput.value.length < 8) {
    alert("Password must be at least 8 characters.");
    return false;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match.");
    return false;
  }

  // If all validations pass, add user data to the array
  const user = {
    firstName: document.querySelector("#firstName").value,
    lastName: document.querySelector("#lastName").value,
    address: document.querySelector("#address").value,
    email: emailInput.value,
    phone: phoneInput.value,
    password: passwordInput.value
  };

  usersData.push(user); // Add user data to the array

  alert('User registered successfully.');
  // Redirect to sign in or show success message
  return false; // Prevent form submission
}