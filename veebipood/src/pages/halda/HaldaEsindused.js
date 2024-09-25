import React, { useRef, useState } from 'react'
import esindusedFailist from "../../data/esindused.json";

function HaldaEsindused() {
  const [keskused, muudaKeskused] = useState(esindusedFailist);
  const keskusRef = useRef();

  const tyhjenda = () => {
    esindusedFailist.splice(0);
    muudaKeskused(esindusedFailist.slice());
  }

  const lisaSaue = () => {
    esindusedFailist.push("Saue");
    muudaKeskused(esindusedFailist.slice());
  }

  const lisaSaku = () => {
    esindusedFailist.push("Saku");
    muudaKeskused(esindusedFailist.slice());
  }

  const lisa = () => {
    esindusedFailist.push(keskusRef.current.value);
    muudaKeskused(esindusedFailist.slice());
  }

  const kustutaEsimene = () => {
    esindusedFailist.splice(0,1);
    muudaKeskused(esindusedFailist.slice());
  }

  const kustutaTeine = () => {
    esindusedFailist.splice(1,1);
    muudaKeskused(esindusedFailist.slice());
  }

  const kustutaKolmas = () => {
    esindusedFailist.splice(2,1);
    muudaKeskused(esindusedFailist.slice());
  }

  const kustutaNeljas = () => {
    esindusedFailist.splice(3,1);
    muudaKeskused(esindusedFailist.slice());
  }

  const kustuta = (nr) => {
    esindusedFailist.splice(nr, 1);
    muudaKeskused(esindusedFailist.slice());
  }

  return (
    <div>
      <br />
      {keskused.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}
      <div>{keskused.length} tk</div>
      <br />
      {keskused.length > 0 && <button onClick={kustutaEsimene}>Kustuta esimene</button> }
      {keskused.length > 1 && <button onClick={kustutaTeine}>Kustuta teine</button>} 
      {keskused.length > 2 && <button onClick={kustutaKolmas}>Kustuta kolmas</button> }
      {keskused.length > 3 && <button onClick={kustutaNeljas}>Kustuta neljas</button> }
      <br /><br />
      <label>Keskus</label>
      <input ref={keskusRef} type="text" />
      <button onClick={lisa}>Lisa</button><br />
      <br />
      <button onClick={lisaSaue}>Lisa Saue</button>
      <button onClick={lisaSaku}>Lisa Saku</button>
      {keskused.map((keskus, jrknr) => 
        <div>
          {keskus}
          <button onClick={() => kustuta(jrknr)}>x</button>
        </div>)}
    </div>
  )
}

export default HaldaEsindused