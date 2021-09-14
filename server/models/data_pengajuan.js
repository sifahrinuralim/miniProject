'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_pengajuan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_pengajuan.init({
    Id_user: DataTypes.INTEGER,
    id_form_pengajuan: DataTypes.INTEGER,
    skema_pengajuan: DataTypes.STRING,
    peruntukan_pembiayaan: DataTypes.STRING,
    program: DataTypes.STRING,
    objek: DataTypes.STRING,
    akad: DataTypes.STRING,
    total_plafond: DataTypes.BIGINT,
    waktu_pembiayaan: DataTypes.INTEGER,
    jenis_penjual_kendaraan: DataTypes.STRING,
    nama_penjual_kendaraan: DataTypes.STRING,
    nilai_spr_kendaraan: DataTypes.BIGINT,
    no_telepon_penjual_kendaraan: DataTypes.BIGINT,
    uang_muka_kendaraan: DataTypes.BIGINT,
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
    kode_pos_properti: DataTypes.INTEGER,
    jenis_bank_asal: DataTypes.STRING,
    nama_bank: DataTypes.STRING,
    peruntukan_fasilitas_sebelumnya: DataTypes.STRING,
    akad_fasilitas_sebelumnya: DataTypes.STRING,
    nilai_pelunasan_take_over: DataTypes.BIGINT,
    plafond_top_up: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'data_pengajuan',
  });
  return data_pengajuan;
};