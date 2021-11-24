import React, {useState, useEffect} from 'react'
import FormaPrikaz from './components/FormaPrikaz'
import TablicaTransakcija from './components/TablicaTransakcija'
import axios from 'axios'
import transakcijeAkcije from './services/transakcije'
import Podatak from './components/Podatak'

const App = (props) => {
  const [brojID,postavibrojID] = useState(1);
  const [transakcije, postaviTransakcije] = useState([])
  const [ prikaziFormu, postaviPrikazivanjeForme ] = useState(false)

  const manipulirajFormom = (vrijednost) =>{
    if(vrijednost){ postaviPrikazivanjeForme(vrijednost) }
    else{ postaviPrikazivanjeForme(vrijednost) }
  }
  
  return (
    <div>
      <div>
        <button onClick={() => manipulirajFormom(true)}>NOVI TROŠAK</button>
      </div>
      <div>
        {prikaziFormu ? <FormaPrikaz manipuliraj={manipulirajFormom} elementi = {transakcije} postaviElemente={postaviTransakcije} brojID={brojID} postavibrojID={postavibrojID}/> : null}
      </div>
      <div>
        <button>SAMO PRIHODI</button>
        <button>SAMO RASHODI</button>
        <button>SVE TRANSAKCIJE</button>
      </div>
      <div>
      </div>
    </div>
  )
}
export default App