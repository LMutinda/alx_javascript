#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line argument
const url = process.argv[2];


// Make a GET request to the API endpoint for users
request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Status:', response.statusCode);
    } else {
      // Parse the JSON response body
      const usersData = JSON.parse(body);
      // Initialize a counter for the number of movies where "Wedge Antilles" is present
      let count = 0;
      // Loop through each film
      for (const user of usersData) {
        // Check if user has completed task
        if (user.completed === true ) {
          // If present, increment the count
          count++;
        }
      }
      // Print the number of movies where "Wedge Antilles" is present
      console.log(count);
    }
  });
  