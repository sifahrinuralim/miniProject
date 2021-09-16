'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_pengajuan_kendaraan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_pengajuan_kendaraan.init({
    Id_user: DataTypes.INTEGER,
    id_form_pengajuan: DataTypes.INTEGER,
    jenis_penjual_kendaraan: DataTypes.STRING,
    nama_penjual_kendaraan: DataTypes.STRING,
    nilai_spr_kendaraan: DataTypes.BIGINT,
    no_telepon_penjual_kendaraan: DataTypes.BIGINT,
    uang_muka_kendaraan: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'data_pengajuan_kendaraan',
  });
  return data_pengajuan_kendaraan;
};