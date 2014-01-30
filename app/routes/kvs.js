'use strict';

module.exports = function(app) {
    
    var kvs = require('../controllers/keyvaluestores');
    app.get('/kvs/set/:key/:value', kvs.set);
    app.get('/kvs/get/:key', kvs.get);

};
