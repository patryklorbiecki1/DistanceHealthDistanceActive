import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavMenu from './Components/NavMenu';

import Obrazek1 from './Assets/run1.jpg';
import Obrazek2 from './Assets/run2.jpg';
import Obrazek3 from './Assets/run3.jpg';
import Obrazek4 from './Assets/face.png';

import {Card, Button, CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';

import { Container, Row, Col } from 'reactstrap';
import { React, Component } from 'react';

class Groups extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
  return(
    <div className="App">
        <CardColumns>
          <Card>
          <CardBody>
            <CardTitle tag="h5">Tworzenie nowej grupy</CardTitle>
            <Button>Utwórz nową grupę</Button>
          </CardBody>
          </Card>
          <Card> 
          <CardBody>
          <CardTitle tag="h5">Jan Kowalski</CardTitle>
          <CardImg width="50" height="50"src={Obrazek4}/>
            <Button>Otwórz grupę</Button>
          </CardBody>
        </Card>
       </CardColumns> 
    </div>
  );
  }
}

export default Groups;
