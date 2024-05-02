const express = require("express");

const router = express.Router();
const users = require("../controllers/users.controller");
const routines = require("../controllers/routines.controller")

const auth =  require("../middlewares/auth.middleware");


const multer = require('./multer.config')


//Users

router.post("/users", users.create);
router.post("/login", users.login)

//routines

router.post("/routines", routines.create);

module.exports = router;