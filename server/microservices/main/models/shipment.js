'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shipment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Shipment.init({
    shipmentId: DataTypes.INTEGER,
    shipmentDate: DataTypes.STRING,
    truckId: DataTypes.STRING,
    truckType: DataTypes.STRING,
    productId: DataTypes.STRING,
    productType: DataTypes.STRING,
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Shipment',
  });
  return Shipment;
};