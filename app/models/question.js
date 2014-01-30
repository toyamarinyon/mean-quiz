'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Question Schema
 */
var QuestionSchema = new Schema({
    title: {
      type: String,
      unique: true,
      index: true
    },
    choices: {}
    no: Number,
    Answer: Number,
    created_at: Date
});

/**
 * Pre-save hook
 */
QuestionSchema.pre('save', function(next) {
    if (!this.isNew) return next();
    this.created_at = new Date();
    next();
});

mongoose.model('Question', QuestionSchema);
