import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from 'axios'

export default function FirstStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);

  const [skema_pengajuan, setSkema_pengajuans] = useState("")
  const [peruntukan_pembiayaan, setperuntukan_pembiayaans] = useState("")
  const [program, setPrograms] = useState("")
  const [objek, setObjeks] = useState("")
  const [akad, setAkad] = useState("")
  const [total_plafond, setTotal_plafonds] = useState(0)
  const [waktu_pembiayaan, setWaktu_pembiayaans] = useState(0)

  const buatBalik = (e) => {
    setWaktu_pembiayaans(e.target.value)
    // setUserData({ ...userData, wkt_pembiayaan: e.target.value })
  }

  const postDataForm = () => {
    let getIdUser = 12 // Dhea

    // PR dari mas Romi :D
    const a = {}

    axios({
      url: "http://localhost:4000/api/data_pengajuan/add_form/" + getIdUser,
      method: "POST",
      data: a
    })
      .then((response) => {
        console.log(response);
        setStep(1.1)
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <>
      <div className="stepContainer">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pengajuan</h2>
          <hr className="divider" />
          <h3 className="titleTwo">Fasilitas Pembiayaan</h3>
          <label className="basicLabel" htmlFor="skema">
            Skema Pengajuan
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Penghasilan Tunggal </label>
              <input
                value="Penghasilan Tunggal"
                type="radio"
                name="radio"
                onChange={(e) => setSkema_pengajuans(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Penghasilan Gabungan </label>
              <input
                value="Penghasilan Gabungan"
                type="radio"
                name="radio"
                onChange={(e) => setperuntukan_pembiayaans(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>
          <div></div>
          <label className="basicLabel" for="Pembiayaan">
            Peruntukan Pembiayaan
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Peruntukan Pembiayaan"
            onChange={(e) => setperuntukan_pembiayaans(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Peruntukan Pembiayaan
            </option>
            <option value="Pembelian Properti" >Pembelian Properti</option>
            <option value="Take Over">Take Over</option>
            <option value="Take Over + Top Up">Take Over + Top Up</option>
            <option value="Pembiayaan Konsumsi Beragun Properti">
              Pembiayaan Konsumsi Beragun Properti
            </option>
          </select>

          {/* Program */}
          <label className="basicLabel" for="Program">
            Program
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Program"
            onChange={(e) => setPrograms(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Program
            </option>
            <option > Fix & Fix</option>
            <option>Angsuran Super Ringan</option>
            <option>Special MMQ</option>
          </select>

          {/* Objek */}
          <label className="basicLabel" for="Objek">
            Objek Yang Dibiayai
          </label>
          <select className="dropdownSelect"
            name="Objek"
            onChange={(e) => setObjeks(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Objek Yang Dibiayai
            </option>
            <option>Properti</option>
            <option>Renovasi Pembangunan</option>
            <option>Kendaraan</option>
            <option>Furniture</option>
            <option>Jasa Konsumtif</option>
            <option>Lainnya</option>
          </select>

          <label className="basicLabel" for="Akad">
            Akad Fasilitas Yang Diajukan
          </label>

          <select
            className="dropdownSelect"
            name="Akad"
            onChange={(e) => setAkad(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Akad Fasilitas Yang Diajukan
            </option>
            <option>Murabahah</option>
            <option>MMQ (Musyarakah Mutanaqishah</option>
            <option>Isthisna</option>
            <option>Lainnya</option>
          </select>

          <label className="basicLabel">Total Plafond Yang Diajukan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setTotal_plafonds(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Waktu Pembiayaan</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="number"
              value={userData["wkt_pembiayaan"]}

              onChange={(e) =>
                buatBalik(e)
              }

              placeholder="Masukkan Dalam Bentuk Angka"
            />
            <label className="iconRight">bulan</label>
          </div>

          <div className="firstPageButtonsWrapper">
            <input
              className="transparentButton"
              type="submit"
              value="Simpan Formulir"
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
    </>
  );
}
