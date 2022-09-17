const cookieSession = require('cookie-session');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const app = express();

const passportSetup = require('./passport');
const authRoute = require('./routes/auth');
app.use(cookieSession({
    name: "session",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(
    cors({
        origin: "https://63260495d9d3bf7b11b8e7b7--passport-client.netlify.app",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true,
    })
)

app.use('/auth', authRoute);
app.listen("https://passportjs-server.herokuapp.com/", () => {
    console.log("Server is running on port");
});