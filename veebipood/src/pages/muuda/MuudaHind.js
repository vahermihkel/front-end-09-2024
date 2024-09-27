import React from 'react'
import { useParams } from 'react-router-dom'
import hinnadJSON from "../../data/hinnad.json"

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadJSON[index];

  return (
    <div>
      <label>Hind</label> <br />
      <input type="text" defaultValue={leitud} /> <br />
      <button>Muuda</button>
    </div>
  )
}

export default MuudaHind