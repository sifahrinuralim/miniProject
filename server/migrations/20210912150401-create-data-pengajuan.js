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
    await queryInterface.dropTable('data_pengajuans');
  }
};