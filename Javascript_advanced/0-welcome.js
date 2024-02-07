function welcome (firstName, lastName){
    let fullName = firstName + ' ' + lastName;
    function displayFullName(){

        // Display an alert with the welcome message
        alert('Welcome ' + fullName + '!');
    }

    // Call the displayFullName function
    displayFullName();

}

welcome('Holberton', 'School');


