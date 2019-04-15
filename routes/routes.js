var db = require('../models');

module.exports = function(app) {
    // Get Homepage
    app.get('/', function(req, res){
        res.render('index');
    });

    // Get Survey
    app.get('/questions', function(req, res){
        db.Idea.findAll({}).then(function(data){
            res.render('survey', {categories: data});
        });
    });

    app.get('/results', function(req, res){
        var userCategories = req.body.categories;
        db.Idea.findAll({
            where: {category: userCategories}
        }).then(function(data){
            res.render('result', {gift_idea: data});
        });
    });

    // Get List of Gift Catgories for Add page
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

    app.post('/add', function(req, res){
        db.Idea.create(req.body).then(function(result){
            res.json(result);
        });
    });
}