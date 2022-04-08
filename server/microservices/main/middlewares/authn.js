const { convertToken } = require("../helpers/jwt");
const { User } = require("../models");

async function authentification(req, res, next) {
  try {
    const { access_token } = req.headers;
    const payLoad = convertToken(access_token);
    const user = await User.findByPk(payLoad.id);
    if (!user) {
      throw new Error("INVALID_TOKEN");
    }
    req.currentUser = {
      id: user.id,
      name: user.name,
      role: user.role,
    };
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { authentification };
