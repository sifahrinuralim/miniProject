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
      // data_pengajuan.hasOne(models.data_user, {foreignKey:'Id_user'})
      // data_pengajuan.hasOne(models.data_user, {foreignKey: 'Id_user'});
      data_pengajuan.belongsTo(models.data_user, {foreignKey: 'Id_user'});
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
    waktu_pembiayaan: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'data_pengajuan',
  });
  return data_pengajuan;
};