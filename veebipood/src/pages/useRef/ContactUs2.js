import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

function ContactUs2() {
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    const data = {
      "name": nameRef.current.value,
      "email": emailRef.current.value,
      "message": messageRef.current.value
    }

    emailjs
      .send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, {
        publicKey: 'YOUR_PUBLIC_KEY',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div>
      <label>Name</label> <br />
      <input ref={nameRef} type="text" name="user_name" /> <br />
      <label>Email</label> <br />
      <input ref={emailRef} type="email" name="user_email" /> <br />
      <label>Message</label> <br />
      <textarea ref={messageRef} name="message" /> <br />
      <button onClick={sendEmail}>Send</button> <br />
    </div>
  );
};

export default ContactUs2