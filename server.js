const express = require('express');
const {faker} = require('@faker-js/faker')
const app = express();
const PORT = 8000;


    const fakeUsers = [
        {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            _id: 1
        },
        {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            _id: 2
        },
        {
            password: faker.internet.password(),
            email: faker.internet.email(),
            phoneNumber: faker.phone.phoneNumber(),
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            _id: 3
        }
    ];

    const fakeCompanies = [
        {
            _id: 1,
            name: faker.company.companyName(),
            address: {
                street: faker.address.streetName(),
                city: faker.address.cityName(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        },
        {
            _id: 2,
            name: faker.company.companyName(),
            address: {
                street: faker.address.streetName(),
                city: faker.address.cityName(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        },
        {
            _id: 3,
            name: faker.company.companyName(),
            address: {
                street: faker.address.streetName(),
                city: faker.address.cityName(),
                state: faker.address.state(),
                zipCode: faker.address.zipCode(),
                country: faker.address.country()
            }
        }
    ];
 

app.use(express.json(), express.urlencoded({extended:true}));

app.get('/api', (req, res) => {
    res.json({
        status: 'ok'
    });
});

// return new fake user 
app.get('/api/users/new', (req, res) => {
    res.json(fakeUsers)
})

// return new fake company
app.get('/api/companies/new', (req, res) => {
    res.json(fakeCompanies)
})

// return both fake user and company
app.get('/api/users/companies', (req, res) => {
    res.json({
        users: fakeUsers,
        companies: fakeCompanies
    })
})

app.listen(PORT, () => {
    console.log(`SERVER up on port: ${PORT} and is listening for requests to respond`);
    })