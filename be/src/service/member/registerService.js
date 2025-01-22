const prisma = require('../../config/database');

const store = async (request) => {
  // check if email already exists
  const existingUser = await prisma.members.findUnique({
    where: {
      email: request.email,
    },
  });

  if (existingUser) {
    return { error: 'Email already in use.' };
  }

  // store data if email not exist
  try {
    const result = await prisma.members.create({
      data: request,
    });

    return result;
  } catch (err) {
    return { error: 'something went wrong' };
  }
};

module.exports = {
  store,
};
