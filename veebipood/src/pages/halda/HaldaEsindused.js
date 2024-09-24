import React, { useRef, useState } from 'react'

function HaldaEsindused() {
  const [keskused, muudaKeskused] = useState(["Ülemiste","Rocca al Mare","Magistrali", "Vesse", "Kristiine", "Järveotsa"]);
  const keskusRef = useRef();

  const tyhjenda = () => {
    keskused.splice(0);
    muudaKeskused(keskused.slice());
  }

  const lisaSaue = () => {
    keskused.push("Saue");
    muudaKeskused(keskused.slice());
  }

  const lisaSaku = () => {
    keskused.push("Saku");
    muudaKeskused(keskused.slice());
  }

  const lisa = () => {
    keskused.push(keskusRef.current.value);
    muudaKeskused(keskused.slice());
  }

  const kustutaEsimene = () => {
    keskused.splice(0,1);
    muudaKeskused(keskused.slice());
  }

  const kustutaTeine = () => {
    keskused.splice(1,1);
    muudaKeskused(keskused.slice());
  }

  const kustutaKolmas = () => {
    keskused.splice(2,1);
    muudaKeskused(keskused.slice());
  }

  const kustutaNeljas = () => {
    keskused.splice(3,1);
    muudaKeskused(keskused.slice());
  }

  const kustuta = (nr) => {
    keskused.splice(nr, 1);
    muudaKeskused(keskused.slice());
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