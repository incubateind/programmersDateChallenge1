const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");
const cors =require("cors");
// create express app
const app = express();
const dbConfig = require('./config/database.config.js');
const email = require('./models/emails.model.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology:true
}
)
mongoose.set("useCreateIndex",true);
let db = mongoose.connection;
db.once('open', function(){
  console.log('Connected to MongoDB');
});

// Check for DB errors
db.on('error', function(err){
  console.log(err);
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())

// define a simple route
app.get('/', (req, res) => {
     console.log(req.body);
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});
require('./routes/covidupdates.routes.js')(app);
require('./routes/email.routes.js')(app);

//sending mail to emaillist
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'abhimittal342@gmail.com',
    pass: 'fmkcfvfecybqkidu'
  }
});
email.find((err, dbArray) => {
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < dbArray.length; i++) {
        // NODEMAILER OPTIONS
        var mailOptions = {
          from: 'abhimittal342@gmail.com',
          to: dbArray[i].email,
          subject: '',
          text: '',
        };
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }
    }
  });
// listen for requests
app.listen(8000, () => {
    console.log("Server is listening on port 3000");
});
