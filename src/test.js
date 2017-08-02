// test.js
var User = require('./user.js'); // which executes 'mongoose.connect()'

User.find({ first: 'Mylar', occupation:'architect' }, function(err, user) {
  if (err) throw err;
  user.gender = 'dunno';
  user.save(function(err){
  	if (err) throw err;
  	console.log('Done');
  });

  // object of the user
  console.log(user);
});