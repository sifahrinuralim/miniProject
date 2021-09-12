'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_pekerjaan_pemohons', {
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
      jenis_pekerjaan: {
        type: Sequelize.STRING
      },
      nama_perusahaan: {
        type: Sequelize.STRING
      },
      jabatan: {
        type: Sequelize.STRING
      },
      kategori_instansi: {
        type: Sequelize.STRING
      },
      lama_bekerja: {
        type: Sequelize.INTEGER
      },
      jumlah_karyawan: {
        type: Sequelize.INTEGER
      },
      gaji: {
        type: Sequelize.INTEGER
      },
      status_pekerjaan: {
        type: Sequelize.STRING
      },
      pembayaran_gaji: {
        type: Sequelize.STRING
      },
      alamat_perusahaan: {
        type: Sequelize.STRING
      },
      bidang_usaha: {
        type: Sequelize.STRING
      },
      nomor_kantor: {
        type: Sequelize.INTEGER
      },
      nomor_hrd: {
        type: Sequelize.INTEGER
      },
      email_hrd: {
        type: Sequelize.STRING
      },
      nomor_atasan: {
        type: Sequelize.INTEGER
      },
      email_atasan: {
        type: Sequelize.STRING
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
      gaji_pasangan: {
        type: Sequelize.INTEGER
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
        type: Sequelize.INTEGER
      },
      nomor_hrd_pasangan: {
        type: Sequelize.INTEGER
      },
      email_hrd_pasangan: {
        type: Sequelize.STRING
      },
      nomor_atasan_pasangan: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('data_pekerjaan_pemohons');
  }
};