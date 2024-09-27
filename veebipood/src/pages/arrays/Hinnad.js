import React, { useRef, useState } from 'react'
import hinnadJSON from "../../data/hinnad.json"
import { Link } from 'react-router-dom';

function Hinnad() {
  const [hinnad, muudaHinnad] = useState(hinnadJSON);
  const otsingRef = useRef();

  const reset = () => {
    muudaHinnad(hinnadJSON);
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
    const vastus = hinnadJSON.filter(hind => hind > 20);
    muudaHinnad(vastus);
  }

  const filtreeriVaiksemadKui100 = () => {
    const vastus = hinnadJSON.filter(hind => hind < 100);
    muudaHinnad(vastus);
  }

  // const [summa2, muudaSumma] = useState(0);

// const --> võrdusmärgiga ei saa uut väärtust anda
// let --> luba anda uus väärtus võrdusmärgiga

  const liidaKokku = () => {
    let summa = 0;
    // summa = summa + 20;
    // summa = summa + 8;
    // summa = summa + 150;
    // summa = summa + 3;
    hinnad.forEach(hind => summa = summa + hind);

    // muudaSumma(summa);
    return summa;
  }

  // onClick={lisa}  --> muutujat ei saa funktsiooni kaasa
  // onClick={() => kustuta(index)} --> muutuja saadan funktsiooni
  //xx onClick={liidaKokku()} ---> see on vale, sest ta ei oota klikki ära, vaid paneb kohe käima

  // <div>{liidaKokku()}</div> --> paneb funktsiooni koheselt käima
  //xx <div>{liidaKokku}</div> --> keegi ei käivita
  //xx <div>{() => liidaKokku()}</div> --> keegi ei käivita

  const otsi = () => {
    const vastus = hinnadJSON.filter(hind => String(hind).includes(otsingRef.current.value) );
    muudaHinnad(vastus);
  }

  return (
    <div>
      <input ref={otsingRef} onChange={otsi} type="text" />
      {/* <button onClick={otsi}>Otsi</button> */}
      <div>Minu hindade kogusumma: {liidaKokku()} €</div>
      {/* <button onClick={liidaKokku}>Uuenda hindade kogusumma</button> */}
      <br />  
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

      {hinnad.map((hind, index) => 
      <Link to={"/hind/" + index}>
        <button>{hind}</button>
      </Link>
      )}
    </div>
  )
}

export default Hinnad