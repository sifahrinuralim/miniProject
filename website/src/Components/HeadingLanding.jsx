import React from "react";
import "../Styles/HeadingLanding.css";
import Daftar from "./Daftar";

function HeadingLanding(props) {
  const { openModal } = props
  const { openModalMasuk } = props


  const register = () => {
    openModal(true)
  }

  const login = () => {
    openModalMasuk(true)
  }

  return (
    <div>
      <header id="header">
        <img className="logo" src="./assets/BMI.png" />
        <nav id="navigasi">
          <li>
            <a onClick={() => login()} type="submit" className="masuk4" >
              Masuk
            </a>
          </li>
          <li>
            <button onClick={() => register()} type="submit" className="buttondaftar">
              Daftar
            </button>
          </li>
        </nav>
      </header>
    </div>
  );
}
export default HeadingLanding;
