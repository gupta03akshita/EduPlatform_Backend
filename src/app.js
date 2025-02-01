const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const courseRoutes = require("./routes/course.routes");
const quizRoutes = require("./routes/quiz.routes");
require("dotenv").config();

const app = express();
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/courses", courseRoutes);
app.use("/api/quizzes", quizRoutes);

app.get("/", (req, res) => {
    res.send("Educational Platform API is running...");
});

module.exports = app;
