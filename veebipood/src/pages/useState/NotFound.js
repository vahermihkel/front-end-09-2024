import { Link } from 'react-router-dom'
import KontaktAndmed from '../../components/KontaktAndmed'


function NotFound() {


  return (
    <div>
      <h2>Oh häda!</h2>
      <h4>Otsisime maa alt ja maa pealt, aga tundub, et see lehekülg on kaotsi läinud.</h4>
      <p>
        Mine tagasi 
        <Link to="/avaleht">Veebipoe avalehele.</Link>
      </p>

      <KontaktAndmed />
    </div>
  )
}

export default NotFound