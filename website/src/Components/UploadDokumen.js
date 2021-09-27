import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function UploadDokumen() {
  const { setStepDataDiri, userData, setUserData, setPage } =
    useContext(multiStepContext);

  const [KTP, setKTP] = useState("");
  const [KK, setKK] = useState("");
  const [SuratNikah, setSuratNikah] = useState("");
  const [NPWP, setNPWP] = useState("");
  const [SlipGaji, setSlipGaji] = useState("");
  const [KetKerja, setKetKerja] = useState("");
  const [MutasiRek, setMutasiRek] = useState("");
  const [LapKeuangan, setLapKeuangan] = useState("");
  const [SertifBangunan, setSertifBangunan] = useState("");
  const [IMB, setIMB] = useState("");
  const [PBB, setPBB] = useState("");
  const [waktu_Pembiyaan, setWaktu_Pembiayaan] = useState("");

  const [TitleKTP, setTitleKTP] = useState("");
  const [TitleKK, setTitleKK] = useState("");
  const [TitleSuratNikah, setTitleSuratNikah] = useState("");
  const [TitleNPWP, setTitleNPWP] = useState("");
  const [TitleSlipGaji, setTitleSlipGaji] = useState("");
  const [TitleKetKerja, setTitleKetKerja] = useState("");
  const [TitleMutasiRek, setTitleMutasiRek] = useState("");
  const [TitleLapKeuangan, setTitleLapKeuangan] = useState("");
  const [TitleSertifBangunan, setTitleSertifBangunan] = useState("");
  const [TitleIMB, setTitleIMB] = useState("");
  const [TitlePBB, setTitlePBB] = useState("");

  const buatBalik = (e) => {
    setWaktu_Pembiayaan(e.target.value);
    setUserData({ ...userData, wkt_pembiayaan: e.target.value });
  };

  const handleUpload = (fileNameForm, value) => {
    // let fileName = e.target.files[0].name;
    let fileName = fileNameForm;

    if (value === "KTP") {
      setTitleKTP(fileName);
      setKTP(fileName);
    } else if (value === "KK") {
      setTitleKK(fileName);
      setKK(fileName);
    } else if (value === "SuratNikah") {
      setTitleSuratNikah(fileName);
      setSuratNikah(fileName);
    } else if (value === "NPWP") {
      setTitleNPWP(fileName);
      setNPWP(fileName);
    } else if (value === "SlipGaji") {
      setTitleSlipGaji(fileName);
      setSlipGaji(fileName);
    } else if (value === "KetKerja") {
      setTitleKetKerja(fileName);
      setKetKerja(fileName);
    } else if (value === "MutasiRek") {
      setTitleMutasiRek(fileName);
      setMutasiRek(fileName);
    } else if (value === "LapKeuangan") {
      setTitleLapKeuangan(fileName);
      setLapKeuangan(fileName);
    } else if (value === "SertifBangunan") {
      setTitleSertifBangunan(fileName);
      setSertifBangunan(fileName);
    } else if (value === "IMB") {
      setTitleIMB(fileName);
      setIMB(fileName);
    } else if (value === "PBB") {
      setTitlePBB(fileName);
      setPBB(fileName);
    }
  };

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    axios({
      url: "http://localhost:4000/api/upload/uploadMultiple/" + getIdUser,
      method: "POST",
      data: {
        KTP,
        KK,
        SuratNikah,
        NPWP,
        SlipGaji,
        KetKerja,
        MutasiRek,
        LapKeuangan,
        SertifBangunan,
        IMB,
        PBB,
      },
    })
      .then((response) => {
        // setPage(3);
        console.log("TEST");
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Upload Dokumen Pendukung</h2>
          <hr className="divider"></hr>
          <h3 className="titleTwo">Dokumen Wajib</h3>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">KTP</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="ktp"
              style={{ display: TitleKTP ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleKTP ? "block" : "none" }}
            >
              {TitleKTP}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="ktp"
              // onChange={(e) => handleUpload(e.target.files[0].name, "KTP")}
              onChange={(e) => handleUpload(e.target.files[0].name, "KTP")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Kartu Keluarga</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="kk"
              style={{ display: TitleKK ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleKK ? "block" : "none" }}
            >
              {TitleKK}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="kk"
              onChange={(e) => handleUpload(e.target.files[0].name, "KK")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Surat Nikah</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="surat_nikah"
              style={{ display: TitleSuratNikah ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleSuratNikah ? "block" : "none" }}
            >
              {TitleSuratNikah}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="surat_nikah"
              onChange={(e) => handleUpload(e.target.files[0].name, "SuratNikah")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">NPWP</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="npwp"
              style={{ display: TitleNPWP ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleNPWP ? "block" : "none" }}
            >
              {TitleNPWP}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="npwp"
              onChange={(e) => handleUpload(e.target.files[0].name, "NPWP")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Slip Gaji Asli</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="slip_gaji"
              style={{ display: TitleSlipGaji ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleSlipGaji ? "block" : "none" }}
            >
              {TitleSlipGaji}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="slip_gaji"
              onChange={(e) => handleUpload(e.target.files[0].name, "SlipGaji")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Keterangan Kerja</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="ket_kerja"
              style={{ display: TitleKetKerja ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleKetKerja ? "block" : "none" }}
            >
              {TitleKetKerja}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="ket_kerja"
              onChange={(e) => handleUpload(e.target.files[0].name, "KetKerja")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle"> Mutasi Rekening Buku Tabungan</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="mutasi"
              style={{ display: TitleMutasiRek ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleMutasiRek ? "block" : "none" }}
            >
              {TitleMutasiRek}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="mutasi"
              onChange={(e) => handleUpload(e.target.files[0].name, "MutasiRek")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Laporan Keuangan atau usaha</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="lap_keuangan"
              style={{ display: TitleLapKeuangan ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleLapKeuangan ? "block" : "none" }}
            >
              {TitleLapKeuangan}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="lap_keuangan"
              onChange={(e) => handleUpload(e.target.files[0].name, "LapKeuangan")}
              style={{ display: "none" }}
            ></input>
          </div>

          <h3 className="titleTwo">Dokumen Jaminan - Untuk Pembelian</h3>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Sertifikat Bangunan</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="stf_bangunan2"
              style={{ display: TitleSertifBangunan ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleSertifBangunan ? "block" : "none" }}
            >
              {TitleSertifBangunan}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="stf_bangunan2"
              onChange={(e) => handleUpload(e.target.files[0].name, "SertifBangunan")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">IMB</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="imb"
              style={{ display: TitleIMB ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitleIMB ? "block" : "none" }}
            >
              {TitleIMB}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="imb"
              onChange={(e) => handleUpload(e.target.files[0].name, "IMB")}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">PBB</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label
              className="uploadButton"
              for="pbb"
              style={{ display: TitlePBB ? "none" : "block" }}
            >
              Pilih
            </label>
            <span
              className="fileNameUD"
              style={{ display: TitlePBB ? "block" : "none" }}
            >
              {TitlePBB}
              <i className="fa-trash"></i>
            </span>
            <input
              type="file"
              id="pbb"
              onChange={(e) => handleUpload(e.target.files[0].name, "PBB")}
              style={{ display: "none" }}
            ></input>
          </div>

          <label className="forKeterangan">
            Data yang Anda berikan akan tersimpan dan terlindungi dengan aman
            didalam sistem Bank Muamalat.
          </label>

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
                onClick={() => setPage(1)}
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
      </div>
    </>
  );
}
