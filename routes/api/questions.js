const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const passport = require("passport");

// Configuration / Utils
const keys = require("../../config/keys");

// Validation
const validateCreateQuestionInput = require("../../validation/createQuestion");

// Question Model
const Question = require("../../models/Question");

// ROUTES //

// Test
router.get("/test", (req, res) => res.json({msg: "Posts route works"}));

// Get all questions sorted by date
router.get("/", async (req, res) => {
    try {
        const questions = await Question.find()
            .populate("user", ["name", "email"])
            .sort({date: -1});

        res.json(questions);
    } catch (err) {
        res.status(404);
    }
});

// Create a new question
router.post("/", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const {errors, isValid} = validateCreateQuestionInput(req.body);

    if (!isValid) {
        res.status(400).json(errors);
    } else {
        try {
            const newQuestion = new Question({
                title: req.body.title,
                body: req.body.body,
                tags: req.body.tags,
                user: req.user.id
            });

            const question = await newQuestion.save();
            await res.json(question);
        } catch (err) {
            res.status(404).json({
                error: "No questions found"
            });
        }
    }
});

router.get("/:id", async (req, res) => {
    try {
        const question = await Question
            .findById(req.params.id);
        res.json(question);
    } catch (err) {
        res.status(404).json({
            error: "Question not found"
        });
    }
});

// Get all questions for a particular user
router.get("/user/:userId", async (req, res) => {
    const userId = req.params.userId;
    try {
        const questions = await Question.find({
            user: userId
        })
            .sort({date: -1});

        res.json(questions);
    } catch (err) {
        res.status(404);
    }
});


module.exports = router;