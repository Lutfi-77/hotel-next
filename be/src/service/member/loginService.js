const prisma = require('../../config/database');

const loginMember = async ({ email, password }) => {
  const user = await prisma.members.findFirst({
    where: {
      email: email,
      //   password: password,
    },
  });
  return user;
};

module.exports = { loginMember };
