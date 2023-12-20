// Handle interaction realated to managers

// Inside the fucntions should include the following:
// 1. handle mangater delete
// 2. handle manager edit
// 3. handle manager create

const deleteManagerButton = document.getElementById('deleteManagerButton');
  const editManagerButton = document.getElementById('editManagerButton');
  const createManagerButton = document.getElementById('createManagerButton');
  const managerId = (`/api/managers/:${id}`)
  
  deleteButton.addEventListener('click', () => deleteManager(managerId));
  editButton.addEventListener('click', () => editManager(managerId));
  createButton.addEventListener('click', createManager);
  
  
  
  function deleteManagerButton(id) {
  // Send an AJAX request to the server to delete an manager with the given 'id'
  $.ajax({
    method: "DELETE",                  // HTTP method for the request (DELETE in this case)
    url: "/api/managers/" + id        // URL for the API endpoint to delete the manager
  })
    .then(function () {
      // Once the deletion is successful, remove the corresponding element from the DOM
      $(`[data-manager=${id}]`).remove();  // Find and remove the element with 'data-manager' attribute matching 'id'
    });
}
  
  async function editManagerButton(managerId) {
    // Add code to edit manager
    await fetch(`/managers/:${managerId}`, { method: 'PUT' });
  }
  
  async function createManagerButton() {
    // Add code to create manager
    await fetch(`/managers`, { method: 'POST' });
  }
