import React, { useState } from 'react'

function KontaktAndmed() {
  const [showTel, muudaShowTel] = useState(true);
  // useState: document.getElementById("html_ID");
  // onClick: html_id.addEventListener("click", {})

  return (
    <div>
      {/* Variant1: */}
      {showTel === false && <button onClick={() => muudaShowTel(true)}>Näita meie veebipoe telefoninumbrit</button>}
      {showTel === true && <button onClick={() => muudaShowTel(false)}>Näita meie veebipoe emaili</button>}

      {/* Variant2: */}
      {/* <button onClick={() => muudaShowTel(!showTel)}>
        Näita meie veebipoe {showTel === true ? "emaili": "telefoninumbrit"}
      </button> */}

      {showTel === true && <div>5131231</div>}
      {showTel === false && <div>info@veebipood.ee</div>}
    </div>
  )
}

export default KontaktAndmed