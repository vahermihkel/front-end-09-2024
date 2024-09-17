import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, muudaHinnad] = useState([20, 8, 150, 3, 123, 32, 9, 1111, 71, 55]);

  return (
    <div>
      {hinnad.map(hind => <button>{hind}</button>)}
    </div>
  )
}

export default Hinnad