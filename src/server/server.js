const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controllers/users')
const cors = require('cors');

process.env.NODE_ENV = 'development';
const environment = process.env.NODE_ENV;
console.log(
    environment === 'development'
        ? 'Server is running in development environment'
        : environment === 'production'
            ? 'Server is running in production environment'
            : 'Unknown environment. Defaulting to development settings.'
);

const app = express();
const port = 5500;

app.use(cors());
app.use(bodyParser.json());

app.post('/users', controller.insertUsers);
app.get('/users', controller.selectUsers)

app.listen(port, () => console.log(`Server is running on port ${port}`));