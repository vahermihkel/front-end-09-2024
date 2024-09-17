import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

// const [nr1, setNr1] = useState("1");
// Number(nr1) * Number(nr2)

function Registreeru() {
  const emailRef = useRef();
  const passwordRef = useRef();

  // viies täht peab olema "n":
  // 01234
  // admin
  // aaron
  // ada@nz.com

  const registreeri = () => {
    if (emailRef.current.value === "") {
      // veateade
      toast.error("E-mail on tühjaks jäänud!");
      return; // lõpetab funktsiooni
    }

    // lahendus nr 1:             5-s täht "n"
    if (emailRef.current.value.startsWith("n", 4) === false) {
      toast.error('1. Viies täht peab olema "n"!');
      return;
    }

    // lahendus nr 2:             5-s täht "n"
    if (emailRef.current.value.charAt(4) !== "n") {
      toast.error('2. Viies täht peab olema "n"!');
      return;
    }

    // lahendus nr 3:             5-s täht "n"
    if (emailRef.current.value.at(4) !== "n") {
      toast.error('3. Viies täht peab olema "n"!');
      return;
    }

    // lahendus nr 4:             5-s täht "n"
    if (emailRef.current.value[4] !== "n") {
      toast.error('4. Viies täht peab olema "n"!');
      return;
    }


    if (emailRef.current.value.includes("@") === false) {
      toast.error("E-mail on vigane!");
      return;
    }

    if (emailRef.current.value.startsWith("a") === false) {
      toast.error('E-mail peab algama "a" tähega!');
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

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        />
    </div>
  )
}

export default Registreeru