const validate = (schema, request) => {
  const validation = schema.validate(request, { abortEarly: false });
  if (validation.error) {
    console.log(validation.error.message);
  }
};

module.exports = validate;
