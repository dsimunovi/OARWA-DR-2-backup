import React from 'react'

const TablicaTransakcija = (podatci) => {
  
  const dodajNoviRedak = ({podatak}) => {
      return (
        <tr key={podatak._id}>
          <td>{podatak.vrsta}</td>
          <td>{podatak.datum}</td>
          <td>{podatak.opis}</td>
          <td>{podatak.opcije}</td>
          <td>{podatak.iznos}</td>
        </tr>)
  }

  const kreirajTablicu = () => {
    return (
      <table>
        <thead>
          <td>VRSTA</td>
          <td>DATUM</td>
          <td>OPIS</td>
          <td>OPCIJE</td>
          <td>IZNOS</td>
        </thead>
        <tbody>
        {podatci.map(p=>dodajNoviRedak(p))}
        </tbody>
      </table>
    )} 

    return (
      <div>
        {this.podatci ? (
          <div className="card">
            {kreirajTablicu(this.podatci)}
          </div>
        ) : null}
      </div>
    )
}

export default TablicaTransakcija