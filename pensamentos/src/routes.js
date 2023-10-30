const express = require("express");

const UsersController = require("./controllers/UsersController");
const Thought = require("./model/Thought");
const User = require("./model/User");

const router = express.Router();

router.post("/users", UsersController.createUser);
router.get("/users", UsersController.findAllUsers);
router.get("/users/:id", UsersController.findUser);
router.patch("/users/:id", UsersController.uptadeUser);
router.delete("/users/:id", UsersController.deleteUser);

module.exports = router;