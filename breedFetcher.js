const request = require('request');
// const fs = require('fs');


const fetchBreedDescription = function(breedName, callback) {

  if (!breedName) {
    console.log("Hello user, please input a valid cat breed.");
    return;
  }

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,  (error, response, body) => {
    if (error) {
      callback(error, undefined);   // Print the error if one occurred
      return;
    }

    const data = JSON.parse(body);
    //console.log('bodylength', data.length)

    if (data.length === 0) {
      callback('Sorry, cat breed not found.', undefined);
      return;
    }
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the example homepage.

  
    //console.log(data[0].temperament);
    //console.log(typeof data);
    callback(error, data[0].description);

  });

};




module.exports = {fetchBreedDescription};