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
    
      <table>
        <thead>
          <tr>
            <th>Pilt</th>
            <th>Nimi</th>
            <th>Hind</th>
            <th>Keskus</th>
            <th>Tegevused</th>
          </tr>
        </thead>
        <tbody>
        {tooted.map((toode, index)=>
          <tr key={index}>
            <td><img style={{"width": "50px"}} src={toode.pilt} alt="" /></td>
            <td>{toode.nimi}</td>
            <td>{toode.hind}€</td>
            <td>{toode.keskus}€</td>
            <td>
              <button onClick={() => kustuta(index)}>X</button>
              <Link to={"/muuda-toode/" + index}>
                <button>Muuda</button>
              </Link>
            </td>
          </tr>
        )}
        </tbody>
      </table>

  </div>
  )
}
 
export default HaldaTooted