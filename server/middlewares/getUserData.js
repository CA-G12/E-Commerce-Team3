const getUserData = (req, res) => {
  const { id, email, username, avatar } = req.user;
  res.json({ isLogged: true, id, email, username, avatar });
};

module.exports = getUserData;
