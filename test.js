// test.js
var User = require('./user.js'); // which executes 'mongoose.connect()'

User.find({ first: 'Mylar', occupation:'architect' }, function(err, user) {
  if (err) throw err;

  // object of the user
  console.log(user);
});