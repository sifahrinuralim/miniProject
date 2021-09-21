'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('data_diri_keluargas', {
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
      nama_pemohon: {
        type: Sequelize.STRING
      },
      tempat_lahir_pemohon: {
        type: Sequelize.STRING
      },
      tanggal_lahir_pemohon: {
        type: Sequelize.DATE
      },
      nik_pemohon: {
        type: Sequelize.BIGINT
      },
      npwp_pemohon: {
        type: Sequelize.BIGINT
      },
      nama_ibu_kandung_pemohon: {
        type: Sequelize.STRING
      },
      status_kawin_pemohon: {
        type: Sequelize.STRING
      },
      jumlah_tanggungan_anak: {
        type: Sequelize.INTEGER
      },
      pendidikan_terakhir: {
        type: Sequelize.STRING
      },
      status_tempat_tinggal: {
        type: Sequelize.STRING
      },
      alamat_ktp_domisili: {
        type: Sequelize.STRING
      },
      rt_domisili: {
        type: Sequelize.INTEGER
      },
      rw_domisili: {
        type: Sequelize.INTEGER
      },
      provinsi_domisili: {
        type: Sequelize.STRING
      },
      kab_kota_domisili: {
        type: Sequelize.STRING
      },
      kecamatan_domisili: {
        type: Sequelize.STRING
      },
      kelurahan_domisili: {
        type: Sequelize.STRING
      },
      kode_pos_domisili: {
        type: Sequelize.INTEGER
      },
      jenis_kelamin: {
        type: Sequelize.STRING
      },
      nomor_handphone: {
        type: Sequelize.BIGINT
      },
      telepon_rumah: {
        type: Sequelize.BIGINT
      },
      alamat_ktp: {
        type: Sequelize.STRING
      },
      alamat_domisili: {
        type: Sequelize.STRING
      },
      lama_tinggal: {
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
    await queryInterface.dropTable('data_diri_keluargas');
  }
};