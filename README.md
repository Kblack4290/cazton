# Cazton

## Table of Contents

- [Description](#Description)
- [Usage](#Usage)
- [Instructions](#Instructions)
- [Technologies](#Technologies)
- [License](#License)

## Description

An application where users can select an sequence of numbers 1-9 and save them for future reference

## Usage

Once the application is deployed the user can select any sequence of numbers 1-9. They can then either clear the numbers if they do not like them or submit them to be saved in the Save Sequence section.

The user can edit any saved sequence by selecting the edit button and then save the new sequence.

The user can delete any sequence by selecting the delete button next to the saved sequence.

## Instructions

- Clone Repository locally
- Open application in terminal and run npm i.
- In terminal run server with npm run server
- Open client folder in terminal and run npm i
- In client terminal run npm start

### The user will need to create a MongoDB Atlas Account and create a new database.

- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [How to Instructions](https://www.youtube.com/watch?v=rPqRyYJmx2g)

### Connect database to application.

- Select connect in your MongoDb cluster
- Select the connect your application option and copy the path provided
- Open up the config folder and create a new file called default.json
- In this file the user will code the following:
  {
  "mongoURI":"mongodb+srv://YourUserName:YourPasswordHere@YourAppName.xunky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  }
- Keep in mind that you must insert your username and password that you made during the creation of the database.

## Technologies

- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org/)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Express](https://expressjs.com/)
- [axios](https://www.npmjs.com/package/axios)
- [MongoDB](https://www.mongodb.com/)
- [mongoose](https://www.npmjs.com/package/mongoose)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Screenshots of Application

### Select Sequence:

![Select Sequence](img/selectseq.jpg)

### Edit Sequence:

![Edit Sequence](img/editseq.jpg)

### Delete Sequence:

![Delete Sequence](img/deleteseq.jpg)

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Copyright &copy; 2021 Keith Black

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
