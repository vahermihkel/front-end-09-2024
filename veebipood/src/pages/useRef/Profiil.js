import React, { useRef, useState } from 'react'

// useRef --> inputist lugemiseks
// useState --> HTMLs muutmiseks

function Profiil() {
  const aadressRef = useRef();
  const emailRef = useRef();
  const telefonRef = useRef();
  const [aadressState, setAadress] = useState("Sisestamata");
  const [emailState, setEmail] = useState("Sisestamata");
  const [telefonState, setTelefon] = useState("Sisestamata");

  const sisestaAadress = () => {
    setAadress(aadressRef.current.value);
  }

  const sisestaEmail = () => {
    setEmail(emailRef.current.value);
  }

  const sisestaTelefon = () => {
    setTelefon(telefonRef.current.value);
    
    // setTelefon(Number(telefonRef.current.value) + Number(telefonRef.current.value));

    // setTelefon(+telefonRef.current.value + +telefonRef.current.value);
  }

  return (
    <div>
      <label>Aadress</label>
      <input ref={aadressRef} type="text" />
      <button onClick={sisestaAadress}>Sisesta</button>
      <div>Aadress on: {aadressState}</div>
      <br /><br />

      <label>Email</label>
      <input ref={emailRef} type="text" />
      <button onClick={sisestaEmail}>Sisesta</button>
      <div>Email on: {emailState}</div>
      <br /><br />

      <label>Telefon</label>
      <input ref={telefonRef} type="text" />
      <button onClick={sisestaTelefon}>Sisesta</button>
      <div>Telefon on: {telefonState}</div>
      <br /><br />
    </div>
  )
}

export default Profiil