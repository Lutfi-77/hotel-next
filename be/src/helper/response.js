const responseError = (message) => {
  return {
    error: message,
  };
};

const responseSucccess = (statusMessage, data) => {
  return {
    status: statusMessage,
    data: data,
  };
};

module.exports = { responseError, responseSucccess };
