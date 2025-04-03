const bcrypt = require('bcrypt');

const hashPassword = async (rawData) => {
  const { confirm_password, ...data } = rawData; //Remove the confirm_password from data
  //   rawData.password = await bcrypt.hash(data.password, 10);
  data.password = await bcrypt.hash(data.password, 10); //Hash the password
  return data;
};

const comparePassword = async ({ password }, hash) => {
  return await bcrypt.compare(password, hash);
};

module.exports = { hashPassword, comparePassword };
