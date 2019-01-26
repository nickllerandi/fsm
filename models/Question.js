const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users"
            }
        }
    ],
    tags: [
        {
            type: String
        }
    ],
    date: {
        type: Date,
        default: Date.now
    },
    answers: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: "users"
            },
            body: {
                type: String,
                required: true
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Question = mongoose.model("questions", QuestionSchema);