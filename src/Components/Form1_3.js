import react from "react";
import '../Styles/style.css'

function Form1_3() {
    return (
        <>
            <div className="wrapper">
                <div type="form" className="basicForm">
                    <h2 className="titleOne">Data Agunan</h2>
                    

                    <label className="basicLabel">Jenis Agunan</label>
                    <select className="dropdownSelect" placeholder="Pilih Jenis Agunan">
                        <option value="" disabled selected hidden>Pilih Jenis Agunan</option>
                        <option >Developer Rekanan</option>
                        <option >Developer Non Rekanan</option>
                        <option >Non Developer</option>
                    </select>

                    <div class="radioWrapper">
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                                <label className="basicLabel">Luas Tanah</label>
                                <div className="inputWithIconRightWrapper">
                                    <input className="inputWithIconRight" type="number" placeholder="0"/>
                                    <label className="iconRight">m2</label>
                                </div>
                            </div>
                        </div>  
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                            <label className="basicLabel">Luas Bangunan</label>
                                <div className="inputWithIconRightWrapper">
                                    <input className="inputWithIconRight" type="number" placeholder="0"/>
                                    <label className="iconRight">m2</label>
                                </div>
                            </div>
                        </div>  
                    </div>

                    <label className="basicLabel" htmlFor="skema">Kondisi Bangunan</label>
                        <div className="radioWrapper">
                            <label className="radioContainer">
                                <label className="radioLabel"> Siap Huni </label>
                                <input value="Penghasilan Tunggal" type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                            </label>
                            <label className="radioContainer"> 
                            <label className="radioLabel"> Dalam Proses Pembangunan </label>
                                <input value="Penghasilan Gabungan" type="radio" name="radio"></input>
                                <span className="checkmark"></span>
                            </label>
                        </div>

                    <label className="basicLabel">Status Kepemilikan</label>
                    <select className="dropdownSelect">
                        <option value="" disabled selected hidden>Pilih Status Kepemilikan</option>
                        <option >Developer Rekanan</option>
                        <option >Developer Non Rekanan</option>
                        <option >Non Developer</option>
                    </select>

                    <label className="basicLabel">Status Agunan</label>
                    <select className="dropdownSelect">
                        <option value="" disabled selected hidden>Pilih Agunan</option>
                        <option >Developer Rekanan</option>
                        <option >Developer Non Rekanan</option>
                        <option >Non Developer</option>
                    </select>

                    <label className="basicLabel">Atas Nama Sertifikat</label>
                    <input className="basicInput" placeholder="Masukan Atas Nama Sertifikat"></input> 
                    
                    <div class="radioWrapper">
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                                <label className="basicLabel">Nomor Sertifikat</label>
                                <input className="basicInput" type="number" placeholder="0"/>   
                            </div>
                        </div>  
                        <div className="halfHalf">
                            <div className="wrapperHalf">
                            <label className="basicLabel">Berlaku Hingga</label>
                                <div className="inputWithIconRightWrapper">
                                    <input className="inputWithIconRight" type="date" placeholder="0"/>

                                </div>
                            </div>
                        </div>  
                    </div>

                    <label className="basicLabel">Nomor SPR Developer</label>
                    <input className="basicInput" type="number" placeholder="Masukkan Nomor SPR Developer"></input>

                    <label className="basicLabel">Alamat Agunan</label>
                    <input className="basicInput" placeholder="Masukkan Alamat Agunan"></input>


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

export default Form1_3