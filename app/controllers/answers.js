'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    KVS = require('./keyvaluestores'),
    Answer = mongoose.model('Answer');

/**
 * Save answer
 */
exports.a = function(req, res) {

  KVS.get('current_q_no', function(q_no) {
    var answer = new Answer({
      q_no: q_no,
      answer_name: req.user.name,
      a_no: req.params.answerNo,
    });

    answer.save();

    return res.json({message: 'complete', data:answer});
  });
};
