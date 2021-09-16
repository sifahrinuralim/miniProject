'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_diri_pasangan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  data_diri_pasangan.init({
    Id_user: DataTypes.INTEGER,
    id_form_data_diri_keluarga: DataTypes.INTEGER,
    nama_pasangan: DataTypes.STRING,
    tempat_lahir_pasangan: DataTypes.STRING,
    tanggal_lahir_pasangan: DataTypes.DATE,
    nik_pasangan: DataTypes.BIGINT,
    npwp_pasangan: DataTypes.BIGINT,
    pekerjaan_pasangan: DataTypes.STRING,
    no_telepon_pasangan: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'data_diri_pasangan',
  });
  return data_diri_pasangan;
};