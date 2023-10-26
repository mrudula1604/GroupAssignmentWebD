function validateForm() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
  if (!email.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
  }
  
  if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
  }
  
  // Perform additional validation or submit the form to the server
  document.getElementById('login-form').submit();
}

function toggleForms() {
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  loginForm.classList.toggle('hidden');
  signupForm.classList.toggle('hidden');
}

document.querySelector('.signup-link').addEventListener('click', toggleForms);
document.querySelector('.login-link').addEventListener('click', toggleForms);

function validateRegistrationForm() {
  const regEmail = document.getElementById('regEmail').value;
  const regPassword = document.getElementById('regPassword').value;
  const location = document.getElementById('location').value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regEmail.match(emailPattern)) {
      alert('Please enter a valid email address.');
      return;
  }

  if (regPassword.length < 6) {
      alert('Password must be at least 6 characters.');
      return;
  }

  // You can also validate the selected location or perform additional validation here

  // If all validations pass, you can proceed with registration
  alert('Registration successful!');
}
