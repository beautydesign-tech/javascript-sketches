const form = document.getElementById('form');
const form = document.getElementById('username');
const form = document.getElementById('email');
const form = document.getElementById('password');
const form = document.getElementById('password2');

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
}

// Check password is valid
function isValidPassword(password) {
  const rp = /^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? "]).*$/;
  return rp.test(String(password));
}

// Event listeners
form.addEventListener('submit', function (e) {
  console.log('submitted');
  e.preventDefault();

  // console.log(username.value);
  if (username.value === '') {
    showError(username, 'Username is required');
  } else {
    showSuccess(username);
    // actions to submit to backend go here
  }

  if (email.value === '') {
    showError(email, 'Email is required');
  } else if (!isValidEmail(email.value)) {
    showError(email, 'That email is not valid');
  } else {
    showSuccess(email);
  }

  if (password.value === '') {
    showError(password, 'Password is required');
  } else if (!isValidPassword(password.value)) {
    showError(
      password2,
      'A valid password contains 8-20 characters, at least one digit, at least one upper case letter, at least one lower case letter, some special character which includes !@#$%&*()-+=^ and no white spaces.'
    );
  } else {
    showSuccess(password);
  }

  if (password2.value === password.value) {
    showError(password2, 'These passwords do not match');
  } else {
    showSuccess(password2);
  }
});
