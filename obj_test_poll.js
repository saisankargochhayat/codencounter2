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
obj.upvotes = 110;
obj.options = [{
    name: "OUAT to Airport, Bhubaneswar",
    votes: []
  },
  {
    name: "Jayadev Vihar to Nandankanan",
    votes: []
  }
];

for (var i =0;i<50;i++){
  var latitute = (Math.random() * (20.295506 - 20.283511 + 1) + 20.283511).toFixed(6);
  var longitude = (Math.random() * (85.842791 - 85.856266 + 1) + 85.856266).toFixed(6);
  obj.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<30;i++){
  var latitute = (Math.random() * (20.295023 - 20.286409 + 1) + 20.286409).toFixed(6);
  var longitude = (Math.random() * (85.834379 - 85.825024 + 1) + 85.825024).toFixed(6);
  obj.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<20;i++){
  var latitute = (Math.random() * (20.313537 - 20.302429 + 1) + 20.302429).toFixed(6);
  var longitude = (Math.random() * (85.845280 - 85.827684 + 1) + 85.827684).toFixed(6);
  obj.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });

for (var i =0;i<10;i++){
  var latitute = (Math.random() * (20.299727 - 20.298404 + 1) + 20.298404).toFixed(6);
  var longitude = (Math.random() * (85.817264 - 85.804939 + 1) + 85.804939).toFixed(6);
  obj.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<60;i++){
  var latitute = (Math.random() * (20.264849 - 20.263782 + 1) + 20.263782).toFixed(6);
  var longitude = (Math.random() * (85.818136 - 85.814445 + 1) + 85.814445).toFixed(6);
  obj.options[0].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<30;i++){
  var latitute = (Math.random() * (20.268311 - 20.265956 + 1) + 20.265956).toFixed(6);
  var longitude = (Math.random() * (85.816784 - 85.812922 + 1) + 85.812922).toFixed(6);
  obj.options[0].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<19;i++){
  var latitute = (Math.random() * (20.266315 - 20.265493 + 1) + 20.265493).toFixed(6);
  var longitude = (Math.random() * (85.810604 - 85.803266 + 1) + 85.803266).toFixed(6);
  obj.options[0].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

obj.save(function(err){
  if ( err ) throw err;
  console.log("Object Saved Successfully");
});
console.log(obj.options[1].votes);
mongoose.connection.close();
