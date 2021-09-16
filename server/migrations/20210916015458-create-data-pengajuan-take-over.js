'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_pengajuan_take_overs', {
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
      jenis_bank_asal: {
        type: Sequelize.STRING
      },
      nama_bank: {
        type: Sequelize.STRING
      },
      peruntukan_fasilitas_sebelumnya: {
        type: Sequelize.STRING
      },
      akad_fasilitas_sebelumnya: {
        type: Sequelize.STRING
      },
      nilai_pelunasan_take_over: {
        type: Sequelize.BIGINT
      },
      plafond_top_up: {
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
    await queryInterface.dropTable('data_pengajuan_take_overs');
  }
};