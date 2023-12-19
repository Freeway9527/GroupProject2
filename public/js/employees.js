// Sets up event listeners for buttons with specific classes and defines functions to 
// perform actions when those buttons are clicked

// inside the functions should include the following:
// 1. set event handlers which redirect to the corresponding routes
// such as delete, edit, create

// 2. delete employee function to delete employee by and ID

  const deleteButton = document.getElementById('deleteButton');
  const editButton = document.getElementById('editButton');
  const createButton = document.getElementById('createButton');
  const employeeId = (`/api/employees/:${id}`)
  
  deleteButton.addEventListener('click', () => deleteEmployee(employeeId));
  editButton.addEventListener('click', () => editEmployee(employeeId));
  createButton.addEventListener('click', createEmployee);
  
  
  
  async function deleteEmployee(employeeId) {
    // Add code to delete employee by ID
    await fetch(`/employees/:${employeeId}`, { method: 'DELETE' });
  }
  
  async function editEmployee(employeeId) {
    // Add code to edit employee
    await fetch(`/employees/:${employeeId}`, { method: 'PUT' });
  }
  
  async function createEmployee() {
    // Add code to create employee
    await fetch(`/employees`, { method: 'POST' });
  }


