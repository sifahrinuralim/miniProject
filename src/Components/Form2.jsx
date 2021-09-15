import React from 'react'
import '../Styles/style.css'


function Form2(){

  return (
    <div>
      <h1>Data Pengajuan</h1>
      <h2>Pembiayaan Properti</h2>
      <form>
            

            <label >Jenis Penjual</label>
            <select placeholder="Pilih Jenis Penjual">
                <option value="" disabled selected hidden>Pilih Jenis Penjual</option>
                <option >Developer Rekanan</option>
                <option >Developer Non Rekanan</option>
                <option >Non Developer</option>
            </select>

            <label>Nama Penjual</label>
            <input placeholder="Masukan Nama Penjual"></input>

            <label>Harga Penawaran Penjual atau Nilai SPR </label>
            <div>
                <label class="Uang">Rp</label>
                <input type="number" min="1" placeholder="500.000.000"/>
            </div>

            <label>Nomor Telepon Penjual </label>
            <div>
                <label class="Uang">+62</label>
                <input type="number" min="1" placeholder="82123456789"/>
            </div>

            <label>Uang Muka </label>
            <div>
                <label class="Uang">Rp</label>
                <input type="number" min="1" placeholder="500.000.000"/>
            </div>

            <label>Nama proyek</label>
            <input placeholder="Masukan Nama Proyek"></input>

            <label >Kondisi Bangunan</label>
            <select>
            <option value="" disabled selected hidden>Pilih Kondisi Bangunan</option>
                <option >Siap Huni (Ready Stock)</option>
                <option >Dalam Proses Pembuatan (Indent)</option>
            </select>

            <label>Alamat Properti</label>
            <input placeholder="Masukan Alamat Properti"></input>

            <div>
                <div>
                    <label>RT</label>
                    <input placeholder="001"></input>
                </div>

                <div>
                    <label>RW</label>
                    <input placeholder="001"></input>
                </div>

                <div>
                    <label>Kelurahan</label>
                    <select>
                        <option value="" disabled selected hidden>Pilih Kelurahan</option>
                        <option >Fix & Fix</option>
                        <option >Angsuran Super Ringan</option>
                        <option >Special MMQ</option>
                    </select>
                </div>
            </div>


            <div>
                <div>
                    <label>Kecamatan</label>
                    <select>
                        <option value="" disabled selected hidden>Pilih Kecamatan</option>
                        <option >Fix & Fix</option>
                        <option >Angsuran Super Ringan</option>
                        <option >Special MMQ</option>
                    </select>
                </div>


                <div>
                    <label>Kabupaten/Kota</label>
                    <select>
                        <option value="" disabled selected hidden>Pilih Kabupaten/Kota</option>
                        <option >Fix & Fix</option>
                        <option >Angsuran Super Ringan</option>
                        <option >Special MMQ</option>
                    </select>
                </div>
            </div>

            <div>
                <div>
                    <label>Provinsi</label>
                    <select>
                        <option value="" disabled selected hidden>Pilih Provinsi</option>
                        <option >Fix & Fix</option>
                        <option >Angsuran Super Ringan</option>
                        <option >Special MMQ</option>
                    </select>
                </div>


                <div>
                    <label>Kode Pos</label>
                    <select>
                        <option value="" disabled selected hidden>Pilih Kode Pos</option>
                        <option >Fix & Fix</option>
                        <option >Angsuran Super Ringan</option>
                        <option >Special MMQ</option>
                    </select>
                </div>
            </div>
                  
            <input type="submit" value="Simpan Formulir"></input>
            <input type="submit" value="Kembali"></input>
            <input type="submit" value="Lanjut"></input>
          
      </form>
    </div>
  )

}
export default Form2


