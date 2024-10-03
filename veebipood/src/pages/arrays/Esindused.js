import React, { useRef, useState } from 'react'
import esindusedFailist from "../../data/esindused.json"
import { Link } from 'react-router-dom';

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
    keskused.sort((a,b) => a.nimi.localeCompare(b.nimi, "et"));
    muudaKeskused(keskused.slice()); // HTMLi uuendamiseks
  }

  const sorteeriZA = () => {
    //keskused.sort();
    //keskused.reverse();
    keskused.sort((a,b) => b.nimi.localeCompare(a.nimi, "et"));
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedKasvavalt = () => {
    keskused.sort((a,b) => a.nimi.length - b.nimi.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriTahedKahanevalt = () => {
    keskused.sort((a,b) => b.nimi.length - a.nimi.length);
    muudaKeskused(keskused.slice());
  }

  const sorteeriKolmasTahtAZ = () => {
    keskused.sort((a,b) => a.nimi[2].localeCompare(b.nimi[2]));
    muudaKeskused(keskused.slice());
  }

  const filtreeriEgaLoppevad = () => {
    // filtreerimisel tuleb teha uus muutuja, kuhu sisse lähevad alles jäetud elemendid
    const vastus = esindusedFailist.filter(keskus => keskus.nimi.endsWith("e"));
    muudaKeskused(vastus);
  }

  const filtreeriVah7Tahelised = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.nimi.length >= 7);
    muudaKeskused(vastus);
  }

  const filtreeri9Tahelised = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.nimi.length === 9);
    muudaKeskused(vastus);
  }

  const filtreeriIsSisaldavad = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.nimi.includes("is"));
    muudaKeskused(vastus);
  }

  const filtreeriNeljasTahtS = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.nimi[3] === "s");
    muudaKeskused(vastus);
  }

  const otsi = () => {
    const vastus = esindusedFailist.filter(keskus => keskus.nimi.includes(otsinguRef.current.value));
    muudaKeskused(vastus);
  }

  const arvutaKokku = () => {
    let summa = 0;        //=> summa += keskus.length     ---> liida iseendale midagi juurde
    keskused.forEach(keskus => summa = summa + keskus.nimi.length);
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
          {keskused.map((keskus, index) => 
            <div>
              {keskus.nimi}: 
              {keskus.tel}
              <Link to={"/esindus/" + index}>
                <button>Vt lähemalt</button> 
              </Link>
            </div>)}
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