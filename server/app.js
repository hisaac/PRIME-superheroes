//----------------------------------------------------------------------------//
var express = require('express');
var app = express();
var path = require('path');
var powers = require('./routes/superpowers.js');
var heroes = require('./routes/heroes.js');
var bodyParser = require('body-parser');
//----------------------------------------------------------------------------//

//---------------------------------- Routes ----------------------------------//
app.use('/powers', powers);
app.use('/heroes', heroes);
//----------------------------------------------------------------------------//

//----------------------------------------------------------------------------//
app.use(express.static(path.resolve('./server/public')));
app.use(bodyParser.json());
app.listen(3000);
//----------------------------------------------------------------------------//
