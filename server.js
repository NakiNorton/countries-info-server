const express = require('express'); // import express
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'Countries in Oceania'
app.locals.countries = [
  { 
    name: 'New Zealand',
    capital: 'Wellington',
    officalLanguages: [ 'English', 'Maori', 'New Zealand Sign Language']
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    officalLanguages: ['Samoan', 'English']
  },
  {
    name: 'Tonga',
    capital: 'Nuku\'alofa',
    officalLanguages: ['Tongan', 'English']
  },
]

app.get('/', (request, response) => {
  response.send('Welcome! Enjoy the stats!')
})
