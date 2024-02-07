#!/usr/bin/node

// Importing the request module
const request = require('request');

// Get the episode id from the command line argument
const movieId = process.argv[2];

// Construct the URL for the Star Wars API endpoint
const url = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request.get(url, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Status:', response.statusCode);
    } else {
      // Parse the JSON response body
      const movieData = JSON.parse(body);
      
      for (const characterUrl of movieData.characters){
        request.get(characterUrl, (error, respone, body) =>{
            if (error){
                console.error('Error:',error);
            } else if (response.statusCode !== 200){
                console.error('Status:', respone.statusCode);
            } else {
                const charData = JSON.parse(body);
                console.log(charData.name)

            }
                
        })
      }
      
    }
  });