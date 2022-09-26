// eslint-disable-next-line no-unused-vars
const handleClientError = (req, res, next) => {
  res.status(404).send('not found ');
};

// eslint-disable-next-line no-unused-vars
const handleServerError = (error, req, res, next) => {
  if (error.status) {
    // console.log(error.status);
    res.status(error.status).json({ msg: error.msg, status: error.status });
  } else {
    res.status(500).json({ msg: error.msg, status: error.status });
  }
};

module.exports = { handleClientError, handleServerError };
