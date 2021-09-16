'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_pengajuan_take_over extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_pengajuan_take_over.init({
    Id_user: DataTypes.INTEGER,
    id_form_pengajuan: DataTypes.INTEGER,
    jenis_bank_asal: DataTypes.STRING,
    nama_bank: DataTypes.STRING,
    peruntukan_fasilitas_sebelumnya: DataTypes.STRING,
    akad_fasilitas_sebelumnya: DataTypes.STRING,
    nilai_pelunasan_take_over: DataTypes.BIGINT,
    plafond_top_up: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'data_pengajuan_take_over',
  });
  return data_pengajuan_take_over;
};