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
      alamat_ktp_saat_ini: {
        type: Sequelize.STRING
      },
      rt_saat_ini: {
        type: Sequelize.INTEGER
      },
      rw_saat_ini: {
        type: Sequelize.INTEGER
      },
      provinsi_saat_ini: {
        type: Sequelize.STRING
      },
      kab_kota_saat_ini: {
        type: Sequelize.STRING
      },
      kecamatan_saat_ini: {
        type: Sequelize.STRING
      },
      kelurahan_saat_ini: {
        type: Sequelize.STRING
      },
      kode_pos_saat_ini: {
        type: Sequelize.INTEGER
      },
      lama_tinggal: {
        type: Sequelize.INTEGER
      },
      alamat_surat: {
        type: Sequelize.STRING
      },
      nomor_handphone_1: {
        type: Sequelize.BIGINT
      },
      nomor_handphone_2: {
        type: Sequelize.BIGINT
      },
      nomor_rumah: {
        type: Sequelize.BIGINT
      },
      email: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('data_diri_keluargas');
  }
};