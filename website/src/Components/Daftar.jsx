import React from 'react'
import '../Styles/Daftar.css'

function Daftar(props) {
    const {
        openModal
    } = props

    function closeModal() {
        openModal(false)
    }

    return (
        <div className="containerModal">
            <label onClick={closeModal} className="x">x</label>
            <h2>Daftar</h2>
            <form className="form">
                <div>
                    <label htmlFor="idnama" className="namaLengkap">Nama Lengkap</label>
                    <input className="inputnama" id="idnama" required={true} placeholder="Masukkan Nama Lengkap" type="text" />
                </div>
                <div>
                    <label htmlFor="idemail" className="email">Email</label>
                    <input className="inputemail" id="idemail" required={true} placeholder="Masukkan Email" type="text" />
                </div>
                <div>
                    <label htmlFor="idpw" className="password">Password</label>
                    <input className="inputpassword" id="idpw" required={true} placeholder="Masukkan Password" />
                </div>
                <div>
                    <label htmlFor="idpw2" className="password2">Ulangi Password</label>
                    <input className="inputpassword2" id="idpw2" required={true} placeholder="Masukkan Password" type="text" />
                </div>
                <button type="submit" className="masuk" >Masuk</button>
                <label className="sudahpunya" >Sudah Punya Akun? Masuk</label>
            </form>

        </div>
    )

}

export default Daftar