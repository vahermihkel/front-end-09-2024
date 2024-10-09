import React, { useState } from 'react'
import tootedJSON from "../../data/tooted.json"
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import ostukorvJSON from "../../data/ostukorv.json";
import Button from '@mui/material/Button';

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
      <Button onClick={reset} variant="outlined">Reset</Button>
      {/* <button >Reset</button> */}
      <br /><br />
      <Button onClick={sorteeriKasvavalt} variant="text">Sorteeri kasvavalt</Button>
      {/* <button >Sorteeri kasvavalt</button> */}
      <Button onClick={sorteeriKahanevalt} variant="text">Sorteeri kahanevalt</Button>
      <Button onClick={sorteeriAZ} variant="text">Sorteeri A-Z</Button>
      <Button onClick={sorteeriZA} variant="text">Sorteeri Z-A</Button>
      <br /><br />
      <Button onClick={filtreeriAlgavadB} variant="contained">Filtreeri B tähega algavad</Button>
      {/* <button >Filtreeri B tähega algavad</button> */}
      <Button onClick={filtreeriAlgavadN} variant="contained">Filtreeri N tähega algavad</Button>
      <Button onClick={filtreeriAlgavadT} variant="contained">Filtreeri T tähega algavad</Button>
 
      <br /><br />
 
      <br /><br />
 
      {tooted.map((toode, index) => 
        <div key={index}>
          <img className={toode.aktiivne === true ? "pilt": "pilt-mitteaktiivne"} src={toode.pilt} alt="" />
          {toode.nimi} - {toode.hind}€
          <Link to={"/toode/" + toode.nimi}>
            <button>Vt lähemalt</button>
          </Link>
          {toode.aktiivne === true && <button onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>}
        </div>
        )}
    </div>
 
 
  )
}
 
export default Tooted