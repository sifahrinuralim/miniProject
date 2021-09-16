'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_pekerjaan_pasangans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Id_user: {
        type: Sequelize.INTEGER
      },
      id_form_pekerjaan: {
        type: Sequelize.INTEGER
      },
      jenis_pekerjaan_pasangan: {
        type: Sequelize.STRING
      },
      nama_perusahaan_pasangan: {
        type: Sequelize.STRING
      },
      jabatan_pasangan: {
        type: Sequelize.STRING
      },
      kategori_instansi_pasangan: {
        type: Sequelize.STRING
      },
      lama_bekerja_pasangan: {
        type: Sequelize.INTEGER
      },
      jumlah_karyawan_pasangan: {
        type: Sequelize.INTEGER
      },
      pendapatan_pasangan: {
        type: Sequelize.BIGINT
      },
      status_pasangan: {
        type: Sequelize.STRING
      },
      pembayaran_gaji_pasangan: {
        type: Sequelize.STRING
      },
      alamat_perusahaan_pasangan: {
        type: Sequelize.STRING
      },
      bidang_usaha_pasangan: {
        type: Sequelize.STRING
      },
      nomor_kantor_pasangan: {
        type: Sequelize.BIGINT
      },
      nomor_hrd_pasangan: {
        type: Sequelize.BIGINT
      },
      email_hrd_pasangan: {
        type: Sequelize.STRING
      },
      nomor_atasan_pasangan: {
        type: Sequelize.BIGINT
      },
      email_atasan_pasangan: {
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
    await queryInterface.dropTable('data_pekerjaan_pasangans');
  }
};