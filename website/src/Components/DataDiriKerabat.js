import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataDiriKerabat() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [nama_kerabat, setNama_kerabat] = useState("");
  const [alamat_kerabat, setAlamat_kerabat] = useState("");
  const [rt_kerabat, setRt_kerabat] = useState("");
  const [rw_kerabat, setRw_kerabat] = useState("");
  const [provinsi_kerabat, setProvinsi_kerabat] = useState("");
  const [kab_kota_kerabat, setKab_kota_kerabat] = useState("");
  const [kecamatan_kerabat, setKecamatan_kerabat] = useState("");
  const [kelurahan_kerabat, setKelurahan_kerabat] = useState("");
  const [kode_pos_kerabat, setKode_pos_kerabat] = useState("");
  const [no_telepon_rumah_kerabat, setNo_telepon_rumah_kerabat] = useState("");
  const [no_handphone_kerabat, setNo_handphone_kerabat] = useState("");
  const [hubungan_nasabah_kerabat, setHubungan_nasabah_kerabat] = useState("");

  const postDataForm = () => {
    let getIdUser = 11;

    axios({
      url:
        "http://192.168.100.25:4000/api/data_diri_keluarga/add_data_diri_kerabat/" +
        getIdUser,
      method: "POST",
      data: {
        nama_kerabat,
        alamat_kerabat,
        rt_kerabat,
        rw_kerabat,
        provinsi_kerabat,
        kab_kota_kerabat,
        kecamatan_kerabat,
        kelurahan_kerabat,
        kode_pos_kerabat,
        no_telepon_rumah_kerabat,
        no_handphone_kerabat,
        hubungan_nasabah_kerabat,
      },
    })
      .then((response) => {
        console.log(response);
        setStepDataDiri(4);
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Diri dan Keluarga</h2>

          <hr className="divider" />
          <h3 className="titleTwo">Kerabat Yang Tidak Tinggal Serumah</h3>

          <label className="basicLabel">Nama Kerabat</label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Kerabat"
            onChange={(e) => setNama_kerabat(e.target.value)}
          ></input>

          <label className="basicLabel">Alamat Tinggal Kerabat Saat Ini</label>
          <input
            className="basicInput"
            placeholder="Masukkan Alamat Tinggal Kerabat"
            onChange={(e) => setAlamat_kerabat(e.target.value)}
          ></input>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="halfQuarter">
                <label className="basicLabel">RT</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRt_kerabat(e.target.value)}
                ></input>
              </div>

              <div className="halfQuarter">
                <label className="basicLabel">RW</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRw_kerabat(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kelurahan</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setKelurahan_kerabat(e.target.value)}
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
                  onChange={(e) => setKecamatan_kerabat(e.target.value)}
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
                  onChange={(e) => setKab_kota_kerabat(e.target.value)}
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
                  onChange={(e) => setProvinsi_kerabat(e.target.value)}
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
                  onChange={(e) => setKode_pos_kerabat(e.target.value)}
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

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">
                  Nomor Telepon Rumah (Optional)
                </label>
                <input
                  className="basicInput"
                  type="number"
                  placeholder="Masukkan Nomor Telepon"
                  onChange={(e) => setNo_telepon_rumah_kerabat(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Handphone</label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    min="1"
                    placeholder="81234567890"
                    onChange={(e) => setNo_handphone_kerabat(e.target.value)}
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel">Hubungan Dengan Nasabah</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setHubungan_nasabah_kerabat(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Hubungan Dengan Nasabah
            </option>
            <option value="Orang Tua">Orang Tua</option>
            <option value="Saudara Kandung">Saudara Kandung</option>
            <option value="Anak Kandung">Anak Kandung</option>
            <option value="Lainnya">Lainnya</option>
          </select>

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
                onClick={() => setStepDataDiri(3.1)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(4)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
