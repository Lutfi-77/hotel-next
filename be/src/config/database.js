require('dotenv').config();
const { PrismaClient } = require('@prisma/client');

let prisma;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();
} else {
  // Use a global variable to store the PrismaClient in non-production environments (like development)
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

module.exports = prisma;
