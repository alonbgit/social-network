const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  firstName: String,
  lastName: String,
  birthday: Date,
  email: String,
  password: String
});

var User = mongoose.model('User', userSchema);

module.exports = {
  User
}
