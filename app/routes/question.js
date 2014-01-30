'use strict';

module.exports = function(app) {
    
    // question route
    var questions = require('../controllers/questions'),
        kvs       = require('../controllers/keyvaluestores');

    app.get('/question/:id', function(req, res, next){
      kvs.set('current_q_no', req.params.id, next);
    }, questions.q);

};
