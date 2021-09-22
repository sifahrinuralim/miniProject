'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('GEN_UPLOAD_DOKUMENs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserId: {
        type: Sequelize.INTEGER
      },
      id_form_pembiayaan: {
        type: Sequelize.INTEGER
      },
      ktp: {
        type: Sequelize.BLOB
      },
      kartu_keluarga: {
        type: Sequelize.BLOB
      },
      surat_nikah: {
        type: Sequelize.BLOB
      },
      npwp: {
        type: Sequelize.BLOB
      },
      slip_gaji_asli: {
        type: Sequelize.BLOB
      },
      keterangan_kerja: {
        type: Sequelize.BLOB
      },
      mutasi_rekening: {
        type: Sequelize.BLOB
      },
      laporan_keuangan: {
        type: Sequelize.BLOB
      },
      sertifikat_bangunan: {
        type: Sequelize.BLOB
      },
      imb: {
        type: Sequelize.BLOB
      },
      pbb: {
        type: Sequelize.BLOB
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('GEN_UPLOAD_DOKUMENs');
  }
};