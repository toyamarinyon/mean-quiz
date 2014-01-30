'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * KeyValueStore Schema
 */
var KeyValueStoreSchema = new Schema({
    key: {
      type: String,
      unique: true,
      index: true
    },
    value: String,
    created_at: Date
});

/**
 * Pre-save hook
 */
KeyValueStoreSchema.pre('save', function(next) {
    if (!this.isNew) return next();
    this.created_at = new Date();
    next();
});

mongoose.model('KeyValueStore', KeyValueStoreSchema);
