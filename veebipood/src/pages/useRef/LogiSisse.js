import React, { useRef } from 'react'
import { ToastContainer, toast } from 'react-toastify';

function LogiSisse() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const login = () => {

    if (passwordRef.current.value !== "Midagi") {
      toast.error("Parool ei ole korrektne!");
      return;
    }

    toast.success("Edukalt sisselogitud");
  }

  return (
    <div>
      <label>Email</label> <br />
      <input ref={emailRef} type="text" /> <br />
      <label>Password</label> <br />
      <input ref={passwordRef} type="password" /> <br />
      <button onClick={login}>Logi sisse</button><br />

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="dark"
        />
    </div>
  )
}

export default LogiSisse