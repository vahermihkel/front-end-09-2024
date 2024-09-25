import React, { useRef, useState } from 'react'
import esindusedFailist from "../../data/esindused.json"

// .sort((a,b) =>  a - b  )
// lahutamistehe - paneb numbrid järjekorda

// .sort((a,b) =>  a.localeCompare(b)  )
// locale - keel
// Compare - võrdle

function Esindused() {
  const [linn, muudaLinn] = useState("Tallinn");
  const [keskused, muudaKeskused] = useState(esindusedFailist.slice());
  const otsinguRef = useRef();

  const reset = () => {
    muudaKeskused(esindusedFailist.slice());
  }

  const sorteeriAZ = () => {
    //keskused.sort();
    keskused.sort((a,b) => a.localeCompare(b, "et"));
    muudaKeskused(keskused.slice()); // HTMLi uuendamiseks
  }

  const sorteeriZA = () => {
    //keskused.sort();
    //keskused.reverse();
    keskused.sort((a,b) => b.localeCompare(a, "et"));
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedKasvavalt = () => {
    keskused.sort((a,b) => a.length - b.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedKahanevalt = () => {
    keskused.sort((a,b) => b.length - a.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    keskused.sort((a,b) => a[2].localeCompare(b[2]));
    muudaKeskused(keskused.slice());
  }

  const filtreeriEgaLoppevad = () => {
    // filtreerimisel tuleb teha uus muutuja, kuhu sisse lähevad alles jäetud elemendid
    const vastus = esindusedFailist.filter(keskus => keskus.endsWith("e"));
    muudaKeskused(vastus);
  }

  const filtreeriVah7Tahelised = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.length >= 7);
    muudaKeskused(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.length === 9);
    muudaKeskused(vastus);
  }

  const filtreeriIsSisaldavad = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.includes("is"));
    muudaKeskused(vastus);
  }

  const filtreeriNeljasTahtS = () => {
    const vastus = esindusedFailist.filter(keskus => keskus[3] === "s");
    muudaKeskused(vastus);
  }

  const otsi = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.includes(otsinguRef.current.value));
    muudaKeskused(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;        //=> summa += keskus.length     ---> liida iseendale midagi juurde
    keskused.forEach(keskus => summa = summa + keskus.length);
    return summa;
  }

  return (
    <div>
      <div>Esinduse nime tähtede arv kokku: {arvutaKokku()} tk</div>

      <input ref={otsinguRef} onChange={otsi} type="text" />
      {/* <button onClick={otsi}>Otsi</button> */}
      <br /><br />

      <div>Aktiivne linn: {linn}</div>
      <button className={linn === "Tallinn" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tallinn")}>Tallinn</button>
      <button className={linn === "Tartu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Tartu")}>Tartu</button>
      <button className={linn === "Narva" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Narva")}>Narva</button>
      <button className={linn === "Pärnu" ? "linn-aktiivne" : undefined} onClick={() => muudaLinn("Pärnu")}>Pärnu</button>

      {linn === "Tallinn" && 
        <div>
          <button onClick={reset}>Reset</button>
          <br /><br />

          <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
          <button onClick={sorteeriZA}>Sorteeri Z-A</button>
          <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähtede arv kasvavalt</button>
          <button onClick={sorteeriTahedKahanevalt}>Sorteeri tähtede arv kahanevalt</button>
          <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht A-Z</button>
          <br />
          <button onClick={filtreeriEgaLoppevad}>Filtreeri E'ga lõppevad</button>
          <button onClick={filtreeriVah7Tahelised}>Filtreeri vähemalt 7 tähelised</button>
          <button onClick={filtreeri9Tahelised}>Filtreeri täpselt 9 tähelised</button>
          <button onClick={filtreeriIsSisaldavad}>Filtreeri lühendit 'is' sisaldavad</button>
          <button onClick={filtreeriNeljasTahtS}>Filtreeri kellel on neljas täht 's'</button>
          <br />
          {keskused.map(keskus => <div>{keskus} <button>Vt lähemalt</button> </div>)}
          {/* <div>Ülemiste</div>
          <div>Rocca al Mare</div>
          <div>Magistrali</div>
          <div>Vesse</div>
          <div>Kristiine</div>
          <div>Järveotsa</div> */}
        </div>}

      {linn === "Tartu" && 
        <div>
          <div>Raatuse</div>
          <div>Lõunakeskus</div>
        </div>}

      {linn === "Narva" && <div>Fama</div>}

      {linn === "Pärnu" && <div>Port Artur 2</div>}
    </div>
  )
}

export default Esindused