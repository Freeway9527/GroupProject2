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
  }, false)
});
