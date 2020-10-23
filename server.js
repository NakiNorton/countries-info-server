const express = require('express'); 
const app = express();
app.use(express.json());

app.set('port', process.env.PORT || 3000);
app.locals.title = 'LienFlash'
app.locals.user = [
  { 
    name: 'Frank Beans',
    homeAddress: { address: '100 Chestnut Pl', city: 'Denver', state: 'Colorado', zipCode: '08904' },
    email: 'frankBeans@mail.com',
    businessName: 'Frank Constructs',
    businessAddress: { address: '80 Waldo Pl', city: 'Denver', state: 'Colorado', zipCode: '05504' }, 
    phoneNumber: '617 7777 777',
    id: 1,
    jobs: [
      {
      id: 1,
      status: 'NOI Eligible',
      details: {
        companyName: 'B.T Ltd',
        contactName: 'Bruce Tree',
        businessAddress: { address: '180 Noodle Grove', city: 'Golden', state: 'Colorado', zipCode: '08904' }, 
        phoneNumber: '516 888 888',
        email: 'bt@mail.com',
        completionDate: '10/20/2020',
        laborCost: '8000',
        materialsCost: '16000',
        totalCost: '24000'
        }
      },
      {
        id: 2,
        status: 'Lien Eligible',
        details: {
          companyName: 'Top Builds',
          contactName: 'Taylor Crash',
          businessAddress: { address: '80 Doodle Grove', city: 'Golden', state: 'Colorado', zipCode: '08914' },
          phoneNumber: '516 888 888',
          email: 'taytay@mail.com',
          completionDate: '10/10/2020',
          laborCost: '20000',
          materialsCost: '10000',
          totalCost: '30000'
        }
      },
      {
        id: 3,
        status: 'In Process',
        details: {
          companyName: 'Charlie Reed Construction',
          contactName: 'Charlie Reed',
          businessAddress: { address: '20 Pride Grove', city: 'Arvarda', state: 'Colorado', zipCode: '09914' },
          phoneNumber: '756 800 800',
          email: 'charlie@mail.com',
          completionDate: '10/14/2020',
          laborCost: '2000',
          materialsCost: '0',
          totalCost: '2000'
        }
      },
      {
        id: 4,
        status: 'Release',
        details: {
          companyName: 'Good Folks',
          contactName: 'Sally Sommers',
          businessAddress: { address: '4 Side Grove', city: 'Boulder', state: 'Colorado', zipCode: '05914' },
          phoneNumber: '630 800 800',
          email: 'sommers@mail.com',
          completionDate: '10/12/2020',
          laborCost: '12000',
          materialsCost: '0',
          totalCost: '12000'
        }
      },
    ]
  },
  
]

// welcome message on browser
app.get('/', (request, response) => {
  response.send('Welcome!')
})

// get user
app.get('/api/v1/user', (request, response) => {
  response.status(200).json(app.locals.user)
})

// get specific country 
// app.get('/api/v1/countries/:id', (request, response) => {
//   const id = request.params.id
//   const foundCountry = app.locals.countries.find(country => country.id === id)
//   if (!foundCountry) {
//     response.status(404).json({
//       errorMessage: `Could not find country with an id of ${id}`})
//     }
//   response.status(200).json(foundCountry) 
// })

// // post new country
// app.post('/api/v1/countries', (request, response) => {
//   const country = request.body;

//   for (let requiredParameter of ['name', 'capital', 'officalLanguages',  'image']) {
//     if (!country[requiredParameter]) {
//       return response
//       .status(422)
//       .send({ error: `POST failed: you're missing a "${requiredParameter}" property.`})
//     }
//   }

//   const id = Date.now();
//   const { name, capital, officalLanguages, image } = country
//   app.locals.countries.push({ name, capital, officalLanguages, image, id })
//   response.status(201).json({ name, capital, officalLanguages, image, id })
// })


app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});
