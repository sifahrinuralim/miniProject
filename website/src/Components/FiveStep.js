import React, { useContext, useState } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import axios from "axios";

<<<<<<< HEAD
export default function FirstStep() {
=======
export default function FiveStep() {
>>>>>>> 6e0ca72047b1b5959310670e12f7400e9c39f559
  const { setStepDataDiri, userData, setPage } = useContext(multiStepContext);

  const [pembiayaan_bank_lain, setPembiayaan_bank_lain] = useState("");
  const [jumlah_pembiayaan, setJumlah_pembiayaan] = useState("");
  const [angsuran, setAngsuran] = useState("");
  const [jatuh_tempo, setJatuh_tempo] = useState("");
  const [jenis_pembiayaan, setJenis_pembiayaan] = useState("");
  const [nama_kreditur, setNama_kreditur] = useState("");

  // const buatBalik = (e) => {
  //   setWaktu_Pembiayaan(e.target.value);
  //   setUserData({ ...userData, wkt_pembiayaan: e.target.value });
  // };

  const postDataForm = () => {
    let getIdUser = 11;

    axios({
      url:
<<<<<<< HEAD
        "http://localhost:4000/api/data_pembiayaan_saat_ini/add_form/" +
=======
        "http://localhost:4000/api/data_pembiayaan/add_form_data_pembiayaan/" +
>>>>>>> 6e0ca72047b1b5959310670e12f7400e9c39f559
        getIdUser,
      method: "POST",
      data: {
        pembiayaan_bank_lain,
        jumlah_pembiayaan,
        angsuran,
        jatuh_tempo,
        jenis_pembiayaan,
        nama_kreditur,
      },
    })
      .then((response) => {
        setPage(2);
      })
      .catch((err) => { });
  };

  return (
    <>
      <div className="stepContainer">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pembiayaan Saat Ini</h2>

          <label className="basicLabel" htmlFor="skema">
            Memiliki Pembiayaan di Bank / Lembaga Keuangan Lain
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Ya </label>
              <input
                value="Ya"
                type="radio"
                name="radio"
                onChange={(e) => setPembiayaan_bank_lain(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Tidak </label>
              <input
                value="Tidak"
                type="radio"
                name="radio"
                onChange={(e) => setPembiayaan_bank_lain(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Jumlah Pembiayaan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setJumlah_pembiayaan(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Angsuran</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setAngsuran(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Jatuh Tempo</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="date"
              placeholder="0"
              onChange={(e) => setJatuh_tempo(e.target.value)}
            />
          </div>

          <label className="basicLabel">Jenis Pembiayaan</label>
          <input
            className="basicInput"
            placeholder="Masukan Jenis Pembiayaan"
            onChange={(e) => setJenis_pembiayaan(e.target.value)}
          ></input>

          <label className="basicLabel">Nama Kreditur</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Kreditur"
            onChange={(e) => setNama_kreditur(e.target.value)}
          ></input>

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
                onClick={() => setStepDataDiri(4)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Submit"
<<<<<<< HEAD
                // onClick={() => postDataForm()}
                onClick={() => setPage(2)}
=======
                onClick={() => postDataForm()}
                // onClick={() => setPage(2)}
>>>>>>> 6e0ca72047b1b5959310670e12f7400e9c39f559
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
