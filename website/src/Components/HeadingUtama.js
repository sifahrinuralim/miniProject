import React from "react";
import "../Styles/HeadingUtama.css";

function HeadingUtama() {
  return (
    <div>
      <header id="header">
        <img className="logo" src="./assets/BMI.png" />
        <nav id="navigasi">
          <li>
            <a className="formPengajuan" href="#">
              Form Pengajuan
            </a>
          </li>
          <li>
            <a className="profile" href="#">
              Profile
            </a>
          </li>
        </nav>
      </header>
    </div>
  );
}
export default HeadingUtama;
