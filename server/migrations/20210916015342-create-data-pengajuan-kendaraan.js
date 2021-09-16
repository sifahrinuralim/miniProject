'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_pengajuan_kendaraans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_user: {
        type: Sequelize.INTEGER
      },
      id_form_pengajuan: {
        type: Sequelize.INTEGER
      },
      jenis_penjual_kendaraan: {
        type: Sequelize.STRING
      },
      nama_penjual_kendaraan: {
        type: Sequelize.STRING
      },
      nilai_spr_kendaraan: {
        type: Sequelize.BIGINT
      },
      no_telepon_penjual_kendaraan: {
        type: Sequelize.BIGINT
      },
      uang_muka_kendaraan: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('data_pengajuan_kendaraans');
  }
};