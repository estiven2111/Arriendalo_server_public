const { Router } = require("express");
const {
  AllUsersMiddleWare,
  SaveUsersMiddleWare,
  AuthMiddleware,
  AllClientsMiddleWare,
} = require("../../middlewares");

const users = Router();

users.get("/users", AllUsersMiddleWare);
users.get("/save", SaveUsersMiddleWare);
users.post("/login", AuthMiddleware);
users.get("/clients", AuthMiddleware);
module.exports = users;
