'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_diri_pasangans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_user: {
        type: Sequelize.INTEGER
      },
      id_form_data_diri_keluarga: {
        type: Sequelize.INTEGER
      },
      nama_pasangan: {
        type: Sequelize.STRING
      },
      tempat_lahir_pasangan: {
        type: Sequelize.STRING
      },
      tanggal_lahir_pasangan: {
        type: Sequelize.DATE
      },
      nik_pasangan: {
        type: Sequelize.BIGINT
      },
      npwp_pasangan: {
        type: Sequelize.BIGINT
      },
      pekerjaan_pasangan: {
        type: Sequelize.STRING
      },
      no_telepon_pasangan: {
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
    await queryInterface.dropTable('data_diri_pasangans');
  }
};