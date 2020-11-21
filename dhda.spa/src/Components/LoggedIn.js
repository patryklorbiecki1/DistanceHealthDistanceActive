import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Switch, Redirect } from "react-router-dom";
import { React, Component } from 'react';

import Sidebar from './Sidebar';
import Activity from './Activity';
import Task from './Task';

class LoggedIn extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
      }
    
    render(){
          return(
     <div className="conti">
         <div className="badge">Hi, Marek</div>
         <Sidebar />
         <Activity />
         <Route path="/coach" exact component={ Activity } />
         <Route path="/student" exact component={ Task } />
    </div>
     );
    }
}

export default LoggedIn;
