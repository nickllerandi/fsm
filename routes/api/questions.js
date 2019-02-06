const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Configuration / Utils
const keys = require("../../config/keys");

// Validation
// ...

// Question Model
const Question = require("../../models/Question");

// ROUTES //

// Test
router.get("/test", (req, res) => res.json({msg: "Posts route works"}));

// Get all questions sorted by date
router.get("/", async (req, res) => {
    try {
        const questions = await Question
            .find()
            .sort({date: -1});

        res.json(questions);
    } catch (err) {
        res.status(404);
    }
});

// Create a new question
router.post("/", passport.authenticate("jwt", {session: false}), async (req, res) => {
    try {
        const newQuestion = new Question({
            title: req.body.title,
            body: req.body.body,
            tags: req.body.tags,
            user: req.user.id
        });

        const question = await newQuestion.save();
        await res.json(question);
        //THE BELOW IS NOT WORKING
    } catch (err) {
        res.status(400).json({
            unauthorized: "You must be logged in to ask a question"
        })
    }
});

module.exports = router;