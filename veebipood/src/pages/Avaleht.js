import React, { useState } from 'react'

function Avaleht() {
  const [kogus, muudaKogus] = useState(1); // saab liita, lahutada, korrutada, jagada, küsida kas suurem/väiksem
  const [sonum, muudaSonum] = useState("Muuda kogust!"); // saab otsida, pikkust küsida, millega algab/lõppeb
  const [laigitud, muudaLaigitud] = useState(false); // saab tagurpidi keerata -->    !laigitud

  function nulli() {
    muudaKogus(0);
    muudaSonum("Nullisid koguse!");
  }

  function vahenda() {
    muudaKogus(kogus - 1);
    muudaSonum("Vähendasid kogust!");
  }

  function suurenda() {
    muudaKogus(kogus + 1);
    muudaSonum("Suurendasid kogust!");
  }

// kui kasutan useState funktsiooni, siis:
//  const [muutuja, muutja] = useState(algväärtus);
//  <button onClick={() => muutja(UUS_VÄÄRTUS)}>Nupu tekst</button>

// kui kasutan enda tehtud funktsiooni, siis:
//  <button onClick={lyhidalt}>Nupu tekst</button>

  return (
    <div>
      {laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      {laigitud === true && <img src="/laigitud.svg" alt="" />}
      {/* <button onClick={() => muudaLaigitud(false)}>Laik maha</button>
      <button onClick={() => muudaLaigitud(true)}>Laik peale</button> */}
      <button onClick={() => muudaLaigitud(!laigitud)}>Muuda like-i</button>

      <div>{sonum}</div>
      {kogus !== 0 && <button onClick={nulli}>Nulli kogus</button>}
      {/* {kogus > 0 && <button onClick={nulli}>Nulli kogus</button>} */}

      <button disabled={kogus === 0} onClick={vahenda}>-</button>
      <span>{kogus}</span>
      <button onClick={suurenda}>+</button>
    </div>
  )
}

export default Avaleht