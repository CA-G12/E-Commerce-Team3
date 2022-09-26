// eslint-disable-next-line no-unused-vars
const handleClientError = (req, res, next) => {
  res.status(404).send('not found ');
};

// eslint-disable-next-line no-unused-vars
const handleServerError = (error, req, res, next) => {
  if (error.status) {
    res.status(error.status).json(error);
  } else {
    res.status(500).json(error);
  }
};

module.exports = { handleClientError, handleServerError };
