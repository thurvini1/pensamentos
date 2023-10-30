const express = require("express");

const UsersController = require("../controllers/UsersController");

const router = express.Router();

// Rota para cadastrar os usuários
router.post("/users", UsersController.createUser);

// Rota para encontrar todos os registros do usuários cadastrados na aplicação
router.get("/users", UsersController.findAllUsers);

// Rotas
router.get("/users/:id", UsersController.findUser);

// Rota para adicionar um registro
router.patch("/users/:id", UsersController.uptadeUser);

// Rota para deletar um registro
router.delete("/users/:id", UsersController.deleteUser);

// Rotas pensamentos
router.post("/thoughts/:id", ThoughtsController.createThought);

module.exports = router;