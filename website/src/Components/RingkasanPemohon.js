import React, { useState, useEffect, useContext } from "react";
import { Button, TextField } from "@material-ui/core";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function RingkasanPemohon() {
  const { setStepDataDiri, setPage } = useContext(multiStepContext);

  const [nama_pasangan, setNama_pasangan] = useState("");
  const [tempat_lahir_pasangan, setTempat_lahir_pasangan] = useState("");
  const [tanggal_lahir_pasangan, setTanggal_lahir_pasangan] = useState("");
  const [nik_pasangan, setNik_pasangan] = useState("");
  const [npwp_pasangan, setNpwp_pasangan] = useState("");
  const [pekerjaan_pasangan, setPekerjaan_pasangan] = useState("");
  const [no_telepon_pasangan, setNo_telepon_pasangan] = useState("");

  const postDataForm = () => {
    let getIdUser = 11;

    axios({
      url:
        "http://10.80.247.38:4000/api/data_diri_keluarga/add_data_diri_pasangan/" +
        getIdUser,
      method: "POST",
      data: {
        nama_pasangan,
        tempat_lahir_pasangan,
        tanggal_lahir_pasangan,
        nik_pasangan,
        npwp_pasangan,
        pekerjaan_pasangan,
        no_telepon_pasangan,
      },
    })
      .then((response) => {
        console.log(response);
        setStepDataDiri(3.1); // Data Diri Kerabat
      })
      .catch((err) => {});
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Ringkasan</h2>
          <p className="forKetRingkasan">
            Mohon lakukan pengecekan sebelum menekan tombol “Ajukan KPR” untuk
            pengajuan kredit kepemilikan properti Anda secara seksama. Informasi
            yang telah Anda isi akan kami gunakan untuk menindak lanjuti
            pengajuan Anda.
          </p>
          <hr className="divider" />
          <h3 className="titleTwo">Ringkasan Pemohon</h3>

          <label className="basicLabel">Nama Pemohon</label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
            onChange={(e) => setNama_pasangan(e.target.value)}
            readOnly
          ></input>

          <label className="basicLabel">Nomor Telepon</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="81234567890"
              onChange={(e) => setNo_telepon_pasangan(e.target.value)}
            />
            <label className="iconLeft">+62</label>
          </div>

          <label className="basicLabel">Tujuan Kredit</label>
          <input
            className="basicInput"
            placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"
            onChange={(e) => setNama_pasangan(e.target.value)}
          ></input>

          <label className="basicLabel">Jumlah Pinjaman</label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              //   onChange={(e) => setTotal_Plafond(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Waktu Pembiayaan</label>
          <div className="inputWithIconRightWrapper">
            <input
              className="inputWithIconRight"
              type="number"
              //   onChange={(e) => setWaktu_Pembiayaan(e.target.value)}
              // value={userData["wkt_pembiayaan"]}
              // onChange={(e) => buatBalik(e)}
              placeholder="Masukkan Dalam Bentuk Angka"
            />
            <label className="iconRight">Tahun</label>
          </div>

          <h3 className="titleTwo">Dokumen Pemohon</h3>

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
                onClick={() => setPage(2)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(4)}
                onClick={() => setPage(3.1)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
