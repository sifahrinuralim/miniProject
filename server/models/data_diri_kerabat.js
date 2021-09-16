'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_diri_kerabat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_diri_kerabat.init({
    Id_user: DataTypes.INTEGER,
    id_form_data_diri_keluarga: DataTypes.INTEGER,
    nama_kerabat: DataTypes.STRING,
    alamat_kerabat: DataTypes.STRING,
    rt_kerabat: DataTypes.INTEGER,
    rw_kerabat: DataTypes.INTEGER,
    provinsi_kerabat: DataTypes.STRING,
    kab_kota_kerabat: DataTypes.STRING,
    kecamatan_kerabat: DataTypes.STRING,
    kelurahan_kerabat: DataTypes.STRING,
    kode_pos_kerabat: DataTypes.INTEGER,
    no_telepon_rumah_kerabat: DataTypes.BIGINT,
    no_handphone_kerabat: DataTypes.BIGINT,
    hubungan_nasabah_kerabat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_diri_kerabat',
  });
  return data_diri_kerabat;
};