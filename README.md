# Form Validation and Profile Display Project

This project is designed to demonstrate form validation on the front end and profile data display using a simple back end. It is intended for learning both front-end and a bit of back-end manipulation.

## Table of Contents

- [Form Page](#form-page)
- [Profile Display Page](#profile-display-page)
- [Database Configuration](#database-configuration)
- [Server Setup](#server-setup)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Form Page

### Overview

The form page (`index.html`) provides a simple user registration form with JavaScript-based input validation.

#### Features

- Input validation for name, email, phone number, and password.
- Error messages are displayed for invalid input.
- Responsive design for various screen sizes.

### Usage

Open the `index.html` file in a web browser.

## Profile Display Page

### Overview

The profile display page (`profile.html`) shows a list of user profiles with options to delete and edit each profile. It communicates with a back end to retrieve and manipulate data.

#### Features

- User profiles displayed in a list.
- Modal for confirming user deletion.
- Pagination for navigating through user profiles.
- Edit and delete options for each user.

### Database Configuration

#### Overview

The database configuration (`connect.js`) file sets up a connection to a MySQL database using the `mysql` Node.js package.

#### Configuration

Modify the `dbConfig` object in `connect.js` with your database credentials.

javascript

`const mysql = require('mysql');`

`const dbConfig = mysql.createConnection({
  host: 'localhost',
  user: 'new_user',
  database: 'form',
  password: 'new_password'
});`

`dbConfig.connect(err => err ? console.error('Error connecting to the database ✕ :', err) : console.log('Connected to the database[form] ✓'));`
`module.exports = dbConfig;`

Bellow is an visual example :

![form_rdme_1](https://github.com/itsyoboygod/form-validation/assets/58955082/6f038831-4a87-4f93-a222-f43f2208ffcd)


![form_rdme_2](https://github.com/itsyoboygod/form-validation/assets/58955082/95add89e-9d95-445d-83e8-1f05adf0ffe4)


![form_rdme_3](https://github.com/itsyoboygod/form-validation/assets/58955082/be0cb2f3-06e6-4087-a03c-21e8ab8be238)


![form_rdme_4](https://github.com/itsyoboygod/form-validation/assets/58955082/99b7081e-3d90-42fc-8066-eee6cf6f25fb)

MSQL OUTPUT:

![form_rdme_5](https://github.com/itsyoboygod/form-validation/assets/58955082/0d8c20d1-91ea-4fbe-88fe-d81ffd57262b)


