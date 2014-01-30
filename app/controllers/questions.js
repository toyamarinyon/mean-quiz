'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Question = mongoose.model('Question');

/**
 * Find Question
 */
exports.q = function(req, res) {
    Question
        .findOne({
            no: req.params.id
        })
        .exec(function(err, question) {
            if (err) return res.json({error:err});
            if (!question) return res.json({message:'Failed to load Question ' + req.params.id});
            res.json(question);
        });
};
