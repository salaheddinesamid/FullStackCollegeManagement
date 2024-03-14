import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTableColumns, faCoffee } from '@fortawesome/free-solid-svg-icons'
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import { Home } from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
