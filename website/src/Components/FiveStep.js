import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/style.css";
import "../Styles/Step.css";

export default function FirstStep() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
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
              <input value="Ya" type="radio" name="radio"></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Tidak </label>
              <input value="Tidak" type="radio" name="radio"></input>
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
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Jatuh Tempo</label>
          <div className="inputWithIconRightWrapper">
            <input className="inputWithIconRight" type="date" placeholder="0" />
          </div>

          <label className="basicLabel">Jenis Pembiayaan</label>
          <input
            className="basicInput"
            placeholder="Masukan Jenis Pembiayaan"
          ></input>

          <label className="basicLabel">Nama Kreditur</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Kreditur"
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
                onClick={() => setStep(4)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
