import React, { useState } from 'react'
import tootedJSON from "../../data/tooted.json"
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ostukorvJSON from "../../data/ostukorv.json";

// sorteeriAZ -> tehtud
// sorteeriZA -> tegemata

// sorteeriTahedKahanevalt -> tehtud
// sorteeriTahedKasvavalt -> tegemata

// otsing

// tähemärkide kokkuarvutus
 
function Tooted() {
  const [tooted, muudaTooted] =  useState(tootedJSON.slice());
  const otsingRef = useRef();
 
  const reset = () => {
    muudaTooted (tootedJSON.slice());
  }
 
 
  const sorteeriKasvavalt = () => {
    tooted.sort((a, b) => a.nimi.length - b.nimi.length);
    muudaTooted(tooted.slice());
  }
  const sorteeriKahanevalt = () => {
    tooted.sort((a, b) => b.nimi.length - a.nimi.length);
    muudaTooted(tooted.slice());
  }

  const sorteeriAZ = () => {
    tooted.sort((a,b) => a.nimi.localeCompare(b.nimi));
    muudaTooted(tooted.slice());
  }

  const sorteeriZA = () => {
    tooted.sort((a,b) => b.nimi.localeCompare(a.nimi));
    muudaTooted(tooted.slice());
  }

  const filtreeriAlgavadB = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi[0] === "B")
    muudaTooted(vastus);
  }
 
 
  const filtreeriAlgavadN = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi[0] === "N")
    muudaTooted(vastus);
  }
  const filtreeriAlgavadT = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi[0] === "T")
    muudaTooted(vastus);
  }
  const otsi = () => {
    const vastus = tootedJSON.filter(toode => toode.nimi.includes(otsingRef.current.value) );
    muudaTooted(vastus);
  }
  const arvutaKokku = () => {
    let summa = 0; //=> summa += keskus.lenght... ---> liida vanale summale
    tooted.forEach(toode => summa =  summa + toode.nimi.length);
  return summa;
  }

  const lisaOstukorvi = (lisatudToode) => {
    ostukorvJSON.push(lisatudToode);
  }

 
  return (
    <div>
       <div>Toodete nimetähtede arv kokku: {arvutaKokku()} tk</div>
      <input ref={otsingRef} onChange={otsi} type="text" />
 
 
 
<br />
      <button onClick={reset}>Reset</button>
      <br /><br />
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriAZ}>Sorteeri A-Z</button>
      <button onClick={sorteeriZA}>Sorteeri Z-A</button>
      <button onClick={filtreeriAlgavadB}>Filtreeri B tähega algavad</button>
      <button onClick={filtreeriAlgavadN}>Filtreeri N tähega algavad</button>
      <button onClick={filtreeriAlgavadT}>Filtreeri T tähega algavad</button>
 
      <br /><br />
 
      <br /><br />
 
      {tooted.map((toode, index) => 
        <div>
          {toode.nimi} - {toode.hind}€
          <Link to={"/toode/" + index}>
            <button>Vt lähemalt</button>
          </Link>
          <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>
        )}
    </div>
 
 
  )
}
 
export default Tooted