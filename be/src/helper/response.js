const responseError = (res, statusCode = 400, message) => {
  return res.status(statusCode).json({
    error: message,
  });
};

const responseSucccess = (res, statusCode = 200, statusMessage, data) => {
  return res.status(statusCode).json({
    status: statusMessage,
    data: data,
  });
};

module.exports = { responseError, responseSucccess };
