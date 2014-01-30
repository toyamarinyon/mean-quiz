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
            if (err) return res.json({'error':err});
            if (!question) return res.json({'Failed to load Question ' + req.param.id}));
            res.json(question);
        });
};
