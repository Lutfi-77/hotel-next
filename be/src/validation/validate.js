const { ResponseError, responseError } = require('../helper/response');

const validate = (schema, request) => {
  const validation = schema.validate(request, { abortEarly: false });
  if (validation.error) {
    return responseError(validation.error.message);
  } else {
    return validation.value;
  }
};

module.exports = validate;
