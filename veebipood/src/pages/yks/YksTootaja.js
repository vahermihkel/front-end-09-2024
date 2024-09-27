import React from 'react'

// Kodus:
// 6 faili:
// HaldaTootajad.js ---> kustutamine + lisamine. faili tõstmised. otsing
// HaldaTooted.js ---> kustutamine + lisamine. faili tõstmised. otsing
// Testimiseks: kustutage 1 element ja vaadake "Tootajad.js" või "Toode.js"
//            lehelt, kas ta kustus

// YksTootaja
// YksToode
// MuudaTootaja
// MuudaToode

// Kust läheme: Halda lehelt (muuda) või Tooted.js / Tootajad.js
// <Link> import  "react-router-dom"
// Link to="" <-- siin peab olema kaldkriips ees ja kaldkriips järel

// App.js lehel:
// Vaadata, et :kooloniga oleks muutuja tähistatud
// Et URL kuhu minnakse, ühtiks sellega, mis on App.js sees (muidu on 404)

// Kuhu jõuame:
// useParams import "react-router-dom"
// import tootajadFailist õigesti

function YksTootaja() {
  return (
    <div>YksTootaja</div>
  )
}

export default YksTootaja