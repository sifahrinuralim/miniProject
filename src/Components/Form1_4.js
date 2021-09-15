import react from "react";
import '../Styles/style.css'

function Form1_4() {
    return (
        <>
            <div className="wrapper">
                <div type="form" className="basicForm">
                    <h2 className="titleOne">Data Diri dan Keluarga</h2>
                    
                    <hr className="divider"/>
                    <h3 className="titleTwo">Data Diri Pemohon</h3>

                    <label className="basicLabel">Nama Lengkap Tanpa Singkatan dan Tanpa Gelar</label>
                    <input className="basicInput" placeholder="Masukkan Nama Lengkap Tanpa Singkatan dan Tanpa Gelar"></input>
                    
                    <div class="radioWrapper">
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                                <label className="basicLabel">Tempat Lahir</label>
                                <input className="basicInput" type="text" placeholder="Masukkan Tempat Lahir"/>   
                            </div>
                        </div>  
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                            <label className="basicLabel">Tanggal Lahir</label>
                                <div className="inputWithIconRightWrapper">
                                    <input className="inputWithIconRight" type="date" placeholder="0"/>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <div class="radioWrapper">
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                                <label className="basicLabel">Nomor KTP</label>
                                <input className="basicInput" type="number" placeholder="Masukkan Nomor KTP"/>   
                            </div>
                        </div>  
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                                
                                <label className="basicLabel">Nomor NPWP</label>
                                <input className="basicInput" type="text" placeholder="Masukkan Nomor NPWP"/>
                                
                            </div>
                        </div>  
                    </div>

                    <label className="basicLabel" htmlFor="skema">Status Perkawinan</label>
                    <div className="radioWrapper">
                            <label className="radioContainerThird">
                                <label className="radioLabel"> Belum Menikah </label>
                                <input value="Penghasilan Tunggal" type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radioContainerThird"> 
                            <label className="radioLabel"> Menikah </label>
                                <input value="Penghasilan Gabungan" type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radioContainerThird"> 
                            <label className="radioLabel"> Cerai </label>
                                <input value="Penghasilan Gabungan" type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>

                    <label className="basicLabel">Nama Gadis Ibu Kandung</label>
                    <input className="basicInput" placeholder="Masukan Nama Gadis Ibu Kandung"></input>
                    
                    <label className="basicLabel">Jumlah Tanggungan Anak</label>
                    <div className="inputWithIconRightWrapper">
                        <input className="inputWithIconRight" type="number" placeholder="Masukkan Jumlah Tanggungan Anak"/>
                        <label className="iconRight">bulan</label>
                    </div>
                    

                    <label className="basicLabel">Pendidikan Terakhir</label>
                    <select className="dropdownSelect" >
                        <option value="" disabled selected hidden>Pilih Pendidikan Terakhir</option>
                        <option value="Strata 3 (S3)">Strata 3 (S3)</option>
                        <option value="Strata 2 (S2)">Strata 2 (S2)</option>
                        <option value="Strata 1 (S1) / Diploma 4 (D4)">Strata 1 (S1) / Diploma 4 (D4)</option>
                        <option value="Diploma 3 (D3)">Diploma 3 (D3)</option>
                        <option value="Diploma 2 (D2)">Diploma 2 (D2)</option>
                        <option value="Diploma 1 (D1)">Diploma 1 (D1)</option>
                        <option value="Sekolah Menengah Atas">Sekolah Menengah Atas</option>
                    </select>

                    <label className="basicLabel" >Status Tempat Tinggal</label>
                    <select className="dropdownSelect">
                        <option value="" disabled selected hidden>Pilih Status Tempat Tinggal</option>
                        <option value="Milik Sendiri">Milik Sendiri</option>
                        <option value="Keluarga">Keluarga</option>
                        <option value="Kontrak/Kost">Kontrak/Kost</option>
                        <option value="Lainnya">Lainnya</option>
                    </select>

                    <label className="basicLabel" >Alamat Sesuai KTP</label>
                    <input className="basicInput" placeholder="Masukan Alamat Sesuai KTP"></input> 

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

export default Form1_4