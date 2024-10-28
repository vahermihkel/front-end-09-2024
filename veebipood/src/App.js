//import logo from "./logo.svg";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import Avaleht from './pages/useState/Avaleht';
import Seaded from './pages/useState/Seaded';
import NotFound from './pages/useState/NotFound';

import Kinkekaart from './pages/useRef/Kinkekaart';
import LisaToode from './pages/useRef/LisaToode';
import Profiil from './pages/useRef/Profiil';
import LogiSisse from './pages/useRef/LogiSisse';
import Registreeru from './pages/useRef/Registreeru';

import Esindused from './pages/arrays/Esindused';
import Ostukorv from './pages/arrays/Ostukorv';

// import Menyy from './components/Menyy';
import Hinnad from './pages/arrays/Hinnad';
import Tootajad from './pages/arrays/Tootajad';
import Tooted from './pages/arrays/Tooted';
import HaldaEsindused from './pages/halda/HaldaEsindused';
import HaldaHinnad from './pages/halda/HaldaHinnad';
import HaldaTootajad from './pages/halda/HaldaTootajad';
import HaldaTooted from './pages/halda/HaldaTooted';
import YksEsindus from './pages/yks/YksEsindus';
import YksHind from './pages/yks/YksHind';
import YksToode from './pages/yks/YksToode';
import YksTootaja from './pages/yks/YksTootaja';
import MuudaEsindus from './pages/muuda/MuudaEsindus';
import MuudaHind from './pages/muuda/MuudaHind';
import MuudaToode from './pages/muuda/MuudaToode';
import MuudaTootaja from './pages/muuda/MuudaTootaja';
import { ContactUs } from './pages/useRef/ContactUs';
import Admin from './pages/useState/Admin';
import Shops from './pages/useState/Shops';
import Menu from './components/Menu';
import { useState } from 'react';

function App() {
  // setProducts, setCart, setCategories
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkTheme"));

  const darkThemeTrue = () => {
    setDarkMode("true");
    localStorage.setItem("darkTheme", "true");
  }

  const darkThemeFalse = () => {
    setDarkMode("false");
    localStorage.setItem("darkTheme", "false");
  }

  return (     // if (darkMode===true) { "App-dark"} else {"App"}
    <div className={darkMode === "true" ? "App-dark" : "App"}>
      {/* MENÜÜ ---> on igal lehel  nähtav */}

      <button onClick={darkThemeTrue}>Dark</button>
      <button onClick={darkThemeFalse}>Light</button>
      <Menu />

      {/* <Menyy /> */}

    
    {/* localhost:3000/avaleht  --->   <div>Olen avalehel</div> */}
    {/* localhost:3000/osta-kinkekaart  --->   <div>Kinkekaart</div> */}

      <Routes>
        <Route path='' element={ <Navigate to="/avaleht" /> } />
        <Route path='avaleht' element={ <Avaleht/> } />
        <Route path='osta-kinkekaart' element={ <Kinkekaart /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='seaded' element={ <Seaded /> } />

        <Route path='profiil' element={ <Profiil /> } />
        <Route path='logi-sisse' element={ <LogiSisse /> } />
        <Route path='registreeru' element={ <Registreeru /> } />

        <Route path='esindused' element={ <Esindused /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='hinnad' element={ <Hinnad /> } />
        <Route path='tootajad' element={ <Tootajad /> } />
        <Route path='tooted' element={ <Tooted /> } />

        <Route path='halda-esindused' element={ <HaldaEsindused /> } />
        <Route path='halda-hinnad' element={ <HaldaHinnad /> } />
        <Route path='halda-tootajad' element={ <HaldaTootajad /> } />
        <Route path='halda-tooted' element={ <HaldaTooted /> } />

        <Route path='esindus/:index' element={ <YksEsindus /> } />
        <Route path='hind/:index' element={ <YksHind /> } />
        <Route path='tootaja' element={ <YksTootaja /> } />
        <Route path='toode/:tooteNimi' element={ <YksToode /> } />

        <Route path='muuda-esindus/:index' element={ <MuudaEsindus /> } />
        <Route path='muuda-hind/:index' element={ <MuudaHind /> } />
        <Route path='muuda-tootaja' element={ <MuudaTootaja /> } />
        <Route path='muuda-toode/:index' element={ <MuudaToode /> } />
        
        <Route path='kontakteeru' element={ <ContactUs /> } />
        <Route path='admin' element={ <Admin /> } />
        <Route path='shops' element={ <Shops /> } />

        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </div>
  );
}

export default App;

// runtime errors --> kood on õige, aga brauser ei suuda seda lugeda
// Failed to compile.
// Compiled with problems:
// koodis on viga, kokkupakkimisel

// warning --> kollane. leht töötab, aga oleme teinud midagi üleliigset

// 404 not found leht --> route
// puu, kuidas React töötab
// Routing uuesti üle

// usestate

// lokaalne pilt

// Single-Page Application   SPA

// N 12.09  11.00-14.15
// T 17.09   9.00-12.15
// checkbox kinkekaart.js lehel
// alamkomponedid ja nende vahetamine usestate abil

// N 19.09   9.00-12.15
// 7. K 25.09   9.00-12.15   forEach, onChange, kohe käimaminekul
// 8. R 27.09   9.00-12.15
// 9. E 30.09   9.00-12.15   react-i18next, Leaflet, BootStrap
// 10. N 03.10??   9.00-12.15   objekt: Muutmine, Ostukorv, Number/String/Boolean convert
// 11. 
// 12.           kodused ülesanded --> Webshop
// 13.
// 14.
// 15. 21.10
// 16. 24.10
// 17. 28.10
// 18. 06.11

// Lisamine läbi LisaToode.js

// KOJU:
// 1. Webshopi Wordi dokument lõpetada
// 2.a) mõni faili ülejäänud Wordi dokumentidest
// 2. Webshopi localStorage: tõlge, dark/light, ostukorv
// 3. Kõik ülejäänud Wordi dokumendid lõpetada

// 1. Haldas dünaamiline CSS
// 2. Keskus tuleks läbi dropdowni kui lisada uut toodet
// 3. API päringud -> Tarnija failid + pakiautomaadid


// Webshop:
// Products.jsx --> <Link to={"/product/" + product.title} siia juurde lisada väikseks/tühikud asendada
// Täpselt samasuguse asja peab tegema SingleProduct.jsx sees, kui otsitakse toodet