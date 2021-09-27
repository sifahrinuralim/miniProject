import React, { useState, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";
import swal from "sweetalert";

import axios from "axios";

export default function UploadDokumen() {
  const { userData, setUserData, setPage } =
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

  const handleDelete = (value) => {
    swal("Apakah Anda yakin ingin menghapus gambar?", {
      buttons: {
        cancel: "No",
        catch: {
          text: "Yes",
          value: "yash",
        },
      },
    }).then((value1) => {
      switch (value1) {
        case "yash":
          if (value === "KTP") {
            setTitleKTP(null);
            setKTP(null);
          } else if (value === "KK") {
            setTitleKK(null);
            setKK(null);
          } else if (value === "SuratNikah") {
            setTitleSuratNikah(null);
            setSuratNikah(null);
          } else if (value === "NPWP") {
            setTitleNPWP(null);
            setNPWP(null);
          } else if (value === "SlipGaji") {
            setTitleSlipGaji(null);
            setSlipGaji(null);
          } else if (value === "KetKerja") {
            setTitleKetKerja(null);
            setKetKerja(null);
          } else if (value === "MutasiRek") {
            setTitleMutasiRek(null);
            setMutasiRek(null);
          } else if (value === "LapKeuangan") {
            setTitleLapKeuangan(null);
            setLapKeuangan(null);
          } else if (value === "SertifBangunan") {
            setTitleSertifBangunan(null);
            setSertifBangunan(null);
          } else if (value === "IMB") {
            setTitleIMB(null);
            setIMB(null);
          } else if (value === "PBB") {
            setTitlePBB(null);
            setPBB(null);
          }
          swal("Berhasil", "Gambar telah di hapus", "success");
          break;

        default:
          swal("File Anda Tersimpan Oleh Sistem");
      }
    });
  };

  const postDataForm = () => {
    let getIdUser = localStorage.getItem("UserId");

    axios({
      url: "http://localhost:4000/api/upload/uploadMultiple" + getIdUser,
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
        <form type="form-data" className="basicForm">
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
            <div
              className="formUD"
              style={{
                display: TitleKTP ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleKTP}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("KTP")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="ktp"
              onChange={(e) => handleUpload(e.target.files[0].name, "KTP")}
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitleKK ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleKK}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("KK")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="kk"
              onChange={(e) => handleUpload(e.target.files[0].name, "KK")}
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitleSuratNikah ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleSuratNikah}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("SuratNikah")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="surat_nikah"
              onChange={(e) =>
                handleUpload(e.target.files[0].name, "SuratNikah")
              }
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitleNPWP ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleNPWP}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("NPWP")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="npwp"
              onChange={(e) => handleUpload(e.target.files[0].name, "NPWP")}
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitleSlipGaji ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleSlipGaji}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("SlipGaji")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="slip_gaji"
              onChange={(e) => handleUpload(e.target.files[0].name, "SlipGaji")}
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitleKetKerja ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleKetKerja}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("KetKerja")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="ket_kerja"
              onChange={(e) => handleUpload(e.target.files[0].name, "KetKerja")}
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">
                {" "}
                Mutasi Rekening Buku Tabungan
              </label>
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
            <div
              className="formUD"
              style={{
                display: TitleMutasiRek ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleMutasiRek}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("MutasiRek")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="mutasi"
              onChange={(e) =>
                handleUpload(e.target.files[0].name, "MutasiRek")
              }
              onClick={(e) => (e.target.value = null)}
              style={{ display: "none" }}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">
                Laporan Keuangan atau usaha
              </label>
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
            <div
              className="formUD"
              style={{
                display: TitleLapKeuangan ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleLapKeuangan}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("LapKeuangan")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="lap_keuangan"
              onChange={(e) =>
                handleUpload(e.target.files[0].name, "LapKeuangan")
              }
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitleSertifBangunan ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>
                  {TitleSertifBangunan}
                </span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("SertifBangunan")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="stf_bangunan2"
              onChange={(e) =>
                handleUpload(e.target.files[0].name, "SertifBangunan")
              }
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitleIMB ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitleIMB}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("IMB")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="imb"
              onChange={(e) => handleUpload(e.target.files[0].name, "IMB")}
              onClick={(e) => (e.target.value = null)}
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
            <div
              className="formUD"
              style={{
                display: TitlePBB ? "block" : "none",
              }}
            >
              <div className="uploadDocc">
                <span style={{ textAlign: "center" }}>{TitlePBB}</span>
              </div>
              <div className="asetImage">
                <img
                  src="./assets/Vector.png"
                  onClick={() => handleDelete("PBB")}
                  width="10"
                  height="13"
                  style={{
                    alignSelf: "center",
                  }}
                />
              </div>
            </div>
            <input
              type="file"
              id="pbb"
              onChange={(e) => handleUpload(e.target.files[0].name, "PBB")}
              onClick={(e) => (e.target.value = null)}
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
                onClick={() => setPage(3)}
              // onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </form>

      </div>
    </>
  );
}
