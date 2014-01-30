'use strict';

module.exports = function(app) {
    
    // question route
    var answers = require('../controllers/answers');

    app.get('/answer/send/:answerNo',  answers.a);

};
