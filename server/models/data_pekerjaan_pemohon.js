'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_pekerjaan_pemohon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_pekerjaan_pemohon.init({
    Id_user: DataTypes.INTEGER,
    id_form_pekerjaan: DataTypes.INTEGER,
    jenis_pekerjaan: DataTypes.STRING,
    nama_perusahaan: DataTypes.STRING,
    jabatan: DataTypes.STRING,
    kategori_instansi: DataTypes.STRING,
    lama_bekerja: DataTypes.INTEGER,
    jumlah_karyawan: DataTypes.INTEGER,
    gaji: DataTypes.INTEGER,
    status_pekerjaan: DataTypes.STRING,
    pembayaran_gaji: DataTypes.STRING,
    alamat_perusahaan: DataTypes.STRING,
    bidang_usaha: DataTypes.STRING,
    nomor_kantor: DataTypes.INTEGER,
    nomor_hrd: DataTypes.INTEGER,
    email_hrd: DataTypes.STRING,
    nomor_atasan: DataTypes.INTEGER,
    email_atasan: DataTypes.STRING,
    jenis_pekerjaan_pasangan: DataTypes.STRING,
    nama_perusahaan_pasangan: DataTypes.STRING,
    jabatan_pasangan: DataTypes.STRING,
    kategori_instansi_pasangan: DataTypes.STRING,
    lama_bekerja_pasangan: DataTypes.INTEGER,
    jumlah_karyawan_pasangan: DataTypes.INTEGER,
    gaji_pasangan: DataTypes.INTEGER,
    status_pasangan: DataTypes.STRING,
    pembayaran_gaji_pasangan: DataTypes.STRING,
    alamat_perusahaan_pasangan: DataTypes.STRING,
    bidang_usaha_pasangan: DataTypes.STRING,
    nomor_kantor_pasangan: DataTypes.INTEGER,
    nomor_hrd_pasangan: DataTypes.INTEGER,
    email_hrd_pasangan: DataTypes.STRING,
    nomor_atasan_pasangan: DataTypes.INTEGER,
    email_atasan_pasangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_pekerjaan_pemohon',
  });
  return data_pekerjaan_pemohon;
};