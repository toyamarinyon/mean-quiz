'use strict';

module.exports = function(app) {
    
    // question route
    var questions = require('../controllers/questions');
    app.get('/question/:id', questions.q(req, res));

};
