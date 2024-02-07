function welcomeMessage(fullName) {
    // Define a closure for displaying welcome message
    return function() {
        alert('Welcome ' + fullName);
    };
}

// Create variables using welcomeMessage function
let guillaume = welcomeMessage('Guillaume');
let alex = welcomeMessage('Alex');
let fred = welcomeMessage('Fred');

// Example usage
guillaume(); // Displays "Welcome Guillaume"
alex();      // Displays "Welcome Alex"
fred();      // Displays "Welcome Fred"
