const express = require("express");
const { createQuiz } = require("../controllers/quiz.controller");

const router = express.Router();

router.post("/", createQuiz);

module.exports = router;
