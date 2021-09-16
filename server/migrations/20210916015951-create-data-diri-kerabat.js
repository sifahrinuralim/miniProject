'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_diri_kerabats', {
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
      nama_kerabat: {
        type: Sequelize.STRING
      },
      alamat_kerabat: {
        type: Sequelize.STRING
      },
      rt_kerabat: {
        type: Sequelize.INTEGER
      },
      rw_kerabat: {
        type: Sequelize.INTEGER
      },
      provinsi_kerabat: {
        type: Sequelize.STRING
      },
      kab_kota_kerabat: {
        type: Sequelize.STRING
      },
      kecamatan_kerabat: {
        type: Sequelize.STRING
      },
      kelurahan_kerabat: {
        type: Sequelize.STRING
      },
      kode_pos_kerabat: {
        type: Sequelize.INTEGER
      },
      no_telepon_rumah_kerabat: {
        type: Sequelize.BIGINT
      },
      no_handphone_kerabat: {
        type: Sequelize.BIGINT
      },
      hubungan_nasabah_kerabat: {
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
    await queryInterface.dropTable('data_diri_kerabats');
  }
};