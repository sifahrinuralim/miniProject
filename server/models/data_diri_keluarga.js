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
    jenis_kelamin: DataTypes.STRING,
    nomor_handphone: DataTypes.BIGINT,
    telepon_rumah: DataTypes.BIGINT,
    alamat_ktp: DataTypes.STRING,
    alamat_domisili: DataTypes.STRING,
    lama_tinggal: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'data_diri_keluarga',
  });
  return data_diri_keluarga;
};