var express = require('express');
var db = require('./models');

var app = express();
var PORT = process.env.PORT || 3000;

// Express data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static("public"));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Routes
require("./routes/routes.js")(app);

db.sequelize.sync().then(function(){
    app.listen(PORT, function() {
        console.log("Listening on port " + PORT);
    });
});