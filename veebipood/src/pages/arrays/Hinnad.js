import React, { useState } from 'react'

function Hinnad() {
  const [hinnad, muudaHinnad] = useState([20, 8, 150, 3, 123, 32, 9, 1111, 71, 55]);

  const reset = () => {
    muudaHinnad([20, 8, 150, 3, 123, 32, 9, 1111, 71, 55]);
  }

  const sorteeriKasvavalt = () => {
    hinnad.sort((a, b) => a - b);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriKahanevalt = () => {
    hinnad.sort((a, b) => b - a);
    muudaHinnad(hinnad.slice());
  }

  const sorteeriAZ = () => {
    hinnad.sort();
    muudaHinnad(hinnad.slice());
  }

  const sorteeriZA = () => {
    hinnad.sort();
    hinnad.reverse();
    muudaHinnad(hinnad.slice());
  }

  const filtreeriSuuremadKui20 = () => {
    const vastus = hinnad.filter(hind => hind > 20);
    muudaHinnad(vastus);
  }

  const filtreeriVaiksemadKui100 = () => {
    const vastus = hinnad.filter(hind => hind < 100);
    muudaHinnad(vastus);
  }

  return (
    <div>
      <br />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <br /><br />
      <button onClick={filtreeriSuuremadKui20}>Filtreeri suuremad kui 20</button>
      <button onClick={filtreeriVaiksemadKui100}>Filtreeri väiksemad kui 100</button>
      <br /><br />

      {hinnad.map(hind => <button>{hind}</button>)}
    </div>
  )
}

export default Hinnad