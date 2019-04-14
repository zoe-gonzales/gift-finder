var db = require('../models');

module.exports = function(app) {
    app.get('/', function(req, res){
        res.render('index');
    });

    app.get('/questions', function(req, res){
        db.Idea.findAll({}).then(function(data){
            res.render('survey', {categories: data});
        });
    });
}