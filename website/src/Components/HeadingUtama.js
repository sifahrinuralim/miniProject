import React from "react";
import "../Styles/HeadingUtama.css";

function HeadingUtama() {
  return (
    <div>
      <header id="header">
        <div id="headerWrapper">
          <div className="logo">
            <img src="./assets/BMI.png" />
          </div>
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
        </div>
      </header>
    </div>
  );
}
export default HeadingUtama;
