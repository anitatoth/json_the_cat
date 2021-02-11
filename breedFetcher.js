const request = require('request');
// const fs = require('fs');
let breedInput = process.argv[2];





const breedFetcher = (breedInput) => {

    if (!breedInput) {
      console.log("Hello user, please input a valid cat breed.")
      return;
    }

  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedInput}`,  (error, response, body) => {
    if (error) {
      console.log('Error fetch details', error );     // Print the error if one occurred
      return;
    } 

    const data = JSON.parse(body);
    //console.log('bodylength', data.length)

    if (data.length === 0) {
      console.log('Sorry, cat breed not found.');
      return;
    }
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the example homepage.

    
    //console.log(data[0].temperament);
    //console.log(typeof data);        
    return console.log(data[0].description);
          
  });

};



breedFetcher(breedInput);