'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    User = mongoose.model('User');

/**
 * Auth callback
 */
exports.authCallback = function(req, res) {
    res.redirect('/#/login');
};

/**
 * is Logged in
 */
exports.isLoggedIn = function(req, res) {
    res.json({result: req.user !== undefined, loginUser: req.user});
};

/**
 * Logout
 */
exports.logout = function(req, res) {
    User.update(
      {provider:'guest', name:req.user.name},
      {$set: {guest: {state: 'free'}}},
      {multi:true}
    ).exec();
    req.logout();
    res.json({message: 'logout success!'});
};

/**
 * guest login
 */
exports.guestlogin = function(req, res) {
  User.findOne({
    provider: 'guest',
    'guest.state':'free'
  }, function(err, user) {
    if (err) {
      return done(err);
    }
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    req.login(user, function(err) {
      if (err) { return json({error: err}) };
    });
    User.update(
      {name: user.name}, 
      {$set: {guest: {state: 'use'}}}, 
      {upsert: false, multi: true}, function(err) {
      }
    );
    return res.json(req.user);
  });
}
