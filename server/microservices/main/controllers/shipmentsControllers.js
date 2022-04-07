const { Op } = require("sequelize");
const { Shipment } = require("../models/index");
class Controller {
  static async getShipments(req, res, next) {
    try {
      const { search } = req.query;
      let query = {};
      if (search) {
        query = {
          where: {
            [Op.or]: [{ truckId: search }, { productId: search }],
          },
        };
      }
      const shipments = await Shipment.findAll(query);
      res.status(200).json(shipments);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
