'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_pengajuan_propertis', {
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
      jenis_penjual_properti: {
        type: Sequelize.STRING
      },
      nama_penjual_properti: {
        type: Sequelize.STRING
      },
      nilai_spr_properti: {
        type: Sequelize.BIGINT
      },
      no_telepon_penjual_properti: {
        type: Sequelize.BIGINT
      },
      uang_muka_properti: {
        type: Sequelize.BIGINT
      },
      nama_proyek: {
        type: Sequelize.STRING
      },
      kondisi_bangunan: {
        type: Sequelize.STRING
      },
      alamat_properti: {
        type: Sequelize.STRING
      },
      rt: {
        type: Sequelize.INTEGER
      },
      rw: {
        type: Sequelize.INTEGER
      },
      provinsi_properti: {
        type: Sequelize.STRING
      },
      kab_kota_properti: {
        type: Sequelize.STRING
      },
      kecamatan_properti: {
        type: Sequelize.STRING
      },
      kelurahan_properti: {
        type: Sequelize.STRING
      },
      kode_pos_properti: {
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
    await queryInterface.dropTable('data_pengajuan_propertis');
  }
};