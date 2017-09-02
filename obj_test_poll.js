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
  obj.name="nua element1212sdkjsak";
  obj.description="Default";
  obj.upvotes=1;
  obj.options=[{
    key:"bbsr",
    name:"cet",
    description:"dsfghasdfghas",
    votes:[]
  },
  {
    key:"dsfs",
    name:"gfjhgvsdj",
    description:"dsfghasdfghas",
    votes:[]
  }];
console.log(obj);
  obj.save(function(err){
    if ( err ) throw err;
    console.log("Object Saved Successfully");
  });

  console.log(obj);
mongoose.connection.close();
