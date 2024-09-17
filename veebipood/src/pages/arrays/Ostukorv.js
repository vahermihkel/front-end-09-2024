import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Ostukorv() {
  const [tooted, muudaTooted] = useState(["Coca", "Fanta", "Sprite"]);

  return (
    <div>
      {tooted.map(toode => <div>{toode}</div>)}
      <div>Ostukorv on tühi</div>
      <div>Mine tooteid lisama <Link to="/avaleht">avalehele</Link> </div>
    </div>
  )
}

export default Ostukorv