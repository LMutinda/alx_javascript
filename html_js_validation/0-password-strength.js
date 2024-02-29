// Retrieve the form and error element
const passwordForm = document.getElementById('passwordForm');
const errorElement = document.getElementById('error');

// Function to validate the password
function validatePassword(password) {
    const regexUpperCase = /[A-Z]/;
    const regexLowerCase = /[a-z]/;
    const regexDigit = /\d/;
    const regexSpecialChar = /[!@#$%^&*]/;

    if (password.length < 8) {
        return 'Password must be at least 8 characters long.';
    }
    if (!regexUpperCase.test(password)) {
        return 'Password must contain at least one uppercase letter.';
    }
    if (!regexLowerCase.test(password)) {
        return 'Password must contain at least one lowercase letter.';
    }
    if (!regexDigit.test(password)) {
        return 'Password must contain at least one numeric digit.';
    }
    if (!regexSpecialChar.test(password)) {
        return 'Password must contain at least one special character (!@#$%^&*).';
    }

    return ''; // Empty string indicates no error
}

// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const passwordInput = document.getElementById('password');
    const password = passwordInput.value;

    const errorMessage = validatePassword(password);
    
    if (errorMessage) {
        errorElement.textContent = errorMessage;
    } else {
        // Reset error message if password is valid
        errorElement.textContent = '';
        // If password is valid, you can submit the form here
        // For example: passwordForm.submit();
        passwordForm.reset();
    }
}

// Attach form submission event listener
passwordForm.addEventListener('submit', handleSubmit);
