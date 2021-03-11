const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: String,
    place: String,
    date: Date,
    story: String,
    picture: {
        type: String,
        default: "https://res.cloudinary.com/dyhiaws3n/image/upload/v1615308906/together-we-are-strong-4029306_1920_bzf8fs.jpg",
    },
    family: { type: Schema.Types.ObjectId, ref: "Families" },
    user: { type: Schema.Types.ObjectId, ref: "Friend" },
    author: String
});


const StoryModel = mongoose.model("Stories", storySchema);

module.exports = StoryModel;
