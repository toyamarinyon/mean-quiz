'use strict';

var port = process.env.PORT;
module.exports = {
    db: "mongodb://localhost/mean-dev",
    app: {
        name: "クイズ Bプロジェクト!"
    },
    facebook: {
        clientID: process.env.MEAN_QUIZ_FACEBOOK_CLIENT_ID || "APP_ID",
        clientSecret: process.env.MEAN_QUIZ_FACEBOOK_APP_SECRET || "APP_SECRET",
        callbackURL: "/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "/auth/google/callback"
    }
}
