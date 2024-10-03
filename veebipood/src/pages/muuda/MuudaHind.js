import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom'
import hinnadJSON from "../../data/hinnad.json"

function MuudaHind() {
  const {index} = useParams();
  const leitud = hinnadJSON[index];
  const hindRef = useRef();

  // võtmiseks: const found = hinnadJSON[index];
  // muutmiseks hinnadJSON[index] = UUS_VÄÄRTUS


  const muuda = () => {
    hinnadJSON[index] = {"number": Number(hindRef.current.value), "lisaja": "Silver"};
  }

  return (
    <div>
      <label>Hind</label> <br />
      <input type="text" ref={hindRef} defaultValue={leitud.number} /> <br />
      <Link to="/halda-hinnad">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}

export default MuudaHind