const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controller");

const multer = require('./multer.config')


//user
router.post("/users", users.register);
router.post("/login", users.login)

module.exports = router;