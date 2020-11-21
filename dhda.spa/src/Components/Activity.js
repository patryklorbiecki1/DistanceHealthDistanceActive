import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { React, Component } from 'react';

import { Label, FormGroup, Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Obrazek1 from '../Assets/run1.jpg';
import Obrazek2 from '../Assets/run2.jpg';
import Obrazek3 from '../Assets/run3.jpg';
import Plusicon from '../Assets/sport.svg';

import {
  Card,  CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';

class Activity extends Component {
  constructor(props){
    super(props);
    this.state = {
      newActivityData :{
        category: '',
        user: '',
        distance: '',
        limit: '',
      }
    };
  }

  render(){ 
    const { newActivityData } = this.state;  
    return(
    
    <div className="container">
        <br/>
        <CardColumns>
        <Card>
          <CardImg width="200px" height="200px" src={Plusicon}/>
            <CardBody>
            <CardTitle tag="h5">Dodaj aktywność</CardTitle>
              {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Bieganie</CardSubtitle> */}
              {/* <CardText>Użytkownik: Jan Dabacki</CardText>
              <CardText>Dystans: 6.53 km</CardText>
              <CardText>Czas: 40'24 min</CardText> */}
            <FormGroup>
            {/* <Label for="category">Dyscyplina</Label> */}
            <Input type="select" name="category" id="category">
              <option>Bieganie</option>
              <option>Pompki</option>
              <option>Brzuszki</option>
              <option>Pływanie</option>
              <option>...</option>
            </Input>

            {/* <Label for="idItem">Użytkownik</Label> */}
            <Input  required type="select" name="user" id="user" placeholder="Użytkownik" value={ newActivityData.user } onChange={(e) => {
              newActivityData.user = e.target.value;
              this.setState({ newActivityData });
            }} >
              <option>Maciej Kowalczyk</option>
              <option>Paweł Pawlos</option>
              <option>Renata Siekiera</option>
            </Input>
    
            {/* <Label for="idRoom">Dystans</Label> */}
            <Input tabindex="1" type="number" name="distance" id="distance" placeholder="Dystans"value={newActivityData.distance} onChange={(e) => {
              newActivityData.distance = e.target.value;
              this.setState({ newActivityData });
            }}/>
             <Input tabindex="1" type="number" name="limit" id="limit" placeholder="Limit"value={newActivityData.limit} onChange={(e) => {
              newActivityData.limit = e.target.value;
              this.setState({ newActivityData });
            }}/>
          </FormGroup>
          <FormGroup>
            {/* <Label for="category">Kategoria</Label>
            <Input type="select" name="category" id="category">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Input> */}
          </FormGroup>              


              <Button>Dodaj</Button>
            </CardBody>
          </Card>
          
          <Card>
          <CardImg width="320px" height="200px" src={Obrazek1}/>
          <CardBody>
            <CardTitle tag="h5">Ukończono aktywność</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Bieganie</CardSubtitle>
            <CardText>Użytkownik: Jan Kowalski</CardText>
            <CardText>Dystans: 5.03 km</CardText>
            <CardText>Czas: 25'06 min</CardText>
            <Button>Oceń</Button>
          </CardBody>
          </Card>
          <Card>
          <CardImg width="320px" height="200px" src={Obrazek2}/>
          <CardBody>
          <CardTitle tag="h5">Ukończono aktywność</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Bieganie</CardSubtitle>
            <CardText>Użytkownik: Jan Abacki</CardText>
            <CardText>Dystans: 7.03 km</CardText>
            <CardText>Czas: 40'16 min</CardText>
            <Button>Szczegóły</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg width="320px" height="200px" src={Obrazek3}/>
            <CardBody>
            <CardTitle tag="h5">Ukończono aktywność</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Bieganie</CardSubtitle>
              <CardText>Użytkownik: Jan Babacki</CardText>
              <CardText>Dystans: 6.53 km</CardText>
              <CardText>Czas: 40'24 min</CardText>
              <Button>Szczegóły</Button>
            </CardBody>
          </Card>
        <Card>
          <CardImg width="320px" height="200px" src={Obrazek3}/>
            <CardBody>
            <CardTitle tag="h5">Ukończono aktywność</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Bieganie</CardSubtitle>
              <CardText>Użytkownik: Jan Cabacki</CardText>
              <CardText>Dystans: 6.53 km</CardText>
              <CardText>Czas: 40'24 min</CardText>
              <Button>Szczegóły</Button>
            </CardBody>
          </Card>
          <Card>
          <CardImg width="320px" height="200px" src={Obrazek3}/>
            <CardBody>
            <CardTitle tag="h5">Ukończono aktywność</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Bieganie</CardSubtitle>
              <CardText>Użytkownik: Jan Dabacki</CardText>
              <CardText>Dystans: 6.53 km</CardText>
              <CardText>Czas: 40'24 min</CardText>
              <Button>Szczegóły</Button>
            </CardBody>
          </Card>

      </CardColumns>
    </div>
  );
}
}

export default Activity;
