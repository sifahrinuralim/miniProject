import React, { useState } from "react";
import HeadingUtama from '../Components/HeadingUtama'
import '../Styles/InformasiAwal.css'

function InformasiAwal () {
const [nasabah,setNasabah]= useState(false)

const isNasabah = () => {
    setNasabah(true)
}
const isNotNasabah = () => {
    setNasabah(false)
}


    return (
        <>
        <HeadingUtama/>
        <div>
            <div className="containerinfoawal">
                <h1 className="apakah">Apakah Anda nasabah Bank Muamalat?</h1>
                <label className="radio1">
                    <label className="radioLabel1"> Tidak, saya bukan nasabah Bank Muamalat </label>
                    <input
                     onChange={() => isNotNasabah()}
                        type="radio"
                        name="radio"
                        value="nonNasabah"
                    ></input>
                    <span className="checkmark" value="nonNasabah"></span>
                </label>
                
                <label className="radio2">
                    <label className="radioLabel2"> Ya, saya nasabah Bank Muamalat </label>
                    
                    <input 
                    onChange={() => isNasabah()}
                        type="radio"
                        name="radio" 
                        value="nasabah"
                    ></input>
                    
                    <span className="checkmark"></span>
                    
                  
                </label>
                    {
                       nasabah ?
                       <label className="radio3">
                            <label className="radioLabel3"> Nomor Rekening Bank Muamalat </label>
                            <input
                                placeholder="0890108090"
                                type="number" 
                                min="0"                          
                            ></input>
                        </label>
                       
                       : null
                   }
                <div className="images">
                    <img className="img5" src="./assets/image-5.png" />
                    <button className="lanjutkan">Lanjut</button>
                </div>
                
            </div>
            
        </div>
        </>
    )
}

export default InformasiAwal