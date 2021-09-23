import React, { useState, useEffect, useContext } from "react";
import { multiStepContext } from "../StepContext";
import "../Styles/Step.css";
import "../Styles/style.css";

import axios from "axios";

export default function DataAgunan() {
  const { setStepDataDiri } = useContext(multiStepContext);

  const [jenis_agunan, setJenis_Agunan] = useState("");
  const [luas_tanah, setLuas_Tanah] = useState("");
  const [luas_bangunan, setLuas_Bangunan] = useState("");
  const [kondisi_bangunan, setKondisi_Bangunan] = useState("");
  const [status_kepemilikan, setStatus_Kepemilikan] = useState("");
  const [status_agunan, setStatus_Agunan] = useState("");
  const [nama_sertifikat, setNama_Sertifikat] = useState("");
  const [nomor_sertifikat, setNomor_Sertifikat] = useState("");
  const [masa_berlaku_sertifikat, setMasa_Berlaku_Sertifikat] = useState("");
  const [nomor_spr, setNomor_Spr] = useState("");
  const [alamat_agunan, setAlamat_Agunan] = useState("");
  const [rt, setRt] = useState("");
  const [rw, setRw] = useState("");
  const [provinsi_agunan, setProvinsi_Agunan] = useState("");
  const [kab_kota_agunan, setKab_Kota_Agunan] = useState("");
  const [kecamatan_agunan, setKecamatan_Agunan] = useState("");
  const [kelurahan_agunan, setKelurahan_Agunan] = useState("");
  const [kode_pos_agunan, setKode_Pos_Agunan] = useState("");

  const [getIdProvinsi, setGetIdProvinsi] = useState("");
  const [getIdKota, setGetIdKota] = useState("");
  const [getIdKecamatan,setGetIdKecamatan] = useState("");
  const [getIdKelurahan, setGetIdKelurahan] = useState("");

  const postDataForm = () => {
    let getIdUser = 11;

    const localhost = "10.80.247.58";

    axios({
      url:
        "http://" +
        localhost +
        ":4000/api/data_agunan/add_form_data_agunan/" +
        getIdUser,
      method: "POST",
      data: {
        jenis_agunan,
        luas_tanah,
        luas_bangunan,
        kondisi_bangunan,
        status_kepemilikan,
        status_agunan,
        nama_sertifikat,
        nomor_sertifikat,
        masa_berlaku_sertifikat,
        nomor_spr,
        alamat_agunan,
        rt,
        rw,
        provinsi_agunan,
        kab_kota_agunan,
        kecamatan_agunan,
        kelurahan_agunan,
        kode_pos_agunan,
      },
    })
      .then((response) => {
        console.log(response);
        setStepDataDiri(3);
      })
      .catch((err) => {
        console.log(err);
      });
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
          <h2 className="titleOne">Data Agunan</h2>

          <label className="basicLabel">Jenis Agunan</label>
          <select
            className="dropdownSelect"
            placeholder="Pilih Jenis Agunan"
            onChange={(e) => setJenis_Agunan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Jenis Agunan
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <div class="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Luas Tanah</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="number"
                    placeholder="0"
                    onChange={(e) => setLuas_Tanah(e.target.value)}
                  />
                  <label className="iconRight">m2</label>
                </div>
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Luas Bangunan</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="number"
                    placeholder="0"
                    onChange={(e) => setLuas_Bangunan(e.target.value)}
                  />
                  <label className="iconRight">m2</label>
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel" htmlFor="skema">
            Kondisi Bangunan
          </label>
          <div className="radioWrapper">
            <label className="radioContainer">
              <label className="radioLabel"> Siap Huni </label>
              <input
                type="radio"
                name="radio"
                value="Siap Huni"
                onChange={(e) => setKondisi_Bangunan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
            <label className="radioContainer">
              <label className="radioLabel"> Dalam Proses Pembangunan </label>
              <input
                type="radio"
                name="radio"
                value="Dalam Proses Pembangunan"
                onChange={(e) => setKondisi_Bangunan(e.target.value)}
              ></input>
              <span className="checkmark"></span>
            </label>
          </div>

          <label className="basicLabel">Status Kepemilikan</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setStatus_Kepemilikan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Status Kepemilikan
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <label className="basicLabel">Status Agunan</label>
          <select
            className="dropdownSelect"
            onChange={(e) => setStatus_Agunan(e.target.value)}
          >
            <option value="" disabled selected hidden>
              Pilih Agunan
            </option>
            <option>Developer Rekanan</option>
            <option>Developer Non Rekanan</option>
            <option>Non Developer</option>
          </select>

          <label className="basicLabel">Atas Nama Sertifikat</label>
          <input
            className="basicInput"
            placeholder="Masukan Atas Nama Sertifikat"
            onChange={(e) => setNama_Sertifikat(e.target.value)}
          ></input>

          <div class="radioWrapper">
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Nomor Sertifikat</label>
                <input
                  className="basicInput"
                  type="number"
                  placeholder="Masukan Nomor Sertifikat"
                  onChange={(e) => setNomor_Sertifikat(e.target.value)}
                />
              </div>
            </div>
            <div className="halfHalf">
              <div className="wrapperHalf">
                <label className="basicLabel">Berlaku Hingga</label>
                <div className="inputWithIconRightWrapper">
                  <input
                    className="inputWithIconRight"
                    type="date"
                    placeholder="0"
                    onChange={(e) => setMasa_Berlaku_Sertifikat(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <label className="basicLabel">Nomor SPR Developer</label>
          <input
            className="basicInput"
            type="number"
            placeholder="Masukkan Nomor SPR Developer"
            onChange={(e) => setNomor_Spr(e.target.value)}
          ></input>

          <label className="basicLabel">Alamat Agunan</label>
          <input
            className="basicInput"
            placeholder="Masukkan Alamat Agunan"
            onChange={(e) => setAlamat_Agunan(e.target.value)}
          ></input>

          <div class="radioWrapper">
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
                    onChange={(e) => setProvinsi_Agunan(e.target.value)}
                  >
                    <option value="" disabled selected hidden>
                      Pilih Provinsi
                    </option>
                    {
                      pilihanProvinsi.map((provinsi, key) => {
                        return (
                          <option>{provinsi.nama}</option>
                        )
                      })
                    }
                  </select>
                </div>
              
            </div>
          </div>

          <div class="radioWrapper">
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

          <div class="radioWrapper">
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
                    onChange={(e) => setKode_Pos_Agunan(e.target.value)}
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
                onClick={() => postDataForm()}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
