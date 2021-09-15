import react from "react";
import '../Styles/style.css'

function Form2() {
    return (
        <>
            <div className="wrapper">
                <div type="form" className="basicForm">
                    <h2 className="titleOne">Upload Dokumen Pendukung</h2>
                    <hr className="divider"></hr>
                    <h3 className="titleTwo">Dokumen Wajib</h3>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">KTP</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="ktp">Pilih</label>
                        <input type="file" id="ktp" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Kartu Keluarga</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="kk">Pilih</label>
                        <input type="file" id="kk" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Surat Nikah</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="surat_nikah">Pilih</label>
                        <input type="file" id="surat_nikah" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">NPWP</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="npwp">Pilih</label>
                        <input type="file" id="npwp" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Slip Gaji Asli</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="slip_gaji">Pilih</label>
                        <input type="file" id="slip_gaji" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Keterangan Kerja</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="ket_kerja">Pilih</label>
                        <input type="file" id="ket_kerja" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Mutasi Rekening Buku Tabungan</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="mutasi">Pilih</label>
                        <input type="file" id="mutasi" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Laporan Keuangan atau usaha</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="lap_keuangan">Pilih</label>
                        <input type="file" id="lap_keuangan" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Sertifikat Bangunan</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="stf_bangunan">Pilih</label>
                        <input type="file" id="stf_bangunan" style={{display:'none'}}></input>
                    </div>

                    <h3 className="titleTwo">Dokumen Jaminan - Untuk Pembelian</h3>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">Sertifikat Bangunan</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="stf_bangunan2">Pilih</label>
                        <input type="file" id="stf_bangunan2" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">IMB</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="imb">Pilih</label>
                        <input type="file" id="imb" style={{display:'none'}}></input>
                    </div>

                    <div className="fileUploadWrapper">
                        <div className="uploadFileTitleWrapper">
                            <label className="uploaFileTitle">PBB</label>
                            <label className="uploadFileDescription">Format file .jpeg, .jpg, dan .png. Maksimal 1 Mb.</label>
                        </div>
                        
                        <label className="uploadButton" for="pbb">Pilih</label>
                        <input type="file" id="pbb" style={{display:'none'}}></input>
                    </div>

                    <label className="forKeterangan">Data yang Anda berikan akan tersimpan dan terlindungi dengan aman didalam sistem Bank Muamalat.</label>

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

export default Form2