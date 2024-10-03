import React, { useState} from 'react'
import tootedJSON from "../../data/tooted.json"
import { Link } from 'react-router-dom'
 
function HaldaTooted() {
  const [tooted, muudaTooted] = useState (tootedJSON.slice()); 
 
  const kustuta = (index)=>{
    tootedJSON.splice(index, 1);
    muudaTooted(tootedJSON.slice());
  }
 
  return (
    <div>
    
      {tooted.map((toode, index)=>
        <div>
          {toode.aktiivne === false && <i>Toode on mitteaktiivne</i>}
          <div>{toode.nimi}</div>
          <div>{toode.hind}€</div>
          <div>{toode.keskus}</div>
          <div>{toode.pilt}</div>
          <button onClick={() => kustuta(index)}>X</button>
          <Link to={"/muuda-toode/" + index}>
            <button>Muuda</button>
          </Link>
        </div>
      )}

  </div>
  )
}
 
export default HaldaTooted