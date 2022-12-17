const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { compare } = require("../utils/handlePassword");
const {
  handleErrorResponse,
  handleHttpError,
} = require("../utils/handleError");
const { tokenSign } = require("../utils/handleToken");

// TOKEN
const Login = async (req, res) => {
  try {
    const body = matchedData(req);
    const user = await usersModel.findOne({ where: { email: body.email } });
    if (!user) {
      handleErrorResponse(res, "USER_NOT_EXISTS", 404);
      return;
    }
    const checkPassword = await compare(req.body.password, user.password);

    if (!checkPassword) {
      handleErrorResponse(res, "PASSWORD_INVALID", 402);
      return;
    }

    const tokenJwt = await tokenSign(user);

    /*
    const data = {
      token: tokenJwt,
      user: user,
    };
    res.send({data})
    */

    res.send(user);
  } catch (e) {
    handleHttpError(res, e);
  }
};

const Me = async (req, res) => {
  if (!req.session.userId) {
    return res.status(401).json({ msg: "ERROR" });
  }
  const user = await User.findOne({
    attributes: ["id", "name", "email", "role"],
    where: {
      id: req.session.userId,
    },
  });
  if (!user) return res.status(404).json({ msg: "ERROR" });
  res.status(200).json(user);
};

const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "ERROR" });
    res.status(200).json({ msg: "Logout" });
  });
};

module.exports = { Login, Me, logOut };
