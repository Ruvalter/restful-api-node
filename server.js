// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
// mongoose.connect('mongodb://testuser:Druva@04@ds161245.mlab.com:61245/test_db'); // connect to our database on mongolab
mongoose.connect('mongodb://127.0.0.1:27017/flashCards'); // connect to our local database
var Card     = require('./app/models/card');
var Deck     = require('./app/models/deck');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
  res.json({ message: 'hooray! welcome to our api!' });
});

// more routes for our API will happen here

// on routes that end in /bears
// ----------------------------------------------------
router.route('/decks')

  .get(function(req, res) {
    console.log("teste do get")
    Deck.find(function (err, decks){
      if(err) {
        res.send(err) //nao aparece no browser
        console.log(err)
      }
      res.json(decks); //aparece no browser
    })
  })






// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);


console.log('Magic happens on port ' + port);

