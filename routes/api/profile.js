const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

// Models
const Profile = require("../../models/Profile");
const User = require("../../models/User");

router.get("/test", (req, res) => res.json({msg: "Profile route works"}));

router.get("/", passport.authenticate("jwt", {session:false}), async (req, res) => {
    const errors = {};

    try {
        const profile = await Profile.findOne({user: req.user.id});
        if (!profile) {
            errors.noprofile = "No profile found for this user";
            return res.status(404).json(errors);
        }
        res.json(profile);
    } catch (err) {
        return res.status(404).json(err);
    }
});

module.exports = router;