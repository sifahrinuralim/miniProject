'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_pembiayaan_saat_ini extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_pembiayaan_saat_ini.init({
    Id_user: DataTypes.INTEGER,
    id_form_pembiayaan: DataTypes.INTEGER,
    pembiayaan_bank_lain: DataTypes.STRING,
    jumlah_pembiayaan: DataTypes.BIGINT,
    angsuran: DataTypes.BIGINT,
    jatuh_tempo: DataTypes.INTEGER,
    jenis_pembiayaan: DataTypes.STRING,
    nama_kreditur: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_pembiayaan_saat_ini',
  });
  return data_pembiayaan_saat_ini;
};