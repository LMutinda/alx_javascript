#!/usr/bin/node

const request = require('request');

// Get the API URL from the command line argument
const url = process.argv[2];

// Character ID for "Wedge Antilles"
const characterId = 18;

// Make a GET request to the Star Wars API endpoint for films
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else if (response.statusCode !== 200) {
    console.error('Status:', response.statusCode);
  } else {
    // Parse the JSON response body
    const filmsData = JSON.parse(body);
    // Initialize a counter for the number of movies where "Wedge Antilles" is present
    let count = 0;
    // Loop through each film
    for (const film of filmsData.results) {
      // Check if "Wedge Antilles" is present in the characters list for the film
      if (film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        // If present, increment the count
        count++;
      }
    }
    // Print the number of movies where "Wedge Antilles" is present
    console.log(count);
  }
});
