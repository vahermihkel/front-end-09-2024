import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedFailist from "../../data/esindused.json"

function MuudaEsindus() {
  const {index} = useParams();
  const leitud = esindusedFailist[index];

  const muuda = () => {
    // KOJU 
  }

  return (
    <div>
      <label>Esinduse nimi</label><br />
      <input type="text" defaultValue={leitud.nimi} /> <br />
      <label>Esinduse telefon</label><br />
      <input type="text" defaultValue={leitud.tel} /> <br />
      <label>Esinduse aadress</label><br />
      <input type="text" defaultValue={leitud.aadr} /> <br />
      <button onClick={muuda}>Muuda</button>
    </div>
  )
}

export default MuudaEsindus