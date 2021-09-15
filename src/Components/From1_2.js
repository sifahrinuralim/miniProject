import React, {useState, useEffect}  from 'react'
import '../Styles/style.css'

function Form1_2() {
    
        return (
            <>
                <div className="wrapper">
                    <div type="form" className="basicForm">
                        <h2 className="titleOne">Data Pengajuan</h2>
                        <hr className="divider"/>
                        <h3 className="titleTwo">Pembiayaan Properti</h3>

                        <label className="basicLabel">Jenis Penjual</label>
                        <select className="dropdownSelect" placeholder="Pilih Jenis Penjual">
                            <option value="" disabled selected hidden>Pilih Jenis Penjual</option>
                            <option >Developer Rekanan</option>
                            <option >Developer Non Rekanan</option>
                            <option >Non Developer</option>
                        </select>
                        
                        <label className="basicLabel">Nama Penjual</label>
                        <input className="basicInput" placeholder="Masukan Nama Penjual"></input>

                        <label className="basicLabel">Harga Penawaran Penjual atau Nilai SPR </label>
                        <div className="inputWithIconLeftWrapper">
                            <input className="inputWithIconLeft" type="number" min="1" placeholder="500.000.000"/>
                            <label className="iconLeft">Rp</label>
                        </div>

                        <label className="basicLabel">Nomor Telepon Penjual </label>
                        <div className="inputWithIconLeftWrapper">
                            <input className="inputWithIconLeft" type="number" min="1" placeholder="82123456789"/>
                            <label className="IconLeft">+62</label>
                        </div>

                        <label className="basicLabel">Uang Muka </label>
                        <div className="inputWithIconLeftWrapper">
                            <input className="inputWithIconLeft" type="number" min="1" placeholder="500.000.000"/>
                            <label className="IconLeft">Rp</label>
                        </div>

                        <label className="basicLabel">Nama Proyek</label>
                        <input className="basicInput" placeholder="Masukan Nama Proyek"></input>
                    
                        <label className="basicLabel">Kondisi Bangunan</label>
                        <select className="dropdownSelect">
                            <option value="" disabled selected hidden>Pilih Kondisi Bangunan</option>
                            <option >Siap Huni (Ready Stock)</option>
                            <option >Dalam Proses Pembuatan (Indent)</option>
                        </select>

                        <label className="basicLabel">Alamat Properti</label>
                        <input className="basicInput" placeholder="Masukan Alamat Properti"></input>
                    
                        <div class="radioWrapper">
                            <div className="halfHalf">
                                <div className="halfQuarter">
                                    <label className="basicLabel">RT</label>
                                    <input className="basicInput" placeholder="001"></input>
                                </div>

                                <div className="halfQuarter">
                                    <label className="basicLabel">RW</label>
                                    <input className="basicInput" placeholder="001"></input>
                                </div>
                            </div>
                            <div className="halfHalf">
                                <div className="wrapperHalf">
                                    <label className="basicLabel">Kelurahan</label>
                                    <select className="dropdownSelectHalf">
                                        <option value="" disabled selected hidden>Pilih Kelurahan</option>
                                        <option >Kelurahan 1</option>
                                        <option >Kelurahan 2</option>
                                        <option >Kelurahan 3</option>
                                    </select>
                                </div>
                            </div>  
                        </div>

                        <div class="radioWrapper">
                            <div className="halfHalf">
                                <div className="wrapperHalf">
                                    <label className="basicLabel">Kecamatan</label>
                                    <select className="dropdownSelectHalf">
                                        <option value="" disabled selected hidden>Pilih Kecamatan</option>
                                        <option >Kecamatan 1</option>
                                        <option >Kecamatan 2</option>
                                        <option >Kecamatan 3</option>
                                    </select>
                                </div>
                            </div>  
                            <div className="halfHalf">
                                <div className="wrapperHalf">
                                    <label className="basicLabel">Kota/Kabupaten</label>
                                    <select className="dropdownSelectHalf">
                                        <option value="" disabled selected hidden>Pilih Kota/Kabupaten</option>
                                        <option >Kota/Kabupaten 1</option>
                                        <option >Kota/Kabupaten 2</option>
                                        <option >Kota/Kabupaten 3</option>
                                    </select>
                                </div>
                            </div>  
                        </div>

                        <div class="radioWrapper">
                            <div className="halfHalf">
                                <div className="wrapperHalf">
                                    <label className="basicLabel">Provinsi</label>
                                    <select className="dropdownSelectHalf">
                                        <option value="" disabled selected hidden>Pilih Provinsi</option>
                                        <option >Provinsi 1</option>
                                        <option >Provinsi 2</option>
                                        <option >Provinsi 3</option>
                                    </select>
                                </div>
                            </div>  
                            <div className="halfHalf">
                                <div className="wrapperHalf">
                                    <label className="basicLabel">Kode Pos</label>
                                    <select className="dropdownSelectHalf">
                                        <option value="" disabled selected hidden>Pilih Kode Pos</option>
                                        <option >Kode Pos 1</option>
                                        <option >Kode Pos 2</option>
                                        <option >Kode Pos 3</option>
                                    </select>
                                </div>
                            </div>  
                        </div>

                        <div className="firstPageButtonsWrapper">
                            <div className="">
                                <input className="transparentButton" type="submit" value="Simpan Formulir"></input>
                            </div>
                            <div className="sliceForSecondPageButton">
                                <input className="secondaryButton" type="submit" value="Kembali"></input>
                                <input className="primaryButton" type="submit" value="Lanjut"></input>
                            </div>
                            
                        </div>

                    
                    </div>
                </div>
            </>
        )
    }

    export default Form1_2