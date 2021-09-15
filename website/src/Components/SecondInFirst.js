import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/Form.css";
import "../Styles/style.css";

import axios from 'axios'

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const [jenis_penjual_properti, setJenis_penjual_properti] = useState("")
  const [nama_penjual_properti, setNama_penjual_properti] = useState("")
  const [nilai_spr_properti, setNilai_spr_properti] = useState("")
  const [no_telepon_penjual_properti, setNo_telepon_penjual_properti] = useState("")
  const [uang_muka_properti, setUang_muka_properti] = useState("")
  const [nama_proyek, setNama_proyek] = useState("")
  const [kondisi_bangunan, setKondisi_bangunan] = useState("")
  const [alamat_properti, setAlamat_properti] = useState("")
  const [rt, setRt] = useState("")
  const [rw, setRw] = useState("")
  const [provinsi_properti, setProvinsi_properti] = useState("")
  const [kab_kota_properti, setKab_kota_properti] = useState("")
  const [kecamatan_properti, setKecamatan_properti] = useState("")
  const [kelurahan_properti, setKelurahan_properti] = useState("")
  const [kode_pos_properti, setKode_pos_properti] = useState("")

  const postDataForm = () => {

    let getIdUser = 13 // Dhea

    axios({
      url: "http://localhost:4000/api/data_pengajuan/add_form_data_pengajuan_properti/" + getIdUser,
      method: "POST",
      data: {
        jenis_penjual_properti,
        nama_penjual_properti,
        nilai_spr_properti,
        no_telepon_penjual_properti,
        uang_muka_properti,
        nama_proyek,
        kondisi_bangunan,
        alamat_properti,
        rt,
        rw,
        provinsi_properti,
        kab_kota_properti,
        kecamatan_properti,
        kelurahan_properti,
        kode_pos_properti
      }
    })
      .then((response) => {
        console.log(response);
        setStep(1)
      })
      .catch((err) => {
      })
  }

  return (
    <>
      <div className="stepContainer">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pengajuan</h2>
          <hr className="divider" />
          <h3 className="titleTwo">Pembiayaan Properti</h3>

          <label className="basicLabel">Jenis Penjual</label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Penjual"
            onChange={(e) => setJenis_penjual_properti(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Jenis Penjual
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <label className="basicLabel">Nama Penjual</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Penjual"
            onChange={(e) => setNama_penjual_properti(e.target.value)}
          ></input>

          <label className="basicLabel">
            Harga Penawaran Penjual atau Nilai SPR{" "}
          </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setNilai_spr_properti(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Nomor Telepon Penjual </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="82123456789"
              onChange={(e) => setNo_telepon_penjual_properti(e.target.value)}
            />
            <label className="iconLeft">+62</label>
          </div>

          <label className="basicLabel">Uang Muka </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setUang_muka_properti(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Nama Proyek</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Proyek"
            onChange={(e) => setNama_proyek(e.target.value)}
          ></input>

          <label className="basicLabel">Kondisi Bangunan</label>
          <select className="dropdownSelect"
            onChange={(e) => setKondisi_bangunan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Kondisi Bangunan
            </option>
            <option>Siap Huni (Ready Stock)</option>
            <option>Dalam Proses Pembuatan (Indent)</option>
          </select>

          <label className="basicLabel">Alamat Properti</label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Properti"
            onChange={(e) => setAlamat_properti(e.target.value)}
          ></input>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="halfQuarter">
                <label className="basicLabel">RT</label>
                <input className="basicInput" placeholder="001"
                  onChange={(e) => setRt(e.target.value)}
                ></input>
              </div>

              <div className="halfQuarter">
                <label className="basicLabel">RW</label>
                <input className="basicInput" placeholder="001"
                  onChange={(e) => setRw(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kelurahan</label>
                <select className="dropdownSelectHalf"
                  onChange={(e) => setKelurahan_properti(e.target.value)}
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
                <select className="dropdownSelectHalf"
                  onChange={(e) => setKecamatan_properti(e.target.value)}
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
                <select className="dropdownSelectHalf"
                  onChange={(e) => setKab_kota_properti(e.target.value)}
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
                <select className="dropdownSelectHalf"
                  onChange={(e) => setProvinsi_properti(e.target.value)}
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
                <select className="dropdownSelectHalf"
                  onChange={(e) => setKode_pos_properti(e.target.value)}
                >
                  <option value="" disabled selected hidden>
                    Pilih Kode Pos
                  </option>
                  <option>Kode Pos 1</option>
                  <option>Kode Pos 2</option>
                  <option>Kode Pos 3</option>
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
              // onClick={() => setStep(1)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
