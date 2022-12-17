const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");
const {
  verifyUser,
  adminOnly,
  businessOnly,
} = require("../middleware/auth.js");
const { validateCreate } = require("../validators/users");

const router = express.Router();

router
  .get("/normal", verifyUser)
  .get("/admin", verifyUser, adminOnly)
  .get("/business", verifyUser, businessOnly)
  .post("/users", validateCreate, createUser);
//router.patch('/users/:id', verifyUser, adminOnly, updateUser);
//router.delete('/users/:id', verifyUser, adminOnly, deleteUser);

module.exports = router;
