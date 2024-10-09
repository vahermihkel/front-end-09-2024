import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json"
 
function YksToode() {
  // useParams --> tema loogeliste sulgude sees olev nimi
  //              peab olema sama, mis App.js sees : järel

  // KUI: path='toode/:tere'
  // SIIS: const {tere} = useParams();

const {tooteNimi} = useParams();
const leitud = tootedFailist.find(toode => toode.nimi === tooteNimi);

// index (järjekorranumbri) järgi leidmiseks:
// const leitud = tootedFailist[index];

// Aga kui tahan mingi omaduse kaudu leida.
// Kellel on nimi selline. Kellel on hind täpselt selline.
// .find();
 
  if (leitud === undefined) {
    return <div>Toodet ei leitud!</div>
  }
 
  return (
    <div>
      {/* <div>Järjekord: {index}</div> */}
      {/* <div>URL-st tulev nimi: {tooteNimi}</div> */}
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      <div>Toote asukoht: {leitud.keskus}</div>
      <div>Toote pilt: {leitud.pilt}</div>
      {leitud.aktiivne === false && <i>Toode on mitteaktiivne</i>}
    </div>
  )
}
 
export default YksToode