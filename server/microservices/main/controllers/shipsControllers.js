const { Op } = require("sequelize");
const { Ship } = require("../models/index");

class Controller {
  static async getShips(req, res, next) {
    try {
      const { search } = req.query;
      let query = {};
      if (search) {
        query = {
          where: {
            [Op.or]: [
              {
                ship: { [Op.iLike]: "%" + search + "%" },
              },
              { direction: { [Op.iLike]: "%" + search + "%" } },
            ],
          },
        };
      }
      const ships = await Ship.findAll(query);
      res.status(200).json(ships);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
