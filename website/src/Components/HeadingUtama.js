import React from "react";
import "../Styles/HeadingUtama.css";
import Profile from "./Profile";

function HeadingUtama() {

  const goToProfile = () => {
      return <Profile/>
  }

  return (
    <div>
      <header id="headerUtama">
        <div id="headerWrapper">
          <div className="logoUtama">
            <img src="./assets/BMI.png" />
          </div>
          <nav id="navigasiUtama">
            <li>
              <a className="formPengajuan" href="#">
                Form Pengajuan
              </a>
            </li>
            <li>
              <a className="profile" onClick={() => goToProfile()} type="submit">
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
