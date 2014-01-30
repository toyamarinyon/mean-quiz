'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    KVS = mongoose.model('KeyValueStore');

/**
 * setter
 */
exports.set = function(req, res) {
    KVS.remove({key: req.params.key}, function(error) {
      if ( error ) {
        return res.json({error:error});
      }
    });
    
    var kvs = new KVS({key: req.params.key, value: req.params.value});
    kvs.save(function(error) {
      if ( error ) {
        return res.json({error:error});
      }
    });
    return res.json({message:'complete!'});
};

/**
 * getter
 */
exports.get = function(req, res) {
  KVS.findOne({key: req.params.key}, function(error, value) {
    if ( error ) {
      return res.json({error: error});
    }
    if ( !value ) {
      return res.json({message: 'kvs not found ' + req.params.key});
    }
    return res.json({value: value});
  });
};
