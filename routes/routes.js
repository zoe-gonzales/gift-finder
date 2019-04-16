var db = require('../models');

module.exports = function(app) {
    // Get Homepage
    app.get('/', function(req, res){
        res.render('index');
    });

    // Get Survey
    app.get('/questions', function(req, res){
        db.Idea.findAll({}).then(function(data){
            var categories = [];
            data.forEach(item => {
                var giftCategory = item.dataValues.category;
                if (!categories.includes(giftCategory)){
                    categories.push(giftCategory);
                }
            });
            res.render('survey', {categories: categories});
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

    app.post('/request', function(req, res){
        var ideaRequest = {};

        var homemade = req.body.isHomemade;
        
        if (parseInt(homemade) === 0){
            ideaRequest.isHomemade = homemade;
        }

        ideaRequest.category = req.body.category;
        ideaRequest.price = req.body.price;
        
        db.Idea.findAll({
            where: ideaRequest
        }).then(function(result){
            res.json(result);
        });
    });
}