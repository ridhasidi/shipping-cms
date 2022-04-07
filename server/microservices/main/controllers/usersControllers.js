const { comparePassword } = require("../helpers/bcrypt");
const { User } = require("../models/index");

class Controller {
  static async register(req, res, next) {
    try {
      const { name, email, password } = req.body;
      await User.create({
        name,
        email,
        password,
        role: "administrator",
      });
      res.status(201).json({
        message: `New account has been created`,
      });
    } catch (error) {
      next(error);
    }
  }

  static async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        throw new Error("INVALID_USER_OR_PASSWORD");
      }
      if (!comparePassword(password, user.password)) {
        throw new Error("INVALID_USER_OR_PASSWORD");
      }
      const payload = {
        id: user.id,
        name: user.name,
        role: user.role,
      };
      res.status(200).json(payload);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
