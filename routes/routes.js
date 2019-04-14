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

    app.get('/add', function(req, res){
        db.Idea.findAll({}).then(function(data){
            var categories = [];
            data.forEach(category => {
                var categoryName = category.dataValues.category;
                if (!categories.includes(categoryName)){
                    categories.push(categoryName);
                }
            });
            res.render('add', {category: categories});
        });
    });
}