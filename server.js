const express = require('express'); // import express
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Countries in Oceania'
app.locals.countries = [
  { 
    name: 'New Zealand',
    capital: 'Wellington',
    officalLanguages: [ 'English', 'Maori', 'New Zealand Sign Language'],
    image: 'https://www.telegraph.co.uk/content/dam/Travel/2019/September/nz.jpg?imwidth=1400',
    id: '1'
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    officalLanguages: ['Samoan', 'English'],
    image: 'https://media.worldnomads.com/travel-safety/samoa/samoalead-SouthernLightscapesAustralia.jpg',
    id: '2'
  },
  {
    name: 'Tonga',
    capital: 'Nuku\'alofa',
    officalLanguages: ['Tongan', 'English'],
    image: 'https://i.pinimg.com/originals/3c/d7/b1/3cd7b14ddd9361adcf3903ae8f32a32c.jpg',
    id: '3'
  },
]

// welcome message on browser
app.get('/', (request, response) => {
  response.send('Welcome! Enjoy the country stats!')
})

// get all countries
app.get('/api/v1/countries', (request, response) => {
  response.status(200).json(app.locals.countries)
})

// get specific country 
app.get('/api/v1/countries/:id', (request, response) => {
  const id = request.params.id
  const foundCountry = app.locals.countries.find(country => country.id === id)
  if (!foundCountry) {
    response.status(404).json({
      errorMessage: `Could not find country with an id of ${id}`})
    }
  response.status(200).json(foundCountry) 
})

// post new country
app.post('/api/v1/countries', (request, response) => {
  const country = request.body;

  for (let requiredParameter of ['name', 'capital', 'officalLanguages',  'image']) {
    if (!country[requiredParameter]) {
      return response
      .status(422)
      .send({ error: `POST failed: you're missing a "${requiredParameter}" property.`})
    }
  }

  const id = Date.now();
  const { name, capital, officalLanguages, image } = country
  app.locals.countries.push({ name, capital, officalLanguages, image, id })
  response.status(201).json({ name, capital, officalLanguages, image, id })
})


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
