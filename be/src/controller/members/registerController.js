const service = require("../../service/member/registerService");

const register = async (req, res) => {
  const result = service.store();
  res.status(200).send(result);
};

module.exports = {
  register,
};
