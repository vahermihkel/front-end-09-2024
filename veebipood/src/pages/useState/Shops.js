import { useState } from 'react';
import Map from '../../components/Map';

function Shops() {
  const [coordinaates, setCoordinates] = useState({lngLat: [59.4378, 24.7574], zoom: 11});

  return (<div>
    <button onClick={() => setCoordinates({lngLat: [58.8570, 25.6867], zoom: 7})}>Kõik poed</button>
    <button onClick={() => setCoordinates({lngLat: [59.4378, 24.7574], zoom: 11})}>Kõik Tallinna poed</button>

    <button onClick={() => setCoordinates({lngLat: [59.4231, 24.7991], zoom: 13})}>Ülemiste</button>
    <button onClick={() => setCoordinates({lngLat: [59.4277, 24.7193], zoom: 13})}>Kristiine</button>
    <button onClick={() => setCoordinates({lngLat: [58.3779, 26.7304], zoom: 13})}>Tasku</button>
    <button onClick={() => setCoordinates({lngLat: [58.3873, 24.5046], zoom: 13})}>Port Artur 2</button>
    <Map mapCoordinaates={coordinaates}  />
  </div>)
}

export default Shops;