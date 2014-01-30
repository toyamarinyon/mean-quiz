'use strict';

module.exports = function(app) {
    
    // question route
    var questions = require('../controllers/questions'),
        kvs       = require('../controllers/kvs');
    app.get('/question/:id', questions.q);

};
