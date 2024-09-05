import React, { useState } from 'react'

function Seaded() {
  const [keel, muudaKeel] = useState("est");

  return (
    <div>
      <button onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button onClick={() => muudaKeel("eng")}>To English</button>
      <button onClick={() => muudaKeel("rus")}>Pycckuj</button>
      <div>Hetkel aktiivne keel: {keel}</div>

      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на русском языке</div>}

      {keel !== "est" && <div>Copyright</div>}
    </div>
  )
}

export default Seaded