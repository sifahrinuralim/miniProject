import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/Form.css";
import "../Styles/style.css";

import axios from "axios";

export default function Properti() {
  const { setStepDataDiri, userData, setUserData } =
    useContext(multiStepContext);

  const [jenis_penjual, setJenis_Penjual] = useState("");
  const [nama_penjual, setNama_Penjual] = useState("");
  const [nilai_spr, setNilai_Spr] = useState("");
  const [no_telepon_penjual, setNo_Telepon_Penjual] = useState("");
  const [uang_muka, setUang_Muka] = useState("");
  const [nama_proyek, setNama_Proyek] = useState("");
  const [kondisi_bangunan, setKondisi_Bangunan] = useState("");
  const [alamat, setAlamat] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kab_kota, setKab_Kota] = useState("");
  const [kecamatan, setKecamatan] = useState("");
  const [kelurahan, setKelurahan] = useState("");
  const [kode_pos, setKode_Pos] = useState("");

  const [getIdProvinsi, setGetIdProvinsi] = useState("");
  const [getIdKota, setGetIdKota] = useState("");
  const [getIdKecamatan, setGetIdKecamatan] = useState("");
  const [getIdKelurahan, setGetIdKelurahan] = useState("");

  const postDataForm = () => {
    let getIdUser = 11;

    const localhost = "10.80.247.58";

    axios({
      url:
        "http://" +
        localhost +
        ":4000/api/fasilitas_pembiayaan/add_form_data_pembiayaan_properti/" +
        getIdUser,
      method: "POST",
      data: {
        jenis_penjual,
        nama_penjual,
        nilai_spr,
        no_telepon_penjual,
        uang_muka,
        nama_proyek,
        kondisi_bangunan,
        alamat,
        rt,
        rw,
        provinsi,
        kab_kota,
        kecamatan,
        kelurahan,
        kode_pos,
      },
    })
      .then((response) => {
        console.log(response);
        setStepDataDiri(2);
      })
      .catch((err) => { });
  };

  const [pilihanProvinsi, setPilihanProvinsi] = useState([]);
  useEffect(() => {
    axios({
      url: "https://dev.farizdotid.com/api/daerahindonesia/provinsi",
      method: "GET",
    })
      .then((response) => {
        setPilihanProvinsi(response.data.provinsi);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const [pilihanKotaKabupaten, setPilihanKotaKabupaten] = useState([]);
  const pilihProvinsi = (getIdProvinsi) => {
    console.log(getIdProvinsi);
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${getIdProvinsi}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKotaKabupaten(response.data.kota_kabupaten);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const [pilihanKecamatan, setPilihanKecamatan] = useState([]);
  const pilihKotaKabupaten = (getIdKota) => {
    console.log(getIdKota);
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${getIdKota}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKecamatan(response.data.kecamatan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const [pilihanKelurahan, setPilihanKelurahan] = useState([]);
  const pilihKecamatan = (getIdKecamatan) => {
    console.log(getIdKecamatan);
    axios({
      url: `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${getIdKecamatan}`,
      method: "GET",
    })
      .then((response) => {
        setPilihanKelurahan(response.data.kelurahan);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <>
      <div className="wrapper">
        <div type="form" className="basicForm">
          <h2 className="titleOne">Data Pengajuan</h2>
          <hr className="divider" />
          <h3 className="titleTwo">Pembiayaan Properti</h3>

          <label className="basicLabel">Jenis Penjual</label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Penjual"
            onChange={(e) => setJenis_Penjual(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Jenis Penjual
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <label className="basicLabel">Nama Penjual</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Penjual"
            onChange={(e) => setNama_Penjual(e.target.value)}
          ></input>

          <label className="basicLabel">
            Harga Penawaran Penjual atau Nilai SPR{" "}
          </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setNilai_Spr(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Nomor Telepon Penjual </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="82123456789"
              onChange={(e) => setNo_Telepon_Penjual(e.target.value)}
            />
            <label className="iconLeft">+62</label>
          </div>

          <label className="basicLabel">Uang Muka </label>
          <div className="inputWithIconLeftWrapper">
            <input
              className="inputWithIconLeft"
              type="number"
              min="1"
              placeholder="500.000.000"
              onChange={(e) => setUang_Muka(e.target.value)}
            />
            <label className="iconLeft">Rp</label>
          </div>

          <label className="basicLabel">Nama Proyek</label>
          <input
            className="basicInput"
            placeholder="Masukan Nama Proyek"
            onChange={(e) => setNama_Proyek(e.target.value)}
          ></input>

          <label className="basicLabel">Kondisi Bangunan</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setKondisi_Bangunan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Kondisi Bangunan
            </option>
            <option>Siap Huni (Ready Stock)</option>
            <option>Dalam Proses Pembuatan (Indent)</option>
          </select>

          <label className="basicLabel">Alamat Properti</label>
          <input
            className="basicInput"
            placeholder="Masukan Alamat Properti"
            onChange={(e) => setAlamat(e.target.value)}
          ></input>

          {/* RT RW */}
          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="halfQuarter">
                <label className="basicLabel">RT</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRt(e.target.value)}
                ></input>
              </div>

              <div className="halfQuarter">
                <label className="basicLabel">RW</label>
                <input
                  className="basicInput"
                  placeholder="001"
                  onChange={(e) => setRw(e.target.value)}
                ></input>
              </div>
            </div>

            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Provinsi</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setGetIdProvinsi(e.target.value)}
                >
                  <option value="" disabled selected>
                    Pilih Provinsi
                  </option>
                  {pilihanProvinsi.map((provinsi, key) => {
                    return (
                      <option value={provinsi.id}>
                        {provinsi.nama}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kota/Kabupaten</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setGetIdKota(e.target.value)}
                  onClick={pilihProvinsi(getIdProvinsi)}
                >
                  <option value="" disabled selected>
                    Pilih Kota/Kabupaten
                  </option>
                  {
                    pilihanKotaKabupaten.map((kota, key) => {
                      return (
                        <option value={kota.id}>
                          {kota.nama}
                        </option>
                      );
                    })
                  }
                </select>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kecamatan</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setGetIdKecamatan(e.target.value)}
                  onClick={pilihKotaKabupaten(getIdKota)}
                >
                  <option value="" disabled selected>
                    Pilih Kecamatan
                  </option>
                  {
                    pilihanKecamatan.map((kecamatan, key) => {
                      return (
                        <option value={kecamatan.id}>
                          {kecamatan.nama}
                        </option>
                      );
                    })
                  }
                </select>
              </div>
            </div>
          </div>

          <div className="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kelurahan</label>
                <select
                  className="dropdownSelectHalf"
                  onChange={(e) => setGetIdKelurahan(e.target.value)}
                  onClick={pilihKecamatan(getIdKecamatan)}
                >
                  <option value="" disabled selected>
                    Pilih Kelurahan
                  </option>
                  {
                    pilihanKelurahan.map((kelurahan, key) => {
                      return (
                        <option value={kelurahan.id}>
                          {kelurahan.nama}
                        </option>
                      );
                    })
                  }
                </select>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Kode Pos</label>
                <input
                  className="basicInput"
                  placeholder="11111"
                  onChange={(e) => setKode_Pos(e.target.value)}
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
                onClick={() => setStepDataDiri(1)}
              ></input>
              <input
                className="primaryButton"
                type="submit"
                value="Lanjut"
                // onClick={() => setStepDataDiri(2)}
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
