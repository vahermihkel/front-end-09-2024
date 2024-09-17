import React, { useRef, useState } from 'react'
import KontaktAndmed from '../../components/KontaktAndmed';

function Kinkekaart() {
  // Näide: keel ja esindused
  const [summa, muudaSumma] = useState(20);
  const [kogus, muudaKogus] = useState(1);
  const emailRef = useRef();
  const [sonum, muudaSonum] = useState("");
  const emailSendRef = useRef();
  const [isSend, muudaSend] = useState(false);

// ternary operator KÜSIME,KAS ON TÕSI ? KUI_ON :  KUI_POLE
// if (summa === 20) {
//    "summa-aktiivne"
//} else {
//    undefined
//}

  // function lisaOstukorvi() {

  // }

  const lisaOstukorvi = () => {
    if (emailSendRef.current.checked === false) {
      muudaSonum("Kinkekaardid summas " + (summa * kogus) + "€ lisatud ostukorvi");
      return;
    }

    if (emailRef.current.value.includes("@") === false) {
      muudaSonum("Email ei ole õigel kujul");
    } else {
      muudaSonum("Kinkekaardid summas " + (summa * kogus) + "€ lisatud ostukorvi")
    }
  }

  const muudaEmailSend = () => {
    //  kui on checkbox, siis pole .current.value  VAID  .current.checked
    muudaSend(emailSendRef.current.checked);
  }

  return (
    <div>
      <a target="_blank" rel="noreferrer" href="https://www.npmjs.com/package/react-toastify">Toastify dokumentatsioon</a>

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

      <label htmlFor="emailSend">Saada e-mailile</label>
    	<input id="emailSend" onClick={muudaEmailSend} ref={emailSendRef} type="checkbox" />
      <br /><br />
      <div>{sonum}</div>
      {isSend === true && <>
        <label>Email</label> <br />
        <input ref={emailRef} type="text" /> <br />
      </>}
      <button onClick={() => lisaOstukorvi()}>Lisa ostukorvi</button> <br />
    
      <br /><br />
      
      <KontaktAndmed />

    </div>
  )
}

export default Kinkekaart