import React from 'react'
import '../Styles/Masuk.css'

function Masuk(props) {
    const { openModalMasuk } = props

    function closeModalMasuk() {
        openModalMasuk(false)
    }

    return (
        <div className="containermasuk">
            <label onClick={closeModalMasuk} className="x">x</label>
            <h2 >Masuk</h2>
            <form className="formmasuk">
                <div>
                    <label className="email2">Email</label>
                    <input className="inputemail2" placeholder="Masukkan Email" />
                </div>
                <div>
                    <label className="password3">Password</label>
                    <input className="inputpassword3" placeholder="Masukkan Password" />
                </div>
                <label className="forgetpw">Forget Password?</label>
                <button className="masuk2">Masuk</button>
                <label className="daftar">Daftar Sekarang</label>
            </form>
        </div>
    )

}

export default Masuk