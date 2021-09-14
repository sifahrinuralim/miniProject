'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_diri_keluarga extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_diri_keluarga.init({
    Id_user: DataTypes.INTEGER,
    id_form_data_diri_keluarga: DataTypes.INTEGER,
    nama_pemohon: DataTypes.STRING,
    tempat_lahir_pemohon: DataTypes.STRING,
    tanggal_lahir_pemohon: DataTypes.DATE,
    nik_pemohon: DataTypes.BIGINT,
    npwp_pemohon: DataTypes.BIGINT,
    nama_ibu_kandung_pemohon: DataTypes.STRING,
    status_kawin_pemohon: DataTypes.STRING,
    jumlah_tanggungan_anak: DataTypes.INTEGER,
    pendidikan_terakhir: DataTypes.STRING,
    status_tempat_tinggal: DataTypes.STRING,
    alamat_ktp_domisili: DataTypes.STRING,
    rt_domisili: DataTypes.INTEGER,
    rw_domisili: DataTypes.INTEGER,
    provinsi_domisili: DataTypes.STRING,
    kab_kota_domisili: DataTypes.STRING,
    kecamatan_domisili: DataTypes.STRING,
    kelurahan_domisili: DataTypes.STRING,
    kode_pos_domisili: DataTypes.INTEGER,
    alamat_ktp_saat_ini: DataTypes.STRING,
    rt_saat_ini: DataTypes.INTEGER,
    rw_saat_ini: DataTypes.INTEGER,
    provinsi_saat_ini: DataTypes.STRING,
    kab_kota_saat_ini: DataTypes.STRING,
    kecamatan_saat_ini: DataTypes.STRING,
    kelurahan_saat_ini: DataTypes.STRING,
    kode_pos_saat_ini: DataTypes.INTEGER,
    lama_tinggal: DataTypes.INTEGER,
    alamat_surat: DataTypes.STRING,
    nomor_handphone_1: DataTypes.BIGINT,
    nomor_handphone_2: DataTypes.BIGINT,
    nomor_rumah: DataTypes.BIGINT,
    email: DataTypes.STRING,
    nama_pasangan: DataTypes.STRING,
    tempat_lahir_pasangan: DataTypes.STRING,
    tanggal_lahir_pasangan: DataTypes.DATE,
    nik_pasangan: DataTypes.BIGINT,
    npwp_pasangan: DataTypes.BIGINT,
    pekerjaan_pasangan: DataTypes.STRING,
    no_telepon_pasangan: DataTypes.BIGINT,
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
    modelName: 'data_diri_keluarga',
  });
  return data_diri_keluarga;
};