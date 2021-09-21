import React from 'react'
import '../Styles/Daftar.css'

function Daftar(props) {
    return (
        <div className="containerModal">
            <label className="x">x</label>
            <h2>Daftar</h2>
            <form className="form">
                <div>
                    <label className="namaLengkap">Nama Lengkap</label>
                    <input className="inputnama" placeholder="Masukkan Nama Lengkap" />
                </div>
                <div>
                    <label className="email">Email</label>
                    <input className="inputemail" placeholder="Masukkan Email" />
                </div>
                <div>
                    <label className="password">Password</label>
                    <input className="inputpassword" placeholder="Masukkan Password" />
                </div>
                <div>
                    <label className="password2">Ulangi Password</label>
                    <input className="inputpassword2" placeholder="Masukkan Password" />
                </div>
                <button className="masuk">Masuk</button>
                <label className="sudahpunya">Sudah Punya Akun? Masuk</label>
            </form>
        </div>
    )

}

export default Daftar