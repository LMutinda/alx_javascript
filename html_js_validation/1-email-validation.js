// Retrieve the form and error element
const emailForm = document.getElementById('emailForm');
const errorElement = document.getElementById('error');

// Function to validate the email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (validateEmail(email)) {
        // If email format is valid, submit the form
        // For example: emailForm.submit();
        errorElement.textContent = ''; // Clear any previous error messages
        emailForm.reset(); // Clear input fields
    } else {
        // If email format is invalid, display error message
        errorElement.textContent = 'Please enter a valid email address.';
    }
}

// Attach form submission event listener
emailForm.addEventListener('submit', handleSubmit);
