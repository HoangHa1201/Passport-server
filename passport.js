const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;

const GOOGLE_CLIENT_ID = '12401593107-c9f09djl41qiijerd5gt9annkp86r2bq.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';

const GITHUB_CLIENT_ID = '533695feb6a50c488fd1';
const GITHUB_CLIENT_SECRET = 'cefab9295fb263327aeb0e97e7068833ecec512e';



passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)

    }
));
passport.use(new GithubStrategy({
    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
},
    function (accessToken, refreshToken, profile, done) {
        done(null, profile)

    }
));

passport.serializeUser(function (user, done) {
    done(null, user);
})

passport.deserializeUser(function (user, done) {
    done(null, user);
})

module.exports = passport;
