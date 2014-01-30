'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    KVS = mongoose.model('KeyValueStore');

/**
 * setter
 */
exports.set = function(key, value, next) {
    KVS.remove({key: key}, function(error) {
      if ( error ) {
        // return res.json({error:error});
      }
    });
    
    var kvs = new KVS({key: key, value: value});
    kvs.save(function(error) {
      if ( error ) {
        // return res.json({error:error});
      }
    });
    next();
    // return res.json({message:'complete!'});
};

/**
 * getter
 */
exports.get = function(key, next) {
  KVS.findOne({key: key}, function(error, value) {
    if ( error ) {
      next({error: error});
    }
    if ( !value ) {
      next({message: 'kvs not found ' + req.params.key});
    }
    next(value.value);
  });
};
