import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavMenu from './Components/NavMenu';

import { Route, Switch, Redirect } from "react-router-dom";

import Next from './Components/Next';
import LandingPage from './Components/LandingPage';
import SignIn from './Components/SignIn';

function App() {
  return (
    <div className="App">
      <NavMenu />
      <Switch>
        <Route path="/" exact component={ LandingPage } />
        <Route path="/sign-in" exact component={ SignIn } />
        <Route path="/next" exact component={ Next } />
      </Switch>
    </div>
  );
}

export default App;

