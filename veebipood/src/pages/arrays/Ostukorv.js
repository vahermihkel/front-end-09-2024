import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

function Ostukorv() {
  const { t } = useTranslation();
  const [tooted, muudaTooted] = useState(["Coca", "Fanta", "Sprite"]);

  const tyhjenda = () => {
    tooted.splice(0);
    muudaTooted(tooted.slice());
  }

  const kustuta = (index) => {
    tooted.splice(index,1);
    muudaTooted(tooted.slice());
  }

  // const kustutaTeine = () => {
  //   tooted.splice(1,1);
  //   muudaTooted(tooted.slice());
  // }

  // const kustutaKolmas = () => {
  //   tooted.splice(2,1);
  //   muudaTooted(tooted.slice());
  // }

  return (
    <div>
      {tooted.length > 0 && <button onClick={tyhjenda}>{t("empty")}</button>}

      {tooted.length > 0 && <div>Tooteid kokku ostukorvis: {tooted.length} tk</div>}

      {tooted.map((toode, index) => 
        <div>
          {index}.
          {toode} 
          <button onClick={() => kustuta(index)}>x</button> 
        </div>)}

      {tooted.length === 0 &&
      <>
        <div>Ostukorv on tühi</div>
        <div>Mine tooteid lisama <Link to="/avaleht">avalehele</Link> </div>
      </>}
    </div>
  )
}

export default Ostukorv