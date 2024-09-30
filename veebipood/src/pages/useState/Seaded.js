import React, { useState } from 'react'

// kollane - funktsioon. lõppeb sulgudega
// tumesinine - liigitus. function, const JS. button, div, input HTML-s.
// tavaline sinine - muutuja, meie poolt loodud
// helesinine - JS: võti, programmi antud muutuja: console.log()
//            HTML: elemendi atribuut. onClick, className, src, type
// oranž - jutumärkides väärtus
// heleroheline - numbriline väärtus
// roheline suure tähega HTMLs - imporditud HTMLi. 
// tumeroheline - kommentaar
// valge - märgid: punkt, semikoolon, koma, võrdusmärk, küsimärk, koolon, hüüumärk, suurem/väiksem
// lilla - käsklus: import, export, return, if, else. sissekirjutatud.
// sulud värvuvad erinevalt: kollane, lilla, sinine --> tähendust pole.
//{{{{{{{{{{{{{{{[[[[[((((({})))))]]]]]}}}}}}}}}}}}}}}

// () =>  - funktsiooni tähis
// ()     - käivitab funktsiooni. muutujate grupeerimine .map((toode, index) =>)
// []     - array. ka useState sees on array.
// {}     - koodiblokk, funkts algus ja lõpp. if algus ja lõpp. HTMLs JavaScripti blokk.
//          objekti tähistus
// =      - väärtuse andmiseks
// ===    - kontroll, kas vasak ja parem pool on identsed
// !==      - ei võrdu
// !boolean - väärtuse tagurpidi keeramine
// !        - teistpidi tegemine
// ? :      - ternary operator e lühendatud if/else. KAS_ON_TÕSI ? KUI_ON : KUI_POLE
// >=   <=   <   >   - suurem-võrdne, väiksem-võrdne, väiksem, suurem
// =>       - nool, mille järgselt tehakse midagi
// ""  ''   - pole vahet, kas kahekordsed või ühekordsed jutumärgid
// ;        - rea lõpetamise tähis
// .        - mingi funktsionaalsuse või omaduse välja kutsumine
//              "sõna".endsWith("")       "sõna".length
//            ["s", "a"].sort()         ["s", "a"].length
// &&       - dünaamiline väljakuvamine, kas näidatakse või mitte HTMLs

function Seaded() {
  // const [näide, muudeNäide] = useState(999913123);

  const [keel, muudaKeel] = useState("est");

  console.log("");
  localStorage.getItem("");

  return (
    <div>
      <button className={keel === "est" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("est")}>Eesti keelseks</button>
      <button className={keel === "eng" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("eng")}>To English</button>
      <button className={keel === "rus" ? "keel-aktiivne": "keel"} onClick={() => muudaKeel("rus")}>Pycckuj</button>
      <div>Hetkel aktiivne keel: {keel}</div>

      {keel === "est" && <div>Leht on eesti keelne</div>}
      {keel === "eng" && <div>Page is in English</div>}
      {keel === "rus" && <div>Cтpaницa на русском языке</div>}

      {keel !== "est" && <div>Copyright</div>}
    </div>
  )
}

export default Seaded