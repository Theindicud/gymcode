const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controller");
const routines = require("../controllers/routines.controller");
const exercises = require("../controllers/exercises.controller");

const auth =  require("../middlewares/auth.middleware");

const multer = require('./multer.config')


//USERS

router.post("/users", users.create);
router.post("/login", users.login);
router.get("/profile", auth.checkAuth, users.profile);

//ROUTINES CRUD

router.post("/routines", auth.checkAuth, auth.checkRole("admin", "coach"), routines.create);
router.get("/routines", routines.list);
router.get("/routines/:id", auth.checkAuth, routines.detail);
router.delete("/routines/:id", auth.checkAuth, auth.checkRole("admin", "coach"), routines.delete);
router.patch("/routines/:id", auth.checkAuth, auth.checkRole("admin", "coach"), routines.update);


//EXERCISES CRUD

router.post("/exercises", auth.checkAuth, auth.checkAuth, auth.checkRole("admin", "coach"), exercises.create);
router.get("/exercises", exercises.list);
router.get("/exercises/:id", exercises.detail);
router.patch("/exercises/:id", auth.checkAuth, auth.checkAuth, auth.checkRole("admin", "coach"), exercises.update);
router.delete("/exercises/:id", auth.checkAuth, auth.checkAuth, auth.checkRole("admin", "coach"), exercises.delete);

module.exports = router;