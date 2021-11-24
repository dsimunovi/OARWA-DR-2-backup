import React, { useState, useEffect } from 'react'
import transakcije from '../services/transakcije';
import transakcijeAkcije from '../services/transakcije';
import Podatak from './Podatak';
import TablicaTransakcija from './TablicaTransakcija';

const FormaPrikaz = ({manipuliraj,elementi,postaviElemente,brojID,postaviBrojID}) => {

  useEffect(() => {
    transakcijeAkcije.dohvatiSve().then(res => { postaviElemente(res.data) })
  }, [])

  const spremiPodatke = (e) => {
    var date = new Date()
    e.preventDefault()

    let pod = new Podatak;
    pod.id = brojID;
    postaviBrojID(brojID+1)
    pod.vrsta = document.getElementsByName("vrstaTroska").checked();
    pod.opis = document.getElementById("opis").textContent();   
    pod.datum = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
    pod.iznos = document.getElementById("iznos").textContent(); 
    
    transakcijeAkcije.stvori(pod)
        .then(res => {
            postaviElemente(elementi.concat(res.data))
    })
    manipuliraj(false);
    //komentar
    
}
  
  return (
    <form>
        <div>
            <input type = "radio" id ="prihod" name = "vrstaTroska" value="Prihod" checked="true" />
            <label for = "prihod">Prihod</label><br/>
            <input type = "radio" id ="rashod" name = "vrstaTroska" value="Rashod" />
            <label for = "rashod">Rashod</label>
        </div>
        <div>
          <label for="opis">Opis</label>
          <input type="text" id="opis" /><br/>
          <label for="iznos">Iznos</label>
          <input type="text" id="iznos" />          
        </div>
        <div>
          <button onClick={()=>spremiPodatke()}>OK</button>
          <button onClick={()=>manipuliraj(false)}>Cancel</button>
        </div>
    </form>
  )}
export default FormaPrikaz