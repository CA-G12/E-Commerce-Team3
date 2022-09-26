const createUser = require('./create');
const getUserById = require('./getById');
const getUserByEmail = require('./getByEmail');
const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');

module.exports = {
  createUser,
  getUserByEmail,
  getUserById,
  signup,
  login,
  logout,
};
