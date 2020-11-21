import logo from './Assets/run.jpg';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavMenu from '../dhda.spa/src/Components/NavMenu';
import { Component } from 'react';

class Next extends Component {
 
  constructor(props){
      super(props);
    }

  render(){
    return (
      <div className="App">
        {/* dfsdfsdfs */}
        {/* <NavMenu /> */}
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
        </header>
      </div>
    );
  }
}

export default Next;
