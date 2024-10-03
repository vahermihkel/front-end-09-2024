// Kodus:
// 6 faili:
// HaldaTootajad.js TEHTUD ---> kustutamine + lisamine. faili tõstmised. otsing
// HaldaTooted.js  TEHTUD ---> kustutamine + lisamine. faili tõstmised. otsing
// Testimiseks: kustutage 1 element ja vaadake "Tootajad.js" või "Toode.js"
//            lehelt, kas ta kustus
 
// YksTootaja TEHTUD
// YksToode TEHTUD
// MuudaTootaja TEHTUD
// MuudaToode TEHTUD 
 
// Kust läheme: Halda lehelt (muuda) või Tooted.js / Tootajad.js
// <Link> import  "react-router-dom"
// Link to="" <-- siin peab olema kaldkriips ees ja kaldkriips järel
 
// App.js lehel:
// Vaadata, et :kooloniga oleks muutuja tähistatud
// Et URL kuhu minnakse, ühtiks sellega, mis on App.js sees (muidu on 404)
 
// Kuhu jõuame:
// useParams import "react-router-dom"
// import tootajadFailist õigesti
 
//JUURDE TEHA: YksToode j6udmine. tooted.js lehelt. hinnad,tootajad failis.VT lahemalt vaade 
// Tooted.js ja Tootajad.js t2htede kokkuarvutus nagu Esindused.js failis TEHTUD
// Tooted.js Tootajad.js search bar teha.  TEHTUD
 
 
import React, { useRef } from 'react'
import { Link, useParams } from 'react-router-dom';
import tootedJSON from "../../data/tooted.json";
 
function MuudaToode() {
  const{index} = useParams ();
  const leitud = tootedJSON[index];
  const nimiRef = useRef();
  const hindRef = useRef();
  const aktiivneRef = useRef();
  const keskusRef = useRef();
  const piltRef = useRef();

  const muuda = () => {
    tootedJSON[index] = {
      "nimi": nimiRef.current.value, 
      "hind": Number(hindRef.current.value),  // Number
      "aktiivne": aktiivneRef.current.checked, // Boolean
      "keskus": keskusRef.current.value, 
      "pilt": piltRef.current.value
    };
  }
 
  return (
    <div>
      <label>Nimi</label> <br />
      <input type="text" ref={nimiRef} defaultValue={leitud.nimi} /> <br />
      <label>Hind</label> <br />
      <input type="number" ref={hindRef} defaultValue={leitud.hind} /> <br />
      <label>Keskus</label> <br />
      <input type="text" ref={keskusRef} defaultValue={leitud.keskus} /> <br />
      <label>Pilt</label> <br />
      <input type="text" ref={piltRef} defaultValue={leitud.pilt} /> <br />
      <label>Aktiivne</label> <br />
      <input type="checkbox" ref={aktiivneRef} defaultChecked={leitud.aktiivne} /> <br />
      <Link to="/halda-tooted">
        <button onClick={muuda}>Muuda</button>
      </Link>
    </div>
  )
}
 
export default MuudaToode