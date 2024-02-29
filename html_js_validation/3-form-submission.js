// Function to handle form submission and perform validation
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve form fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    
    // Retrieve values entered in the form fields
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    // Validate form fields
    if (name === '' || email === '') {
        // If any required field is empty, display error message
        alert('Please fill in all required fields.');
    } else if (!email.includes('@') || !email.includes('.com')) {
        // If email is missing "@" or ".com" part, display error message
        alert('Please enter a valid email address.');
    } else {
        // If all validations pass, display success message
        alert('Form submitted successfully!');
        // Optionally, you can submit the form here:
        // document.getElementById('submitForm').submit();
        // Reset form fields after successful submission
        nameInput.value = '';
        emailInput.value = '';
    }
}

// Add event listener to the form element to listen for the “submit” event
const submitForm = document.getElementById('submitForm');
submitForm.addEventListener('submit', handleFormSubmit);
