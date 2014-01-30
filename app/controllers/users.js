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
 * Show login form
 */
exports.signin = function(req, res) {
    res.render('users/signin', {
        title: 'Signin',
        message: req.flash('error')
    });
};

/**
 * Show sign up form
 */
exports.signup = function(req, res) {
    res.render('users/signup', {
        title: 'Sign up',
        user: new User()
    });
};

/**
 * Logout
 */
exports.logout = function(req, res) {
    User.update({provider:'guest', name:req.user.name},{$set:{status:'free'}},{multi:true}).exec();
    req.logout();
    res.json({message: 'logout success!'});
};

/**
 * Session
 */
exports.session = function(req, res) {
    res.redirect('/');
};

/**
 * Create user
 */
exports.create = function(req, res, next) {
    var user = new User(req.body);
    var message = null;

    user.provider = 'local';
    user.save(function(err) {
        if (err) {
            switch (err.code) {
                case 11000:
                case 11001:
                    message = 'Username already exists';
                    break;
                default:
                    message = 'Please fill all the required fields';
            }

            return res.render('users/signup', {
                message: message,
                user: user
            });
        }
        req.logIn(user, function(err) {
            if (err) return next(err);
            return res.redirect('/');
        });
    });
};

/**
 * Send User
 */
exports.me = function(req, res) {
    res.jsonp(req.user || null);
};

/**
 * Find user by id
 */
exports.user = function(req, res, next, id) {
    User
        .findOne({
            _id: id
        })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            req.profile = user;
            next();
        });
};

/**
 * Find guest user
 */
exports.guest = function(req, res) {
    User
        .findOne({
            status: 'free',
            provider: 'local'
        })
        .exec(function(err, user) {
            if (err) return next(err);
            if (!user) return next(new Error('Failed to load User ' + id));
            res.json(user);
        });
};

/**
 * update_guest
 */
exports.use_guest = function(req, res) {
   User.update({email:req.user.email},{$set:{status:'use'}},{multi:true}).exec();
};
