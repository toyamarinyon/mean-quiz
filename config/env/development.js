'use strict';

var port = process.env.PORT || 3000;
module.exports = {
    db: "mongodb://localhost/mean-dev",
    app: {
        name: "MEAN - A Modern Stack - Development"
    },
    facebook: {
        clientID: process.env.MEAN_QUIZ_FACEBOOK_CLIENT_ID || "APP_ID",
        clientSecret: process.env.MEAN_QUIZ_FACEBOOK_APP_SECRET || "APP_SECRET",
        callbackURL: "http://test.i.jp:"+port+"/auth/facebook/callback"
    },
    twitter: {
        clientID: "CONSUMER_KEY",
        clientSecret: "CONSUMER_SECRET",
        callbackURL: "http://localhost:"+port+"/auth/twitter/callback"
    },
    github: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:"+port+"/auth/github/callback"
    },
    google: {
        clientID: "APP_ID",
        clientSecret: "APP_SECRET",
        callbackURL: "http://localhost:"+port+"/auth/google/callback"
    }
}
console.log('mongodb is ' + "mongodb://localhost/mean-dev");
