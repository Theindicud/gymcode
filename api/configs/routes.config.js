const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controller");
const routines = require("../controllers/routines.controller");
const exercises = require("../controllers/exercises.controller");

const auth =  require("../middlewares/auth.middleware");

const multer = require('./multer.config')


//USERS

router.post("/users", users.create);
router.post("/login", users.login)

//ROUTINES CRUD

router.post("/routines", routines.create);
router.get("/routines", routines.list);

//EXERCISES CRUD

router.post("/exercises", auth.checkAuth, exercises.create);
router.get("/exercises", auth.checkAuth, exercises.list);
router.get("/exercises/:id", auth.checkAuth, exercises.detail);
router.patch("/exercises/:id", auth.checkAuth, auth.isAdmin, exercises.update);
router.delete("/exercises/:id", auth.checkAuth, auth.isAdmin, exercises.delete);

module.exports = router;