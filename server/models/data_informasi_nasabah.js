'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_informasi_nasabah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_informasi_nasabah.init({
    isNasabah: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'data_informasi_nasabah',
  });
  return data_informasi_nasabah;
};