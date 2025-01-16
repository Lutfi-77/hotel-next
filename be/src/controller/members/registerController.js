const service = require('../../service/member/registerService');
const memberValidation = require('../../validation/memberValidation');
const validate = require('../../validation/validate');

const register = async (req, res) => {
  const validation = validate(memberValidation, req.body);
  if (validation.error) {
    res.status(400).json(validation);
  }
  const { confirm_password, ...data } = req.body;
  const result = service.store(data);
};

module.exports = {
  register,
};
