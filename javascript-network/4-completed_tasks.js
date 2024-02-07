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

    // Manually construct the desired output format
    let output = '{';
    for (const userId in completedTasksByUserId) {
      output += `'${userId}': ${completedTasksByUserId[userId]}, `;
    }
    // Remove the trailing comma and space
    output = output.slice(0, -2);
    output += '}';

    // Output the results
    console.log(output);
  }
});
