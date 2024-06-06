const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controller");
const routines = require("../controllers/routines.controller");
const exercises = require("../controllers/exercises.controller");
const gyms = require("../controllers/gym.controller");
const subscriptions = require("../controllers/subscriptions.controller");

const auth =  require("../middlewares/auth.middleware");

const multer = require('./multer.config')


//USERS

router.post("/users", users.create);
router.post("/login", users.login);
router.get("/profile", auth.checkAuth, users.profile);
router.get("/coaches", users.getAllCoaches);
router.get("/coach/:id", users.getCoachById);

//ROUTINES CRUD

router.post("/createroutine", auth.checkAuth, auth.checkRole("admin", "coach"), routines.create);
router.get("/routines", routines.list);
router.get("/routines/:id", auth.checkAuth, routines.detail);
router.delete("/routines/:id", auth.checkAuth, auth.checkRole("admin", "coach"), routines.delete);
router.patch("/routines/:id", auth.checkAuth, auth.checkRole("admin", "coach"), routines.update);


//EXERCISES CRUD

router.post("/exercises", auth.checkAuth, auth.checkRole("admin", "coach"), exercises.create);
router.get("/exercises", exercises.list);
router.get("/exercises/:id", exercises.detail);
router.patch("/exercises/:id", auth.checkAuth, auth.checkRole("admin", "coach"), exercises.update);
router.delete("/exercises/:id", auth.checkAuth, auth.checkRole("admin", "coach"), exercises.delete);

// SUBS CRUD

router.post("/subscriptions", auth.checkAuth, auth.checkRole("admin", "coach", "pupil"), subscriptions.follow);
router.get("/myroutines", auth.checkAuth, auth.checkRole("admin", "coach", "pupil"), subscriptions.showMySubscriptions);
router.delete('/subscriptions/:routineId', auth.checkAuth, auth.checkRole("admin", "coach", "pupil"), subscriptions.unfollow);
router.get('/subscriptions/check/:routineId', auth.checkAuth, auth.checkRole("admin", "coach", "pupil"), subscriptions.checkSubscription);


//GYMS CRUD

router.post("/gyms", auth.checkAuth, auth.checkRole("admin"), gyms.create);
router.get("/gyms", gyms.list);
router.get("/gyms/:id", gyms.detail);
router.patch("/gyms/:id", auth.checkAuth, auth.checkRole("admin"), gyms.update);
router.delete("/gyms/:id", auth.checkAuth, auth.checkRole("admin"), gyms.delete);

module.exports = router;