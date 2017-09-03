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
var obj1 = new Poll();
obj1.name = "Construction of over-bridge";
obj1.description = "BMC has been allocated funds to construct an over-bridge to ease traffic in the city";
obj1.city = "Bhubaneswar";
obj1.upvotes = 110;
obj1.options = [{
    name: "OUAT to Airport, Bhubaneswar",
    votes: []
  },
  {
    name: "Jayadev Vihar to Nandankanan",
    votes: []
  }
];

var obj2 = new Poll();
obj2.name = "Install WiFi routers";
obj2.description = "Install WiFi routers for free internet accessibility";
obj2.city = "Bhubaneswar";
obj2.upvotes = 67;
obj2.options = [{
    name: "Nandankanan Road, Bhubaneswar",
    votes: []
  },
  {
    name: "Master Canteen Road",
    votes: []
  }
];

var obj3 = new Poll();
obj3.name = "Construction of Cycle-Track";
obj3.description = "Constructing Cycle-track in the city for safety of school students";
obj3.city = "Bhubaneswar";
obj3.upvotes = 56;
obj3.options = [{
    name: "Unit - 8, Bhubaneswar",
    votes: []
  },
  {
    name: "Fire Station, Bhubaneswar",
    votes: []
  }
];

for (var i =0;i<50;i++){
  var latitute = (Math.random() * (20.295506 - 20.283511) + 20.283511).toFixed(6);
  var longitude = (Math.random() * (85.842791 - 85.856266) + 85.856266).toFixed(6);
  obj1.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<30;i++){
  var latitute = (Math.random() * (20.295023 - 20.286409) + 20.286409).toFixed(6);
  var longitude = (Math.random() * (85.834379 - 85.825024) + 85.825024).toFixed(6);
  obj1.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<20;i++){
  var latitute = (Math.random() * (20.313537 - 20.302429) + 20.302429).toFixed(6);
  var longitude = (Math.random() * (85.845280 - 85.827684) + 85.827684).toFixed(6);
  obj1.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<10;i++){
  var latitute = (Math.random() * (20.299727 - 20.298404) + 20.298404).toFixed(6);
  var longitude = (Math.random() * (85.817264 - 85.804939) + 85.804939).toFixed(6);
  obj1.options[1].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<60;i++){
  var latitute = (Math.random() * (20.264849 - 20.263782) + 20.263782).toFixed(6);
  var longitude = (Math.random() * (85.818136 - 85.814445) + 85.814445).toFixed(6);
  obj1.options[0].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<30;i++){
  var latitute = (Math.random() * (20.268311 - 20.265956) + 20.265956).toFixed(6);
  var longitude = (Math.random() * (85.816784 - 85.812922) + 85.812922).toFixed(6);
  obj1.options[0].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

for (var i =0;i<19;i++){
  var latitute = (Math.random() * (20.266315 - 20.265493) + 20.265493).toFixed(6);
  var longitude = (Math.random() * (85.810604 - 85.803266) + 85.803266).toFixed(6);
  obj1.options[0].votes.push({
    lat: String(latitute),
    long: String(longitude)
  });
}

var ar = [obj1,obj2,obj3];
for (i in ar){
  ar[i].save(function(err){
    if ( err ) throw err;
    console.log("Object Saved Successfully");
  });
}

// console.log(obj.options[1].votes);
mongoose.connection.close();
