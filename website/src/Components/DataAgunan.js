import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataPengajuan() {
  const { setStepDataDiri } = useContext(multiStepContext);

  const [jenis_agunan, setJenis_Agunan] = useState("");
  const [luas_tanah, setLuas_Tanah] = useState("");
  const [luas_bangunan, setLuas_Bangunan] = useState("");
  const [kondisi_bangunan, setKondisi_Bangunan] = useState("");
  const [status_kepemilikan, setStatus_Kepemilikan] = useState("");
  const [status_agunan, setStatus_Agunan] = useState("");
  const [nama_sertifikat, setNama_Sertifikat] = useState("");
  const [nomor_sertifikat, setNomor_Sertifikat] = useState("");
  const [masa_berlaku_sertifikat, setMasa_Berlaku_Sertifikat] = useState("");
  const [nomor_spr, setNomor_Spr] = useState("");
  const [alamat_agunan, setAlamat_Agunan] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [provinsi_agunan, setProvinsi_Agunan] = useState("");
  const [kab_kota_agunan, setKab_Kota_Agunan] = useState("");
  const [kecamatan_agunan, setKecamatan_Agunan] = useState("");
  const [kelurahan_agunan, setKelurahan_Agunan] = useState("");
  const [kode_pos_agunan, setKode_Pos_Agunan] = useState("");

  const postDataForm = () => {
    let getIdUser = 11;

    axios({
      url:
        "http://192.168.100.48:4000/api/data_agunan/add_form_data_agunan/" +
        getIdUser,
      method: "POST",
      data: {
        jenis_agunan,
        luas_tanah,
        luas_bangunan,
        kondisi_bangunan,
        status_kepemilikan,
        status_agunan,
        nama_sertifikat,
        nomor_sertifikat,
        masa_berlaku_sertifikat,
        nomor_spr,
        alamat_agunan,
        rt,
        rw,
        provinsi_agunan,
        kab_kota_agunan,
        kecamatan_agunan,
        kelurahan_agunan,
        kode_pos_agunan,
      },
    })
      .then((response) => {
        console.log(response);
        setStepDataDiri(3);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="stepContainer">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Agunan</h2>

          <label className="basicLabel">Jenis Agunan</label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Agunan"
            onChange={(e) => setJenis_Agunan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Jenis Agunan
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <div class="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Luas Tanah</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="number"
                    placeholder="0"
                    onChange={(e) => setLuas_Tanah(e.target.value)}
                  />
                  <label className="iconRight">m2</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Luas Bangunan</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="number"
                    placeholder="0"
                    onChange={(e) => setLuas_Bangunan(e.target.value)}
                  />
                  <label className="iconRight">m2</label>
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel" htmlFor="skema">
            Kondisi Bangunan
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Siap Huni </label>
              <input
                value="Penghasilan Tunggal"
                type="radio"
                name="radio"
                onChange={(e) => setKondisi_Bangunan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Dalam Proses Pembangunan </label>
              <input
                value="Penghasilan Gabungan"
                type="radio"
                name="radio"
                onChange={(e) => setKondisi_Bangunan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Status Kepemilikan</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setStatus_Kepemilikan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Status Kepemilikan
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <label className="basicLabel">Status Agunan</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setStatus_Agunan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Agunan
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <label className="basicLabel">Atas Nama Sertifikat</label>
          <input
            className="basicInput"
            placeholder="Masukan Atas Nama Sertifikat"
            onChange={(e) => setNama_Sertifikat(e.target.value)}
          ></input>

          <div class="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Sertifikat</label>
                <input
                  className="basicInput"
                  type="number"
                  placeholder="0"
                  onChange={(e) => setNomor_Sertifikat(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Berlaku Hingga</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="date"
                    placeholder="0"
                    onChange={(e) => setMasa_Berlaku_Sertifikat(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel">Nomor SPR Developer</label>
          <input
            className="basicInput"
            type="number"
            placeholder="Masukkan Nomor SPR Developer"
            onChange={(e) => setNomor_Spr(e.target.value)}
          ></input>

          <label className="basicLabel">Alamat Agunan</label>
          <input
            className="basicInput"
            placeholder="Masukkan Alamat Agunan"
            onChange={(e) => setAlamat_Agunan(e.target.value)}
          ></input>

          <div class="radioWrapper">
            <div className="halfHalf">
              <div className="halfQuarter">
                <label className="basicLabel">RT</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRt(e.target.value)}
                ></input>
              </div>

              <div className="halfQuarter">
                <label className="basicLabel">RW</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRw(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kelurahan</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setKelurahan_Agunan(e.target.value)}
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

          <div class="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kecamatan</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setKecamatan_Agunan(e.target.value)}
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
                  onChange={(e) => setKab_Kota_Agunan(e.target.value)}
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

          <div class="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Provinsi</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setProvinsi_Agunan(e.target.value)}
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
                  onChange={(e) => setKode_Pos_Agunan(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih Kode Pos
                  </option>
                  <option>11111</option>
                  <option>22222</option>
                  <option>33333</option>
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
                onClick={() => setStepDataDiri(1)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(3)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
