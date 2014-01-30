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
            no: req.param.id
        })
        .exec(function(err, question) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load Question ' + id));
            res.json(question);
        });
};
