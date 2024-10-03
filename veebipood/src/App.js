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

import Menyy from './components/Menyy';
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


function App() {
  return (
    <div className="App">
      {/* MENÜÜ ---> on igal lehel  nähtav */}

      <Menyy />

    
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
        <Route path='toode/:index' element={ <YksToode /> } />

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

// KOJU:
// Töötajad objektiks {nimi, tel, ametikoht, email}
// MuudaEsindus, MuudaTootaja
// Failid