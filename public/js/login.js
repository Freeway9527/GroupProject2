$(document).ready(function () {

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var form = document.querySelector('.needs-validation')

  // Add event listener to the form
  form.addEventListener('submit', function (event) {
      event.preventDefault() // Prevent the default form submission
      event.stopPropagation() // Stop propagation of the event

      // Add validated class from Bootstrap
      form.classList.add('was-validated')

      // Check if form input fields are valid
      if (form.checkValidity()) {
        // Perform AJAX request to the api/login
          $.ajax({ 
              type: "POST",
              url: '/api/login',
              data: {
                  username: $('#username').val(),
                  email: $('#email').val(),
                  password: $('#password').val(),
              },
              success: () => {
                  window.location.href = "/employee"
              },
              error: () => {
                // If there is an error, display an alert message
                  showAlert("Looks like the credentials you entered don't match!")
              }
          })
      }
codeNinja5
  }, false)
});
=======
    }
  };
  
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (name && email && password) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#login')
    .addEventListener('submit', loginFormHandler);
  
  document
    .querySelector('#signup')
    .addEventListener('submit', signupFormHandler);
  
 main
