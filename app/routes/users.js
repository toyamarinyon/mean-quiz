'use strict';

// User routes use users controller
var users = require('../controllers/users');

module.exports = function(app, passport) {
    
    app.get('/logout', users.logout);

    app.get('/is_logged_in', users.isLoggedIn);

    // Setting the local strategy route
    app.get('/guestlogin', users.guestlogin);

    // Setting the facebook oauth routes
    app.get('/auth/facebook', passport.authenticate('facebook', {
        scope: ['email', 'user_about_me'],
        locale: 'ja_JP',
        failureRedirect: '/'
    }));

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/'
    }), users.authCallback);
};
