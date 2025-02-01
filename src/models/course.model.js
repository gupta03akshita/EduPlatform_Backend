const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: String,
    duration: Number,
    instructorName: String,
    language: String,
    level: String,
    price: Number,
    status: { type: String, enum: ["published", "draft"], default: "published" },
});

module.exports = mongoose.model("Course", CourseSchema);
