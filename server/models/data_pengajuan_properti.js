'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_pengajuan_properti extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_pengajuan_properti.init({
    Id_user: DataTypes.INTEGER,
    id_form_pengajuan: DataTypes.INTEGER,
    jenis_penjual_properti: DataTypes.STRING,
    nama_penjual_properti: DataTypes.STRING,
    nilai_spr_properti: DataTypes.BIGINT,
    no_telepon_penjual_properti: DataTypes.BIGINT,
    uang_muka_properti: DataTypes.BIGINT,
    nama_proyek: DataTypes.STRING,
    kondisi_bangunan: DataTypes.STRING,
    alamat_properti: DataTypes.STRING,
    rt: DataTypes.INTEGER,
    rw: DataTypes.INTEGER,
    provinsi_properti: DataTypes.STRING,
    kab_kota_properti: DataTypes.STRING,
    kecamatan_properti: DataTypes.STRING,
    kelurahan_properti: DataTypes.STRING,
    kode_pos_properti: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data_pengajuan_properti',
  });
  return data_pengajuan_properti;
};