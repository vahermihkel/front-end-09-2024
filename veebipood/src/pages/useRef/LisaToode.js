import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa toodet lisada!");
      return;
    } 
    
    muudaSonum("Toode lisatud: " + nimiRef.current.value);
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
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode