import React, { useRef, useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");
  const nimiRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      muudaSonum("Tühja nimetusega ei saa toodet lisada!");
    } else {
      muudaSonum("Toode lisatud: " + nimiRef.current.value);
    }
  }

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="nimi">Toote nimi</label> <br />
      <input ref={nimiRef} id="nimi" type="text" /> <br />
      <button onClick={lisa}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode