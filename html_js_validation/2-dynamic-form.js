// Retrieve the form and input container element
const dynamicForm = document.getElementById('dynamicForm');
const inputContainer = document.getElementById('inputContainer');

// Function to generate input fields dynamically based on the selected value
function generateInputFields(numFields) {
    inputContainer.innerHTML = ''; // Clear previous input fields
    
    for (let i = 0; i < numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = `field${i + 1}`; // Unique name for each input field
        inputContainer.appendChild(inputField);
    }
}

// Function to handle form submission and validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    // Retrieve the dynamically generated input fields
    const inputFields = inputContainer.querySelectorAll('input');

    // Check if any field is empty
    let allFieldsFilled = true;
    inputFields.forEach(inputField => {
        if (inputField.value.trim() === '') {
            allFieldsFilled = false;
        }
    });

    if (allFieldsFilled) {
        // If all fields are filled, submit the form
        // For example: dynamicForm.submit();
        dynamicForm.reset();
    } else {
        // If any field is empty, display error message
        alert('Please fill in all fields.');
    }
}

// Attach event listener for form submission
dynamicForm.addEventListener('submit', validateForm);

// Attach event listener for dropdown change
const numFieldsSelect = document.getElementById('numFields');
numFieldsSelect.addEventListener('change', function() {
    generateInputFields(parseInt(this.value)); // Convert selected value to integer
});

// Generate input fields based on initial selected value
generateInputFields(parseInt(numFieldsSelect.value));
