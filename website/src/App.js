import './App.css';
import Nav from './components/Nav';
import {BrowserRouter} from "react-router-dom"
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (

  <BrowserRouter>
    <Nav/>
    <RouteSwitch/>
  </BrowserRouter>

  );
}

export default App;
