#!/usr/bin/node

// Importing the request module
const request = require('request');

// Get the episode id from the command line argument
const id = process.argv[2];

// Get the URL from the command line argument
const url = "https://swapi-api.alx-tools.com/api/films/${id}";

// Make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Status:', response.statusCode);
    } else {
      // Parse the JSON response body
      const movieData = JSON.parse(body);
      // Extract and print the title of the movie
      console.log(movieData.title);
    }
  });