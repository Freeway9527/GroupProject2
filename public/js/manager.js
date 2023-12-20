// Manage the data of managers

// Inside the functions should include the following:
// 1. set event handlers which redirect to the corresponding routes
// 2. Prevents the submission of the default form
// 3. Handles the form submission
// 4. Show alert message in alert.js
      // error: (msg) => {
        // showAlert(msg.statusText)
        // }

        import { showAlert } from './alert.js';
        const editManagerBttn = document.getElementById("editManagerBttn");
        
      
      const handleError = (msg) => {
          showAlert(msg.statusText);
          console.error(msg);
        };

        const createUpdateManager = (event) => {
          editManagerBttn.addEventListener("click", redirectToManagerPage);
          event.preventDefault();
          try {
            redirectToManagerPage();
          } catch (error) {
            // If an error occurs, handle it
            handleError(error);
          }
        };

        createUpdateManager();
    
        // Initialize the page
        
        
        const redirectToManagerPage = () => {
          window.location.assign('/manager');
        };
        // Example of triggering an error (modify as per your needs)
        const error = new Error("An error occurred");
        handleError(error);