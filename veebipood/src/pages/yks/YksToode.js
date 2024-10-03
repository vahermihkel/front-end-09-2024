import React from 'react'
import { useParams } from 'react-router-dom'
import tootedFailist from "../../data/tooted.json"
 
function YksToode() {
const{index} = useParams();
const leitud = tootedFailist[index];
 
 
  return (
    <div>
      <div>Järjekord: {index}</div>
      <div>Toote nimi: {leitud.nimi}</div>
      <div>Toote hind: {leitud.hind}</div>
      <div>Toote asukoht: {leitud.keskus}</div>
      <div>Toote pilt: {leitud.pilt}</div>
      {leitud.aktiivne === false && <i>Toode on mitteaktiivne</i>}
    </div>
  )
}
 
export default YksToode