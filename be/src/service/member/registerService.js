const prisma = require('../../config/database');

const store = async (request) => {
  const result = await prisma.members.create({
    data: request,
  });
  console.log(result);
};

module.exports = {
  store,
};
