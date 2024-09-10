import React, { useRef, useState } from 'react'

function Kinkekaart() {
  // Näide: keel ja esindused
  const [summa, muudaSumma] = useState(20);
  const [kogus, muudaKogus] = useState(1);
  const emailRef = useRef();
  const [sonum, muudaSonum] = useState("");

// ternary operator KÜSIME,KAS ON TÕSI ? KUI_ON :  KUI_POLE
// if (summa === 20) {
//    "summa-aktiivne"
//} else {
//    undefined
//}

  // function lisaOstukorvi() {

  // }

  const lisaOstukorvi = () => {
    if (emailRef.current.value.includes("@") === false) {
      muudaSonum("Email ei ole õigel kujul");
    } else {
      muudaSonum("Kinkekaardid summas " + (summa * kogus) + "€ lisatud ostukorvi")
    }
  }

  return (
    <div>
      <button className={summa === 20 ? "summa-aktiivne" : undefined} onClick={() => muudaSumma(20)}>20</button>
      <button className={summa === 50 ? "summa-aktiivne" : undefined} onClick={() => muudaSumma(50)}>50</button>
      <button className={summa === 100 ? "summa-aktiivne" : undefined} onClick={() => muudaSumma(100)}>100</button>
      <div>Kinkekaart {summa} €</div>   
      <br /><br />

      <button disabled={kogus === 1} onClick={() => muudaKogus(kogus - 1)}>-</button>
      <span>{kogus}</span>
      <button onClick={() => muudaKogus(kogus + 1)}>+</button>

      <br /> <br />


      <div>Kokku: {summa * kogus} €</div>

      <br /><br />

      <div>{sonum}</div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <button onClick={() => lisaOstukorvi()}>Lisa ostukorvi</button> <br />
    </div>
  )
}

export default Kinkekaart