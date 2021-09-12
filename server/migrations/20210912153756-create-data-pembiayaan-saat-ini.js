'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_pembiayaan_saat_inis', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_user: {
        type: Sequelize.INTEGER
      },
      id_form_pembiayaan: {
        type: Sequelize.INTEGER
      },
      pembiayaan_bank_lain: {
        type: Sequelize.STRING
      },
      jumlah_pembiayaan: {
        type: Sequelize.INTEGER
      },
      angsuran: {
        type: Sequelize.INTEGER
      },
      jatuh_tempo: {
        type: Sequelize.INTEGER
      },
      jenis_pembiayaan: {
        type: Sequelize.STRING
      },
      nama_kreditur: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('data_pembiayaan_saat_inis');
  }
};