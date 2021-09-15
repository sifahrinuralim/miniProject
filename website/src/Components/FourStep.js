import React, { useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/Step.css";

export default function FourStep() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <>
      <div className="stepContainer">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pekerjaan</h2>

          <hr className="divider" />
          <h3 className="titleTwo">Data Pekerjaan Pemohon</h3>

          <label className="basicLabel" for="Pembiayaan">
            Jenis Pekerjaan
          </label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Pekerjaan"
          >
            <option value="" disabled selected hidden>
              Pilih Jenis Pekerjaan
            </option>
            <option value="Karyawan">Karyawan</option>
            <option value="Profesional">Profesional</option>
            <option value="Wiraswasta">Wiraswasta</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <label className="basicLabel">Nama Perusahaan</label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Perusahaan"
          ></input>

          <label className="basicLabel">Jabatan</label>
          <input className="basicInput" placeholder="Masukkan Jabatan"></input>

          <label className="basicLabel">Kategori Instansi</label>
          <select className="dropdownSelect">
            <option value="" disabled selected hidden>
              Pilih Kategori Instansi
            </option>
            <option value="Pemerintahan">Pemerintahan</option>
            <option value="BUMN">BUMN</option>
            <option value="TNI/Polri">TNI/Polri</option>
            <option value="Wiraswasta/Profesional">
              Wiraswasta/Profesional
            </option>
            <option value="Swasta Asing">Swasta Asing</option>
            <option value=">Swasta Nasional">Swasta Nasional</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Lama Bekerja</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    placeholder="1"
                    type="number"
                    min="1"
                  />
                  <label className="iconRight">tahun</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">.</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    placeholder="1"
                    type="number"
                    min="1"
                  />
                  <label className="iconRight">bulan</label>
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel">Jumlah Karyawan</label>
          <input
            className="basicInput"
            placeholder="Masukan Jumlah Karyawan"
            type="number"
          ></input>

          <label className="basicLabel">Pendapatan Per Bulan</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="30.000.000"
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel" htmlFor="skema">
            Status Pekerjaan
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Karyawan Tetap </label>
              <input value="Karyawan Tetap" type="radio" name="radio"></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Karyawan Kontrak </label>
              <input value="Karyawan Kontrak" type="radio" name="radio"></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel" htmlFor="skema">
            Pembayaran Gaji
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Transfer Bank Muamalat </label>
              <input
                value="Transfer Bank Muamalat"
                type="radio"
                name="radio"
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Transfer Bank Lain </label>
              <input
                value="Transfer Bank Lain"
                type="radio"
                name="radio"
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Alamat Kantor atau Tempat Usaha</label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Kantor atau Tempat Usaha"
            type="number"
          ></input>

          <label className="basicLabel">Bidang Usaha</label>
          <input
            className="basicInput"
            placeholder="Masukan Bidang Usaha"
            type="number"
          ></input>

          <label className="basicLabel">Nomor Telepon Kantor</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="81234567890"
            />
            <label className="iconLeft">+62</label>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Telepon HRD</label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    placeholder="81234567899"
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Alamat Email HRD</label>
                <input
                  className="basicInput"
                  placeholder="example@email.com"
                  type="email"
                ></input>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">
                  Nomor Telepon Atasan Langsung
                </label>
                <div className="inputWithIconLeftWrapper">
                  <input
                    className="inputWithIconLeft"
                    type="number"
                    placeholder="81234567899"
                  />
                  <label className="iconLeft">+62</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">
                  Alamat Email Atasan Langsung
                </label>
                <input
                  className="basicInput"
                  placeholder="example@email.com"
                  type="email"
                ></input>
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
                onClick={() => setStep(3)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                onClick={() => setStep(5)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
