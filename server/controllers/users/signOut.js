module.exports = (req, res) => {
  res.clearCookie('token').status(200).json({
    status: 200,
    message: 'success',
  });
};
