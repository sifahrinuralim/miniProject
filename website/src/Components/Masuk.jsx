import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import '../Styles/Masuk.css'

function Masuk({ setToken }, props) {
    const { openModalMasuk } = props

    function closeModalMasuk() {
        openModalMasuk(false)
    }

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    async function login() {
        // e.preventDefault()

        let item = { email, password }
        await fetch("http://192.168.43.136:4000/api/user/masuk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                setToken(data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return (
        <div className="containermasuk">
            <label className="x">x</label>
            <h2 >Masuk</h2>
            <form className="formmasuk" onClick={() => login()}>
                <div>
                    <label className="email2">Email</label>
                    <input
                        className="inputemail2"
                        placeholder="Masukkan Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label className="password3">Password</label>
                    <input
                        className="inputpassword3"
                        placeholder="Masukkan Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <label className="forgetpw">Forget Password?</label>
                <button className="masuk2" onClick={closeModalMasuk}>Masuk</button>
                <label className="daftar">Daftar Sekarang</label>
            </form>
        </div>
    )
}

export default Masuk