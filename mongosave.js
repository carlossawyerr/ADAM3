// if our user.js file is at app/models/user.js
var User = require('./user.js');

// create a new user called carlos
var carlos = new User({
  first: 'Mylar',
  last: 'Onslo',
  gender: 'f',
  occupation: 'Scientist',
  nationality : 'Indonesian'
});

// call the custom method. this will just add -dude to his name
// user will now be Chris-dude
carlos.dudify(function(err, name) {
  if (err) throw err;

  console.log('Your new name is ' + name);
});

// call the built-in save method to save to the database
carlos.save(function(err) {
  if (err) throw err;
  console.log('User saved successfully!');
});
