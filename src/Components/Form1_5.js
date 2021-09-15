import react from "react";
import '../Styles/style.css'

function Form1_5() {
    return (
        <>
            <div className="wrapper">
                <div type="form" className="basicForm">
                    <h2 className="titleOne">Data Diri dan Keluarga</h2>
                    
                    <hr className="divider"/>
                    <h3 className="titleTwo">Kerabat Yang Tidak Tinggal Serumah</h3>

                    <label className="basicLabel">Nama Kerabat</label>
                    <input className="basicInput" placeholder="Masukkan Nama Kerabat"></input>

                    <label className="basicLabel" >Alamat Tinggal Kerabat Saat Ini</label>
                    <input className="basicInput" placeholder="Masukan Alamat Tinggal Kerabat Saat Ini"></input> 

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

                        <div class="radioWrapper">
                            <div className="halfHalf">
                                <div className="wrapperHalf">
                                    <label className="basicLabel">Nomor Telepon Rumah (Opsional)</label>
                                    <input className="basicInput" placeholder="Masukan Nomor Telepon" type="number"></input> 
                                </div>
                            </div>  
                            <div className="halfHalf">
                                <div className="wrapperHalf">
                                <label className="basicLabel">Nomor Handphone</label>
                                    <div className="inputWithIconLeftWrapper">
                                        <input className="inputWithIconLeft" type="number" placeholder="81234567899"/>
                                        <label className="iconLeft">+62</label>
                                    </div>
                                </div>
                            </div>  
                        </div>

                        <label className="basicLabel">Hubungan Dengan Nasabah</label>
                        <select className="dropdownSelect">
                            <option value="" disabled selected hidden>Pilih Status Kepemilikan</option>
                            <option >Orang Tua</option>
                            <option >Saudara Kandung</option>
                            <option >Anak Kandung</option>
                            <option >Lainnya</option>
                        </select>


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

export default Form1_5