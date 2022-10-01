const getUserData = (req, res) => {
  const { id, email, username } = req.user;
  res.json({ isLogged: true, id, email, username });
};

module.exports = getUserData;
