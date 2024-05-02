const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controller");
const routines = require("../controllers/routines.controller");
const exercises = require("../controllers/exercises.controller");


const auth =  require("../middlewares/auth.middleware");


const multer = require('./multer.config')


//Users

router.post("/users", users.create);
router.post("/login", users.login)

//routines

router.post("/routines", routines.create);
router.get("/routines", routines.list);

//exercise 

router.post("/exercises", auth.checkAuth, exercises.create)

module.exports = router;