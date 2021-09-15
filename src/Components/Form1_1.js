import React, {useState, useEffect}  from 'react'
import '../Styles/style.css'

function Form1_1() {
    
        return (
            <>
                <div className="wrapper">
                    <div type="form" className="basicForm">
                        <h2 className="titleOne">Data Pengajuan</h2>
                        <hr className="divider"/>
                        <h3 className="titleTwo">Fasilitas Pembiayaan</h3>
                        <label className="basicLabel" htmlFor="skema">Skema Pengajuan</label>
                        <div className="radioWrapper">
                            <label className="radioContainer">
                                <label className="radioLabel"> Penghasilan Tunggal </label>
                                <input value="Penghasilan Tunggal" type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radioContainer"> 
                            <label className="radioLabel"> Penghasilan Gabungan </label>
                                <input value="Penghasilan Gabungan" type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>
                        <div></div>
                        <label className="basicLabel" for="Pembiayaan">Peruntukan Pembiayaan</label>
                        <select className="dropdownSelect" placeholder="Pilih Peruntukan Pembiayaan">
                            <option value="" disabled selected hidden>Pilih Peruntukan Pembiayaan</option>
                            <option value="Pembelian Properti">Pembelian Properti</option>   
                            <option value="Take Over">Take Over</option>    
                            <option value="Take Over + Top Up">Take Over + Top Up</option>    
                            <option value="Pembiayaan Konsumsi Beragun Properti">Pembiayaan Konsumsi Beragun Properti</option>                         
                        </select>

                        <label className="basicLabel" for="Program">Program</label>
                        <select className="dropdownSelect" placeholder="Pilih Program">
                        <option value="" disabled selected hidden>Pilih Program</option>
                            <option >Fix & Fix</option>
                            <option >Angsuran Super Ringan</option>
                            <option >Special MMQ</option>
                        </select>

                        <label className="basicLabel" for="Objek">Objek Yang Dibiayai</label>
                        <select className="dropdownSelect" name="Objek">
                        <option value="" disabled selected hidden>Pilih Objek Yang Dibiayai</option>
                            <option >Properti</option>
                            <option >Renovasi Pembangunan</option>
                            <option >Kendaraan</option>
                            <option >Furniture</option>
                            <option >Jasa Konsumtif</option>
                            <option >Lainnya</option>
                        </select>

                        <label className="basicLabel" for="Akad">Akad Fasilitas Yang Diajukan</label>
                        <select className="dropdownSelect" name="Akad">
                        <option value="" disabled selected hidden>Pilih Akad Fasilitas Yang Diajukan</option>
                            <option>Murabahah</option>    
                            <option>MMQ (Musyarakah Mutanaqishah</option>
                            <option>Isthisna</option>
                            <option>Lainnya</option>
                        </select>

                        <label className="basicLabel">Total Plafond Yang Diajukan</label>
                        <div className="inputWithIconLeftWrapper">
                            <input className="inputWithIconLeft" type="number" min="1" placeholder="500.000.000"/>
                            <label className="iconLeft">Rp</label>
                        </div>

                        <label className="basicLabel">Waktu Pembiayaan</label>
                        <div className="inputWithIconRightWrapper">
                            <input className="inputWithIconRight" type="number" placeholder="Masukkan Dalam Bentuk Angka"/>
                            <label className="iconRight">bulan</label>
                        </div>
                        
                        <div className="firstPageButtonsWrapper">
                            <input className="transparentButton" type="submit" value="Simpan Formulir"></input>
                            <input className="primaryButton" type="submit" value="Lanjut"></input>
                        </div>
                        
                    </div>
                </div>
            </>
        )
    }

    export default Form1_1