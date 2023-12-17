// Define function to call show alert that takes 'text' as a parameter
function showAlert(text) {
    
    // Set the text of the alert
    $('#alert-text').html(text);
    
    // Remove the 'd-none' class if it's there
    // hide the alret, then fade it in 300 milliseconds
    $('#alert').removeClass('d-none').hide().fadeIn(300);
    
    // Set a timeout function to hide the alert after 300 milliseconds
    // 300 millisecinds is the same as 2 seconds
    setTimeout(function () {
        $('#alert').fadeOut(300);
    }, 2000);
}