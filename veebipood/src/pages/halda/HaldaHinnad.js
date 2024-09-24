import React, { useRef, useState } from 'react'

function HaldaHinnad() {
  const [hinnad, muudaHinnad] = useState([20, 8, 150, 3, 123, 32, 9, 1111, 71, 55]);
  const hindRef = useRef();

  const kustutaEsimene = () => {
    hinnad.splice(0,1);
    muudaHinnad(hinnad.slice());
  }

  const kustutaTeine = () => {
    hinnad.splice(1,1);
    muudaHinnad(hinnad.slice());
  }

  const kustutaKolmas = () => {
    hinnad.splice(2,1);
    muudaHinnad(hinnad.slice());
  }

  const kustutaNeljas = () => {
    hinnad.splice(3,1);
    muudaHinnad(hinnad.slice());
  }

  const lisa = () => {
    hinnad.push(hindRef.current.value);
    muudaHinnad(hinnad.slice());
  }

  const lisa789 = () => {
    hinnad.push(789);
    muudaHinnad(hinnad.slice());
  }

  const lisa432 = () => {
    hinnad.push(432);
    muudaHinnad(hinnad.slice());
  }

  const kustuta = (index) => {
    hinnad.splice(index,1);
    muudaHinnad(hinnad.slice());
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