const dashboard = async () => {
    try {
      const response = await fetch('/api/users/dashboard', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.replace('/');
      } else {
        alert(response.statusText);
      }
    } catch (error) {
      console.error(error);
      alert('An error occurred');
    }
  };
  
  document.getElementById('dashboard').addEventListener('click', dashboard);

  //login already has addEventListener in login.js at 47-49
  //document.querySelector('#login').addEventListener('submit', loginFormHandler);

  //logout already has addEventListener in logout.js at 14
  //document.querySelector('#logout').addEventListener('click', logout);
 
 // signup already has addEventListener in login.js at 51-53
 // document.querySelector('#signup').addEventListener('submit', signupFormHandler);
 
  
 // public/js will serves as an event handler or listener for views. 
  // all the buttons etc, will have to be set up through public/js