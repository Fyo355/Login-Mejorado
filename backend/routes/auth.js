const express = require("express");
const { Login, logOut, Me } = require("../controllers/auth.js");
const { validateLogin } = require("../validators/users");

const router = express.Router();

router
  .get("/me", Me)
  .post("/login", validateLogin, Login)
  .delete("/logout", logOut);

module.exports = router;
