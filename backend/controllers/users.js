const { matchedData } = require("express-validator");
const { usersModel } = require("../models");
const { encrypt } = require("../utils/handlePassword");
const {
  handleHttpError,
  handleErrorResponse,
} = require("../utils/handleError");

const getUsers = (req, res) => {};

const getUserById = (req, res) => {};

const createUser = async (req, res) => {
  try {
    const body = matchedData(req);
    const checkIsExist = await usersModel.findOne({
      where: { email: body.email },
    });
    if (checkIsExist) {
      handleErrorResponse(res, "USER_EXISTS", 401);
      return;
    }
    const password = await encrypt(body.password);
    const bodyInsert = { ...body, password };
    const data = await usersModel.create(bodyInsert);

    res.send({ data });
  } catch (e) {
    handleHttpError(res, e);
  }
};

const updateUser = (req, res) => {};

const deleteUser = (req, res) => {};

module.exports = { getUsers, getUserById, createUser, updateUser, deleteUser };
