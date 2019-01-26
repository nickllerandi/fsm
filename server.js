const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

// Routes
const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
const questions = require('./routes/api/questions');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

app.get("/", (req, res) => res.send("Fullstack Musician"));

// Use routes
app.use("/api/users", users);
app.use("/api/questions", questions);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}`));

module.exports = app;

