import React from "react";
import "../Styles/HeadingLanding.css";

function HeadingLanding() {

  return (
    <div>
      <header id="header">
        <img className="logo" src="./assets/BMI.png" />
        <nav id="navigasi">
          <li>
            <a className="masuk4" href="#">
              Masuk
            </a>
          </li>
          <li>
            <button  className="buttondaftar">
              Daftar
            </button>
          </li>
        </nav>
      </header>
    </div>
  );
}
export default HeadingLanding;
