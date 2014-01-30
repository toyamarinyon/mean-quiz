'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Answer Schema
 */
var AnswerSchema = new Schema({
    q_no: Number,
    answer_name: String,
    a_no: Number,
    created_at: Date
});

/**
 * Pre-save hook
 */
AnswerSchema.pre('save', function(next) {
    if (!this.isNew) return next();
    this.created_at = new Date();
    next();
});

mongoose.model('Answer', AnswerSchema);
