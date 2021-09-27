import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function UploadDokumen() {
  const { setStepDataDiri, userData, setUserData, setPage } = useContext(multiStepContext);

  const [KTP, setKtp] = useState("")
  const [KK, setKk] = useState("")
  const [SuratNikah, setSuratnikah] = useState("")
  const [NPWP, setNpwp] = useState("")
  const [SlipGaji, setSlipgaji] = useState("")
  const [KetKerja, setKetkerja] = useState("")
  const [MutasiRek, setMutasirek] = useState("")
  const [LapKeuangan, setLapkeuangan] = useState("")
  const [SertifBangunan, setSertifbangunan] = useState("")
  const [IMB, setImb] = useState("")
  const [PBB, setPbb] = useState("")

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

  // const buatBalik = (e) => {
  //   setWaktu_Pembiayaan(e.target.value);
  //   setUserData({ ...userData, wkt_pembiayaan: e.target.value });
  // };


  const postDataForm = () => {
    let getIdUser = localStorage.getItem('UserId');

    setTitleKTP(getIdUser + "-KTP")
    setTitleKK(getIdUser + "-KK")
    setTitleSuratNikah(getIdUser + "-SuratNikah")
    setTitleNPWP(getIdUser + "-NPWP")
    setTitleSlipGaji(getIdUser + "-SlipGaji")
    setTitleKetKerja(getIdUser + "-KetKerja")
    setTitleMutasiRek(getIdUser + "-MutasiRek")
    setTitleLapKeuangan(getIdUser + "-LapKeuangan")
    setTitleSertifBangunan(getIdUser + "-SertifBangunan")
    setTitleIMB(getIdUser + "-IMB")
    setTitlePBB(getIdUser + "-PBB")

    axios({
      url:
        "http://localhost:4000/api/upload/uploadMultiple/" + getIdUser,
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
        setPage(3);
      })
      .catch((err) => { });
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

            <label className="uploadButton" for="ktp">
              Pilih
            </label>
            <input type="file" id="ktp" style={{ display: "none" }}
              value={TitleKTP}
              onChange={(e) => setKtp(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Kartu Keluarga</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="kk">
              Pilih
            </label>
            <input type="file" id="kk" style={{ display: "none" }}
              value={TitleKK}
              onChange={(e) => setKk(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Surat Nikah</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="surat_nikah">
              Pilih
            </label>
            <input
              type="file"
              id="surat_nikah"
              style={{ display: "none" }}
              value={TitleSuratNikah}
              onChange={(e) => setSuratnikah(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">NPWP</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="npwp">
              Pilih
            </label>
            <input type="file" id="npwp" style={{ display: "none" }}
              value={TitleNPWP}
              onChange={(e) => setNpwp(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Slip Gaji Asli</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="slip_gaji">
              Pilih
            </label>
            <input
              type="file"
              id="slip_gaji"
              style={{ display: "none" }}
              value={TitleSlipGaji}
              onChange={(e) => setSlipgaji(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">Keterangan Kerja</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="ket_kerja">
              Pilih
            </label>
            <input
              type="file"
              id="ket_kerja"
              style={{ display: "none" }}
              value={TitleKetKerja}
              onChange={(e) => setKetkerja(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">
                Mutasi Rekening Buku Tabungan
              </label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="mutasi">
              Pilih
            </label>
            <input type="file" id="mutasi" style={{ display: "none" }}
              value={TitleMutasiRek}
              onChange={(e) => setMutasirek(e.target.value)}
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

            <label className="uploadButton" for="lap_keuangan">
              Pilih
            </label>
            <input
              type="file"
              id="lap_keuangan"
              style={{ display: "none" }}
              value={TitleLapKeuangan}
              onChange={(e) => setLapkeuangan(e.target.value)}
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

            <label className="uploadButton" for="stf_bangunan2">
              Pilih
            </label>
            <input
              type="file"
              id="stf_bangunan2"
              style={{ display: "none" }}
              value={TitleSertifBangunan}
              onChange={(e) => setSertifbangunan(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">IMB</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="imb">
              Pilih
            </label>
            <input type="file" id="imb" style={{ display: "none" }}
              value={TitleIMB}
              onChange={(e) => setImb(e.target.value)}
            ></input>
          </div>

          <div className="fileUploadWrapper">
            <div className="uploadFileTitleWrapper">
              <label className="uploadFileTitle">PBB</label>
              <label className="uploadFileDescription">
                Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.
              </label>
            </div>

            <label className="uploadButton" for="pbb">
              Pilih
            </label>
            <input type="file" id="pbb" style={{ display: "none" }}
              value={TitlePBB}
              onChange={(e) => setPbb(e.target.value)}
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
                // onClick={() => setPage(3)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
