// Sets up event listeners for buttons with specific classes and defines functions to 
// perform actions when those buttons are clicked

// inside the functions should include the following:
// 1. set event handlers which redirect to the corresponding routes
// such as delete, edit, create

// 2. delete employee function to delete employee by and ID

  const deleteEmployeeButton = document.getElementById('deleteButton');
  const editEmployeeButton = document.getElementById('editButton');
  const createEmployeeButton = document.getElementById('createButton');
  const employeeId = (`/api/employees/:${id}`)
  
  deleteButton.addEventListener('click', () => deleteEmployee(employeeId));
  editButton.addEventListener('click', () => editEmployee(employeeId));
  createButton.addEventListener('click', createEmployee);
  
  
  
  function deleteEmployeeButton(id) {
  // Send an AJAX request to the server to delete an employee with the given 'id'
  $.ajax({
    method: "DELETE",                  // HTTP method for the request (DELETE in this case)
    url: "/api/employees/" + id        // URL for the API endpoint to delete the employee
  })
    .then(function () {
      // Once the deletion is successful, remove the corresponding element from the DOM
      $(`[data-employee=${id}]`).remove();  // Find and remove the element with 'data-employee' attribute matching 'id'
    });
}
  
  async function editEmployeeButton(employeeId) {
    // Add code to edit employee
    await fetch(`/employees/:${employeeId}`, { method: 'PUT' });
  }
  
  async function createEmployeeButton() {
    // Add code to create employee
    await fetch(`/employees`, { method: 'POST' });
  }


