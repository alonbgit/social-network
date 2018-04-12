const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const _ = require('lodash');

const { User } = require('./models/user');

const app = express();

const publicPath = path.join(__dirname, '../');

console.log('publicPath:', publicPath);

app.use(bodyParser.json());
app.use(express.static(publicPath));

mongoose.connect('mongodb://localhost/SocialNetwork');

// temporary - to allow cross origin during dev development
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.post('/register', (req, res) => {
  var userData = _.pick(req.body, ['firstName', 'lastName', 'email', 'password', 'year', 'month', 'day']);

  var user = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    password: userData.password,
    birthday: new Date(userData.year, userData.month - 1, userData.day)
  };

  var user = new User(user);
  user.save();

  res.send();
});

app.listen(3000, () => {
  console.log('server is running on port 3000');
});
