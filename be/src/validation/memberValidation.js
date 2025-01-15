const Joi = require('joi');

const memberValidation = Joi.object({
  name: Joi.string().max(100).required(),
  last_name: Joi.string().max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string().max(100).required(),
  password: Joi.string().required(),
  confirm_password: Joi.any().valid(Joi.ref('password')).messages({
    'any.only': 'Password does not match',
  }),
});

module.exports = memberValidation;
