// Handles form submission and user interactions
const editEmployeeBttn = document.getElementById('editEmployeeBttn')


// inside the functions should include the following:
// 1. set event handlers to direct the user to /employee page
// 2. Prevents the submission of the default form
// 3. script to check "termiate date" if it has a value or don't
// 4. set event handlers to create or update employee
const createUpdateEmployee = async (event) => {
    editEmployeeBttn.addEventListener("click", redirectToEmployeePage)
    event.preventDefault();
    if(terminateDate === null ) {
    redirectToEmployeePage();
    }
}      
    function redirectToEmployeePage() {
        window.location.assign('/employee');
      }