import React, { useRef, useState } from 'react'
import hinnadJSON from "../../data/hinnad.json";

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON);
  const hindRef = useRef();

  const kustutaEsimene = () => {
    hinnadJSON.splice(0,1);
    muudaHinnad(hinnadJSON.slice());
  }

  const kustutaTeine = () => {
    hinnadJSON.splice(1,1);
    muudaHinnad(hinnadJSON.slice());
  }

  const kustutaKolmas = () => {
    hinnadJSON.splice(2,1);
    muudaHinnad(hinnadJSON.slice());
  }

  const kustutaNeljas = () => {
    hinnadJSON.splice(3,1);
    muudaHinnad(hinnadJSON.slice());
  }

  const lisa = () => {
    hinnadJSON.push(hindRef.current.value);
    muudaHinnad(hinnadJSON.slice());
  }

  const lisa789 = () => {
    hinnadJSON.push(789);
    muudaHinnad(hinnadJSON.slice());
  }

  const lisa432 = () => {
    hinnadJSON.push(432);
    muudaHinnad(hinnadJSON.slice());
  }

  const kustuta = (index) => {
    hinnadJSON.splice(index,1);
    muudaHinnad(hinnadJSON.slice());
  }

  return (
    <div>
      <br />
      <button onClick={kustutaEsimene}>Kustuta esimene</button> 
      <button onClick={kustutaTeine}>Kustuta teine</button> 
      <button onClick={kustutaKolmas}>Kustuta kolmas</button> 
      <button onClick={kustutaNeljas}>Kustuta neljas</button> 
      <br /><br />
      <label>Hind</label>
      <input ref={hindRef} type="text" />
      <button onClick={lisa}>Lisa</button><br />
      <br />
      <button onClick={lisa789}>Lisa 789</button>
      <button onClick={lisa432}>Lisa 432</button>
      <br />
      {hinnad.map((hind, index) => <button onClick={() => kustuta(index)}>{hind}</button>)}
    </div>
  )
}

export default HaldaHinnad