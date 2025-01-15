const service = require('../../service/member/registerService');
const memberValidation = require('../../validation/memberValidation');
const validate = require('../../validation/validate');

const register = async (req, res) => {
  // console.log(req.body);
  validate(memberValidation, req.body);
  const result = service.store();
  res.status(200).send(result);
};

module.exports = {
  register,
};
