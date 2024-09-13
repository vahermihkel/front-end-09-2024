import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

// const [nr1, setNr1] = useState("1");
// Number(nr1) * Number(nr2)

function Registreeru() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const registreeri = () => {
    if (emailRef.current.value === "") {
      // veateade
      toast.error("E-mail on tühjaks jäänud!");
      return; // lõpetab funktsiooni
    }

    if (emailRef.current.value.includes("@") === false) {
      toast.error("E-mail on vigane!");
      return;
    }

    if (passwordRef.current.value.length !== 6) {
      toast.error("Parool pole 6 märki pikk!");
      return;
    }
// Midagi12
                      // midagi12               ===       Midagi12
    if (passwordRef.current.value.toLowerCase() === passwordRef.current.value) {
      toast.error("Parool ei sisalda suurt tähte!");
      return;
    }

    toast.success("Edukalt registreerutud");
 }

  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <button onClick={registreeri}>Registreeri</button><br />

      <ToastContainer />
    </div>
  )
}

export default Registreeru