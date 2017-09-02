// database setup
var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;
// connect to the database
mongoose.connect(`mongodb://localhost/winterfell`);

// When successfully connected
mongoose.connection.on('connected', () => {
  console.log('Connection to database established successfully');
});

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to database: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  console.log('Database disconnected');
});

var Poll = require('./models/pollModel.js')
var obj = new Poll();
obj.name = "Legalising Gay rights";
obj.description = "legal recognition to marriage for same-sex couples";
obj.city = "Bhubaneswar";
obj.upvotes = 110;
obj.options = [{
    name: "Gay rights shouldn't be legalised",
    votes: []
  },
  {
    name: "Gay rights should be legalised",
    votes: []
  }
];

for (var i =0;i<70;i++){
  var age = Math.floor(Math.random() * (40 - 20 + 1) + 20);
  var sex = "Female"
  obj.options[0].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

for (var i =0;i<65;i++){
  var age = Math.floor(Math.random() * (40 - 20 + 1) + 20);
  var sex = "Male"
  obj.options[0].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

for (var i =0;i<20;i++){
  var age = Math.floor(Math.random() * (70 - 40 + 1) + 40);
  var sex = "Female"
  obj.options[0].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

for (var i =0;i<20;i++){
  var age = Math.floor(Math.random() * (70 - 40 + 1) + 40);
  var sex = "Male"
  obj.options[1].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

for (var i =0;i<15;i++){
  var age = Math.floor(Math.random() * (40 - 20 + 1) + 20);
  var sex = "Female"
  obj.options[1].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

for (var i =0;i<18;i++){
  var age = Math.floor(Math.random() * (40 - 20 + 1) + 20);
  var sex = "Male"
  obj.options[1].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

for (var i =0;i<50;i++){
  var age = Math.floor(Math.random() * (70 - 40 + 1) + 40);
  var sex = "Female"
  obj.options[1].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

for (var i =0;i<55;i++){
  var age = Math.floor(Math.random() * (70 - 40 + 1) + 40);
  var sex = "Male"
  obj.options[1].votes.push({
    lat: String(age),
    long: String(sex)
  });
}

console.log(obj.options[0].votes);
mongoose.connection.close();
