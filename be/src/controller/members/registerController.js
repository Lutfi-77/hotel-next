const { responseError, responseSucccess } = require('../../helper/response');
const service = require('../../service/member/registerService');
const memberValidation = require('../../validation/memberValidation');
const validate = require('../../validation/validate');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  // validate the request
  const validation = validate(memberValidation, req.body);
  if (validation.error) {
    return res.status(400).json(validation);
  }

  const { confirm_password, ...data } = req.body;
  data.password = await bcrypt.hash(data.password, 10); //hash the password

  const result = await service.store(data);
  if (result.error) {
    return responseError(res, 400, result.error);
  }
  return responseSucccess(res, 200, 'success', result);
};

module.exports = {
  register,
};
