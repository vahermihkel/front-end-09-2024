import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
// import ostukorvFailist from "../../data/ostukorv.json";

function Ostukorv() {
  const { t } = useTranslation();
  const [tooted, muudaTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || []);

  const tyhjenda = () => {
    tooted.splice(0);
    muudaTooted(tooted.slice()); // HTMLi muutmiseks
    localStorage.setItem("ostukorv", JSON.stringify(tooted)); // salvestuseks
  }

  const kustuta = (index) => {
    tooted.splice(index,1);
    muudaTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  const arvutaKokku = () => {
    let summa = 0;
    tooted.forEach(toode => summa = summa + toode.hind);
    return summa;
  }

  return (
    <div>
      {tooted.length > 0 && <button onClick={tyhjenda}>{t("empty")}</button>}

      {tooted.length > 0 && <div>Tooteid kokku ostukorvis: {tooted.length} tk</div>}

      {tooted.map((toode, index) => 
        <div key={index}>
          {index}.
          {toode.nimi} - {toode.hind}€ 
          <button onClick={() => kustuta(index)}>x</button> 
        </div>)}

      {tooted.length === 0 &&
      <>
        <div>Ostukorv on tühi</div>
        <div>Mine tooteid lisama <Link to="/avaleht">avalehele</Link> </div>
      </>}

      {tooted.length > 0 && <div>Summa: {arvutaKokku()}€</div>}

    </div>
  )
}

export default Ostukorv