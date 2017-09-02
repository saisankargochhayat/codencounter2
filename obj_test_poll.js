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
obj.name = "Construction of over-bridge";
obj.description = "BMC has been allocated funds to construct an over-bridge to ease traffic in the city";
obj.city = "Bhubaneswar";
obj.upvotes = 29;
obj.options = [{
    name: "Acharya Vihar to Nandankanan",
    votes: []
  },
  {
    name: "OUAT to Airport, Bhubaneswar",
    votes: [{
      lat: "22.615",
      long: "23.116"
    }]
  }
];
// obj.save(function(err){
//   if ( err ) throw err;
//   console.log("Object Saved Successfully");
// });

for (var i =0;i<50;i++){
  var latitute = (Math.random() * (20.295506 - 20.283511 + 1) + 20.283511).toFixed(6);
  var longitude = (Math.random() * (85.842791 - 85.856266 + 1) + 85.856266).toFixed(6);  
  obj.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

console.log(obj.options[1].votes);
mongoose.connection.close();