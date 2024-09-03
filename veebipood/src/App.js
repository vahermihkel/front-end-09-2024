//import logo from "./logo.svg";
import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Avaleht from './pages/Avaleht';
import Kinkekaart from './pages/Kinkekaart';
import Esindused from './pages/Esindused';
import Ostukorv from './pages/Ostukorv';
import LisaToode from './pages/LisaToode';
import Seaded from './pages/Seaded';

function App() {
  return (
    <div className="App">
      {/* MENÜÜ ---> on igal lehel  nähtav */}

      <Link to="avaleht">
        <img className="pilt" src="https://estonia.ee/wp-content/uploads/nobe_netist_4.jpg" alt="" />
      </Link>

      <Link to="osta-kinkekaart">
        <button className="nupp">Kinkekaart</button>
      </Link>

      <Link to="esindused">
        <button className="nupp">Esindused</button>
      </Link>

      <Link to="ostukorv">
        <button className="nupp">Ostukorv</button>
      </Link>

      <Link to="lisa-toode">
        <button className="nupp">Lisa toode</button>
      </Link>

      <Link to="seaded">
        <button className="nupp">Seaded</button>
      </Link>

    
    {/* localhost:3000/avaleht  --->   <div>Olen avalehel</div> */}
      <Routes>
        <Route path='avaleht' element={ <Avaleht/> } />
        <Route path='osta-kinkekaart' element={ <Kinkekaart /> } />
        <Route path='esindused' element={ <Esindused /> } />
        <Route path='ostukorv' element={ <Ostukorv /> } />
        <Route path='lisa-toode' element={ <LisaToode /> } />
        <Route path='seaded' element={ <Seaded /> } />
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