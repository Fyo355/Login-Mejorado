const express = require("express");
const { createUser } = require("../controllers/users");
const authMiddleware = require("../middleware/auth");
const authRolMiddleware = require("../middleware/rol");
const { validateCreate } = require("../validators/users");
const router = express.Router();

router
  .get("/normal")
  .get("/admin", authMiddleware, authRolMiddleware(["admin"]))
  .get("/business", authMiddleware, authRolMiddleware(["business"]))
  .post("/users", validateCreate, createUser);

module.exports = router;
