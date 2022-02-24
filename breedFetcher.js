const request = require('request');

let breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, (error, response, body) => {
  if (error !== null) {
    console.error('Error 404: URL is incorrect');
    process.exit();
  }
  if (breed === undefined) {
    console.error('Error 404: No breed found');
    process.exit();
  }
  const data = JSON.parse(body);
  let descript = data[0].description;
  console.log(descript);
});