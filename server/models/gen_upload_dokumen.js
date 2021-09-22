'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GEN_UPLOAD_DOKUMEN extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  GEN_UPLOAD_DOKUMEN.init({
    UserId: DataTypes.INTEGER,
    id_form_pembiayaan: DataTypes.INTEGER,
    ktp: DataTypes.BLOB,
    kartu_keluarga: DataTypes.BLOB,
    surat_nikah: DataTypes.BLOB,
    npwp: DataTypes.BLOB,
    slip_gaji_asli: DataTypes.BLOB,
    keterangan_kerja: DataTypes.BLOB,
    mutasi_rekening: DataTypes.BLOB,
    laporan_keuangan: DataTypes.BLOB,
    sertifikat_bangunan: DataTypes.BLOB,
    imb: DataTypes.BLOB,
    pbb: DataTypes.BLOB
  }, {
    sequelize,
    modelName: 'GEN_UPLOAD_DOKUMEN',
  });
  return GEN_UPLOAD_DOKUMEN;
};