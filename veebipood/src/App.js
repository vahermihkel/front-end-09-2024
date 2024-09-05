//import logo from "./logo.svg";
import './App.css';
import {Route, Routes} from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';
import NotFound from './pages/NotFound';
import Menyy from './components/Menyy';

function App() {
  return (
    <div className="App">
      {/* MENÜÜ ---> on igal lehel  nähtav */}

      <Menyy />

    
    {/* localhost:3000/avaleht  --->   <div>Olen avalehel</div> */}
    {/* localhost:3000/osta-kinkekaart  --->   <div>Kinkekaart</div> */}

      <Routes>
        <Route path='avaleht' element={ <Avaleht/> } />
        <Route path='osta-kinkekaart' element={ <Kinkekaart /> } />
        <Route path='esindused' element={ <Esindused /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='seaded' element={ <Seaded /> } />
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
