const { responseError, responseSucccess } = require('../../helper/response');
const { loginMember } = require('../../service/member/loginService');
const service = require('../../service/member/registerService');
const { hashPassword, comparePassword } = require('../../utils/bcrypt');
const memberValidation = require('../../validation/memberValidation');
const validate = require('../../validation/validate');
// const bcrypt = require('bcrypt');

const register = async (req, res) => {
  // validate the request
  const validation = validate(memberValidation, req.body);
  if (validation.error) {
    return res.status(400).json(validation);
  }

  const data = await hashPassword(req.body);
  const result = await service.store(data);
  if (result.error) {
    return responseError(res, 400, result.error);
  }
  result.password = undefined;
  return responseSucccess(res, 200, 'success', result);
};

const login = async (req, res) => {
  const result = await loginMember(req.body);
  const isMatch = await comparePassword(req.body, result.password);
  console.log(isMatch);
  return result;
};

module.exports = {
  register,
  login,
};
