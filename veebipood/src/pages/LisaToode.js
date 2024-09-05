import React, { useState } from 'react'

function LisaToode() {
  const [sonum, muudaSonum] = useState("Lisa uus toode!");

  return (
    <div>
      <div>{sonum}</div>
      <label htmlFor="nimi">Toote nimi</label> <br />
      <input id="nimi" type="text" /> <br />
      <button onClick={() => muudaSonum("Toode lisatud!")}>Lisa</button> <br />
    </div>
  )
}

export default LisaToode