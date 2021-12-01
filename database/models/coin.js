'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Coin.init({
    name: DataTypes.STRING,
    symbol: DataTypes.STRING,
    image: DataTypes.STRING,
    current_price: DataTypes.DOUBLE,
    price_change_percentage_24h: DataTypes.DOUBLE,
    total_volume: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'Coin',
  });
  return Coin;
};