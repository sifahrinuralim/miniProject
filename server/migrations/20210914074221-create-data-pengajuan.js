'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_pengajuans', {
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
      skema_pengajuan: {
        type: Sequelize.STRING
      },
      peruntukan_pembiayaan: {
        type: Sequelize.STRING
      },
      program: {
        type: Sequelize.STRING
      },
      objek: {
        type: Sequelize.STRING
      },
      akad: {
        type: Sequelize.STRING
      },
      total_plafond: {
        type: Sequelize.BIGINT
      },
      waktu_pembiayaan: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('data_pengajuans');
  }
};