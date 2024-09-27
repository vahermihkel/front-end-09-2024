import React from 'react'
import { useParams } from 'react-router-dom'
import esindusedFailist from "../../data/esindused.json"

function MuudaEsindus() {
  const {index} = useParams();
  const leitud = esindusedFailist[index];

  return (
    <div>
      <label>Esindus</label><br />
      <input type="text" defaultValue={leitud} /> <br />
      <button>Muuda</button>
    </div>
  )
}

export default MuudaEsindus