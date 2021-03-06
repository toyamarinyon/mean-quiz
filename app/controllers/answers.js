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

    Answer.remove({
      q_no: q_no,
      answer_name: req.user.name
    }, function(err) {
      var answer = new Answer({
        q_no: q_no,
        answer_name: req.user.name,
        a_no: req.params.answerNo
      });

      answer.save();

      return res.json({message: 'complete', answer:answer});
    });
  });
};

/**
 * Fetch answer
 */
exports.q = function(req, res) {

  Answer.aggregate(
    {$match: {q_no: parseInt(req.params.questionNo)}},
    {$group: {_id: '$a_no', count: {$sum:1}}},
    function(err, answers) {
      if (err) {return res.json({err:err});}
      if (!answers) {return res.json({})};
      return res.json(answers);
    });

};
