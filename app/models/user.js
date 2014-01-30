'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * User Schema
 */
var UserSchema = new Schema({
    name: {
      type: String,
      unique: true,
      index: true
    },
    provider: String,
    facebook: {},
    twitter: {},
    github: {},
    google: {},
    guest: {},
    created_at: Date
});

/**
 * Pre-save hook
 */
UserSchema.pre('save', function(next) {
    if (!this.isNew) return next();
    this.created_at = new Date();
    next();
});

mongoose.model('User', UserSchema);
