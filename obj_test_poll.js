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
  obj.name="Construction of over-bridge";
  obj.description="BMC has been allocated funds to construct an over-bridge to ease traffic in the city";
  obj.city="Bhubaneswar";
  obj.upvotes=29;
  obj.options=[{
    name:"Acharya Vihar to Nandankanan",
    votes:[]
  },
  {
    name:"OUAT to Airport, Bhubaneswar",
    votes:[]
  }];
console.log(obj);
  obj.save(function(err){
    if ( err ) throw err;
    console.log("Object Saved Successfully");
  });

  console.log(obj);
mongoose.connection.close();
