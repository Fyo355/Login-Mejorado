const { usersModel } = require("../models");

 const verifyUser = async (req, res, next) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "ERROR" });
  }
  const user = await usersModel.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "ERROR" });
  req.userId = user.id;
  req.role = user.role;
  next();
};

 const adminOnly = async (req, res, next) => {
  const user = await usersModel.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "ERROR" });
  if (user.role !== "admin") return res.status(403).json({ msg: "ERROR" });
  next();
};

 const businessOnly = async (req, res, next) => {
  const user = await usersModel.findOne({
    where: {
      id: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "ERROR" });
  if (user.role !== "business") return res.status(403).json({ msg: "ERROR" });
  next();
};

module.exports = { verifyUser, businessOnly, adminOnly};