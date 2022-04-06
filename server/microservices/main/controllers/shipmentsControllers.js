const { Shipment } = require("../models/index");
class Controller {
  static async getShipments(req, res, next) {
    try {
      const shipments = await Shipment.findAll();
      res.status(200).json(shipments);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = Controller;
