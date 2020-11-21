import logo from './Assets/run.jpg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavMenu from './Components/NavMenu';

import { Route, Switch, Redirect } from "react-router-dom";

import Next from './Components/Next';


function App() {
  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/next" exact component={ Next } />
      </Switch>
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
    </div>
  );
}

export default App;

