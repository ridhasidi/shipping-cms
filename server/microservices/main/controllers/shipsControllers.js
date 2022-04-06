const { Ship } = require("../models/index");

class Controller {
  static async getShips(req, res, next) {
    try {
      const ships = await Ship.findAll();
      res.status(200).json(ships);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
