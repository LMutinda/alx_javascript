#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } else {
    // Parse the JSON response body
    const todos = JSON.parse(body);

    // Initialize an object to store the number of completed tasks for each user ID
    const completedTasksByUserId = {};

    // Loop through each todo
    todos.forEach((todo) => {
      // Check if the todo is completed
      if (todo.completed) {
        // Increment the completed tasks count for the user ID
        if (completedTasksByUserId[todo.userId]) {
          completedTasksByUserId[todo.userId]++;
        } else {
          completedTasksByUserId[todo.userId] = 1;
        }
      }
    });

    // Output the results
    const numItems = Object.keys(completedTasksByUserId).length;
    if (numItems <=2){
        const jsonOutput = JSON.stringify(completedTasksByUserId, (key, value) => {
            if (typeof key === 'string') {
              return `'${key}'`; // Surround keys with single quotes
            }
            return value;
          });
      
          console.log(jsonOutput);
    } else {
        // Convert the object to a JSON string with single quotes
        const jsonString = JSON.stringify(completedTasksByUserId, null, 2).replace(/"/g, "'");

        // Print the JSON string
        console.log(jsonString);

    }
    
    
  }
});
