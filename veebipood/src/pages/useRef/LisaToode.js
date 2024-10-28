import React, { useRef, useState } from 'react'
import tootedJSON from "../../data/tooted.json";

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const keskusRef = useRef();
  const piltRef = useRef();
  // teie peate võtma nende võtmete järgi nagu 
  //    on Webshopis products.json sees

  // MaintainProducts sees saate kontrollida, kuidas lisatud.
  //    seal peab olema kõik võtmed ükshaaval välja kuvatud.

  function lisa() {
    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa toodet lisada!");
      return;
    } 
    
    muudaSonum("Toode lisatud: " + nimiRef.current.value);
    const lisatavToode =  {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value),  // JSON.parse võtab array'lt jutumärgid maha
      "aktiivne": aktiivneRef.current.checked, 
      "keskus": keskusRef.current.value, 
      "pilt": piltRef.current.value
    }

    tootedJSON.push(lisatavToode);
  }

  const kontrolli = () => {
    if (nimiRef.current.value === "") {
      muudaSonum("Kohustuslik väli peab olema täidetud!");
      return;
    }

    if (nimiRef.current.value[0] === nimiRef.current.value[0].toLowerCase()) {
      muudaSonum("Toote nimetus peab algama suure algustähega!");
      return;
    }

    if (nimiRef.current.value.length < 2) {
      muudaSonum("Toote nimetus peab olema vähemalt 2 tähemärki!");
      return;
    }

    muudaSonum("");
  }

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="nimi">Toote nimi</label> <br />
      <input onChange={kontrolli} ref={nimiRef} id="nimi" type="text" /> <br />
      <label>Pilt</label> <br />
      <input ref={piltRef} type="text" /> <br />
      <label>Hind</label> <br />
      <input ref={hindRef} type="number" /> <br />
      <label>Keskus</label> <br />
      <input ref={keskusRef} type="text" /> <br />
      <label>Aktiivne</label> <br />
      <input ref={aktiivneRef} type="checkbox" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode