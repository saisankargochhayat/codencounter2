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
obj.name = "Banning Triple Talaq";
obj.description = "Triple Talaq, also known as talaq-e-biddat, instant divorce and talaq-e-mughallazah (irrevocable divorce), is a form of Islamic divorce which has been used by Muslims in India. It allows any Muslim man to legally divorce his wife by stating the word talaq (the Arabic word for divorce) three times in oral, written, or more recently electronic form.The use and status of triple talaq in India has been a subject of controversy and debate. Those questioning the practice have raised issues of justice, gender equality, human rights and secularism.";
obj.city = "Bhubaneswar";
obj.upvotes = 110;
obj.options = [{
    name: "Triple Talaq Should be Banned",
    votes: []
  },
  {
    name: "Triple Talaq should prevail",
    votes: []
  }
];

for (var i =0;i<50;i++){
  var age = Math.floor(Math.random() * (30 - 20 + 1) + 20).toFixed(0);
  var sex = "Female"
  obj.options[0].votes.push({
    lat: String(age),
    long: String(sex)
  });
}



console.log(obj.options[0].votes);
mongoose.connection.close();
