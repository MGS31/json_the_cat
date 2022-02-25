const request = require('request');


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    let breed = data[0];
    if (breed) {
      callback(error, breed.description);
    } else {
      callback(`Could not find a breed`);
    }
  });
};


module.exports = {
  fetchBreedDescription
};