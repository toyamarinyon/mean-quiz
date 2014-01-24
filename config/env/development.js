'use strict';

module.exports = {
    db: "mongodb://localhost/mean-dev",
    app: {
        name: "MEAN - A Modern Stack - Development"
    },
    facebook: {
        clientID: process.env.MEAN_QUIZ_FACEBOOK_CLIENT_ID || "APP_ID",
        clientSecret: process.env.MEAN_QUIZ_FACEBOOK_APP_SECRET || "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:3000/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:3000/auth/google/callback"
    }
}
