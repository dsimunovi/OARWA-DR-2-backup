import React, { useState } from 'react'
import transakcijeAkcije from '../services/transakcije'

const Transakcija = ({ podatak, urediTransakciju, izbrisiTransakciju, urediIznosID}) =>{

    return(
        <tr>
          <td>podatak.vrsta</td>
          <td>podatak.datum</td>
          <td>podatak.opis</td>
          <td>
            <button onClick={urediTransakciju}><span role="img" aria-label="edit">✏️</span></button>
            <button onClick={izbrisiTransakciju}><span role="img" aria-label="delete">❌</span></button>
          </td>
          <td>podatak.iznos</td>
        </tr>
)}

export default Transakcija
