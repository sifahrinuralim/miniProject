import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataDirinKel() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [nama_pemohon, setNama_Pemohon] = useState("");
  const [tempat_lahir_pemohon, setTempat_Lahir_Pemohon] = useState("");
  const [tanggal_lahir_pemohon, setTanggal_Lahir_Pemohon] = useState("");
  const [nik_pemohon, setNik_Pemohon] = useState("");
  const [npwp_pemohon, setNpwp_Pemohon] = useState("");
  const [nama_ibu_kandung_pemohon, setNama_Ibu_Kandung_Pemohon] = useState("");
  const [status_kawin_pemohon, setStatus_Kawin_Pemohon] = useState("");
  const [jumlah_tanggungan_anak, setJumlah_Tanggungan_Anak] = useState("");
  const [pendidikan_terakhir, setPendidikan_Terakhir] = useState("");
  const [status_tempat_tinggal, setStatus_Tempat_Tinggal] = useState("");
  const [alamat_ktp_domisili, setAlamat_Ktp_Domisili] = useState("");
  const [rt_domisili, setRt_Domisili] = useState("");
  const [rw_domisili, setRw_Domisili] = useState("");
  const [provinsi_domisili, setProvinsi_Domisili] = useState("");
  const [kab_kota_domisili, setKab_Kota_Domisili] = useState("");
  const [kecamatan_domisili, setKecamatan_Domisili] = useState("");
  const [kelurahan_domisili, setKelurahan_Domisili] = useState("");
  const [kode_pos_domisili, setKode_Pos_Domisili] = useState("");

  const postDataForm = () => {
    let getIdUser = 11;

    axios({
      url:
        "http://192.168.1.130:4000/api/data_diri_keluarga/add_data_diri_pemohon/" +
        getIdUser,
      method: "POST",
      data: {
        nama_pemohon,
        tempat_lahir_pemohon,
        tanggal_lahir_pemohon,
        nik_pemohon,
        npwp_pemohon,
        nama_ibu_kandung_pemohon,
        status_kawin_pemohon,
        jumlah_tanggungan_anak,
        pendidikan_terakhir,
        status_tempat_tinggal,
        alamat_ktp_domisili,
        rt_domisili,
        rw_domisili,
        provinsi_domisili,
        kab_kota_domisili,
        kecamatan_domisili,
        kelurahan_domisili,
        kode_pos_domisili,
      },
    })
      .then((response) => {
        const status_kawin = status_kawin_pemohon;

        if (status_kawin === "Menikah") {
          setStepDataDiri(3.1);
        } else {
          setStepDataDiri(3.2);
        }
      })
      .catch((err) => { });
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Diri dan Keluarga</h2>

          <hr className="divider" />
          <h3 className="titleTwo">Data Diri Pemohon</h3>

          <label className="basicLabel">
            Nama Lengkap Tanpa Singkatan dan Tanpa Gelar
          </label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
            onChange={(e) => setNama_Pemohon(e.target.value)}
          ></input>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Tempat Lahir</label>
                <input
                  className="basicInput"
                  type="text"
                  placeholder="Masukkan Tempat Lahir"
                  onChange={(e) => setTempat_Lahir_Pemohon(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Tanggal Lahir</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="date"
                    placeholder="0"
                    onChange={(e) => setTanggal_Lahir_Pemohon(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor KTP</label>
                <input
                  className="basicInput"
                  type="number"
                  placeholder="Masukkan Nomor KTP"
                  onChange={(e) => setNik_Pemohon(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor NPWP</label>
                <input
                  className="basicInput"
                  type="text"
                  placeholder="Masukkan Nomor NPWP"
                  onChange={(e) => setNpwp_Pemohon(e.target.value)}
                />
              </div>
            </div>
          </div>

          <label className="basicLabel" htmlFor="skema">
            Status Perkawinan
          </label>
          <div className="radioWrapper">
            <label className="radioContainerThird">
              <label className="radioLabel"> Belum Menikah </label>
              <input
                value="Belum Menikah"
                type="radio"
                name="radio"
                value="Belum Menikah"
                onChange={(e) => setStatus_Kawin_Pemohon(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainerThird">
              <label className="radioLabel"> Menikah </label>
              <input
                value="Menikah"
                type="radio"
                name="radio"
                value="Menikah"
                onChange={(e) => setStatus_Kawin_Pemohon(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainerThird">
              <label className="radioLabel"> Cerai </label>
              <input
                value="Cerai"
                type="radio"
                name="radio"
                value="Cerai"
                onChange={(e) => setStatus_Kawin_Pemohon(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Nama Gadis Ibu Kandung</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Gadis Ibu Kandung"
            onChange={(e) => setNama_Ibu_Kandung_Pemohon(e.target.value)}
          ></input>

          <label className="basicLabel">Jumlah Tanggungan Anak</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="number"
              placeholder="Masukkan Jumlah Tanggungan Anak"
              onChange={(e) => setJumlah_Tanggungan_Anak(e.target.value)}
            />
            <label className="iconRight">bulan</label>
          </div>

          <label className="basicLabel">Pendidikan Terakhir</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setPendidikan_Terakhir(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Pendidikan Terakhir
            </option>
            <option value="Strata 3 (S3)">Strata 3 (S3)</option>
            <option value="Strata 2 (S2)">Strata 2 (S2)</option>
            <option value="Strata 1 (S1) / Diploma 4 (D4)">
              Strata 1 (S1) / Diploma 4 (D4)
            </option>
            <option value="Diploma 3 (D3)">Diploma 3 (D3)</option>
            <option value="Diploma 2 (D2)">Diploma 2 (D2)</option>
            <option value="Diploma 1 (D1)">Diploma 1 (D1)</option>
            <option value="Sekolah Menengah Atas">Sekolah Menengah Atas</option>
          </select>

          <label className="basicLabel">Status Tempat Tinggal</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setStatus_Tempat_Tinggal(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Status Tempat Tinggal
            </option>
            <option value="Milik Sendiri">Milik Sendiri</option>
            <option value="Keluarga">Keluarga</option>
            <option value="Kontrak/Kost">Kontrak/Kost</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <label className="basicLabel">Alamat Sesuai KTP</label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Sesuai KTP"
            onChange={(e) => setAlamat_Ktp_Domisili(e.target.value)}
          ></input>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="halfQuarter">
                <label className="basicLabel">RT</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRt_Domisili(e.target.value)}
                ></input>
              </div>

              <div className="halfQuarter">
                <label className="basicLabel">RW</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRw_Domisili(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kelurahan</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setKelurahan_Domisili(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih Kelurahan
                  </option>
                  <option>Kelurahan 1</option>
                  <option>Kelurahan 2</option>
                  <option>Kelurahan 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kecamatan</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setKecamatan_Domisili(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih Kecamatan
                  </option>
                  <option>Kecamatan 1</option>
                  <option>Kecamatan 2</option>
                  <option>Kecamatan 3</option>
                </select>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kota/Kabupaten</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setKab_Kota_Domisili(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih Kota/Kabupaten
                  </option>
                  <option>Kota/Kabupaten 1</option>
                  <option>Kota/Kabupaten 2</option>
                  <option>Kota/Kabupaten 3</option>
                </select>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Provinsi</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setProvinsi_Domisili(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih Provinsi
                  </option>
                  <option>Provinsi 1</option>
                  <option>Provinsi 2</option>
                  <option>Provinsi 3</option>
                </select>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kode Pos</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setKode_Pos_Domisili(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih Kode Pos
                  </option>
                  <option>1111</option>
                  <option>2222</option>
                  <option>3333</option>
                </select>
              </div>
            </div>
          </div>

          <div className="firstPageButtonsWrapper">
            <div className="">
              <input
                className="transparentButton"
                type="submit"
                value="Simpan Formulir"
              ></input>
            </div>
            <div className="sliceForSecondPageButton">
              <input
                className="secondaryButton"
                type="submit"
                value="Kembali"
                onClick={() => setStepDataDiri(2)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(3.1)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
