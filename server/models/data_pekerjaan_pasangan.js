'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_pekerjaan_pasangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_pekerjaan_pasangan.init({
    Id_user: DataTypes.INTEGER,
    id_form_pekerjaan: DataTypes.INTEGER,
    jenis_pekerjaan_pasangan: DataTypes.STRING,
    nama_perusahaan_pasangan: DataTypes.STRING,
    jabatan_pasangan: DataTypes.STRING,
    kategori_instansi_pasangan: DataTypes.STRING,
    lama_bekerja_pasangan: DataTypes.INTEGER,
    jumlah_karyawan_pasangan: DataTypes.INTEGER,
    pendapatan_pasangan: DataTypes.BIGINT,
    status_pasangan: DataTypes.STRING,
    pembayaran_gaji_pasangan: DataTypes.STRING,
    alamat_perusahaan_pasangan: DataTypes.STRING,
    bidang_usaha_pasangan: DataTypes.STRING,
    nomor_kantor_pasangan: DataTypes.BIGINT,
    nomor_hrd_pasangan: DataTypes.BIGINT,
    email_hrd_pasangan: DataTypes.STRING,
    nomor_atasan_pasangan: DataTypes.BIGINT,
    email_atasan_pasangan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_pekerjaan_pasangan',
  });
  return data_pekerjaan_pasangan;
};