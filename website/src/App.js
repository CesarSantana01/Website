import './App.css';
import Nav from './components/Nav';
import {HashRouter} from "react-router-dom"
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (

  <HashRouter>
    <Nav/>
    <RouteSwitch/>
  </HashRouter>

  );
}

export default App;
