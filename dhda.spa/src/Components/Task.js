import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { React, Component } from 'react';

import { Label, FormGroup, Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Obrazek1 from '../Assets/run1.jpg';
import Obrazek2 from '../Assets/run2.jpg';
import Obrazek3 from '../Assets/run3.jpg';
import Plusicon from '../Assets/sport.svg';
import Newicon from '../Assets/joging.svg';

import Sidebar from './Sidebar';

import DnD from './DragAndDrop';

import {
  Card,  CardImg, CardTitle, CardText, CardColumns,
  CardSubtitle, CardBody
} from 'reactstrap';

class Activity extends Component {
  constructor(props){
    super(props);
    this.state = {
      activities:[
        {
          user: 'maciej@edu.pl',
          category: 'Bieganie',
          distance: 3000,
          limit: 16,     
        },
      ],
      status: 'nie rozliczono',
      newItemModal: false,
      newActivityData :{
        user: '',
        category: '',
        distance: 0,
        limit: 0,
      }
    };
  }

  addItem = async () => {
    const { newActivityData, activities } = this.state;
    // console.log(newActivityData)
    // await fetch(`https://localhost:5001/activity?email=${newActivityData.user}&activityName=${newActivityData.category}&distance=${newActivityData.distance}&timeInSec=${newActivityData.limit}`, {

    // // await fetch(`https://localhost:5001/activity?email`, {
    //   method: 'POST', 
    //   headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Origin':'*'},
    //     // body: JSON.stringify({ newActivityData })
    // }).then( response => {
    //   //this.getItems();
    //   //console.log(response.data)
    //   //const { items } = this.state;
    //   //activities.push( activities );
    //   //console.log(activities.data)
      
    
    
    //activities.push( newActivityData );
      console.log(activities)
      this.setState({ 
        status: 'rozliczono',
        newItemModal: false,
      });
    
  };


  renderCard = ({ idItem, category, user, limit, distance, status }) => {
    return(
      <Card key={ idItem }>
          <CardImg width="320px" height="200px" src={Newicon}/>
                <CardBody>
                  {/* <CardTitle tag="h5">Przekazano zainteresowanym</CardTitle> */}
                  <CardSubtitle tag="h6" className="mb-2 text-muted">{ category }</CardSubtitle>
                  <CardText>Użytkownik: { user } </CardText>
                  <CardText>Dystans: { distance } m</CardText>
                  <CardText>Limit: { limit } min</CardText>
                  <CardText> { this.state.status } </CardText>
                  <Button onClick={ this.toggleNewItemModal.bind(this) }>Rozlicz się</Button>
                </CardBody>
        </Card>
    )
  }
  
  toggleNewItemModal(){
    this.setState({
      newItemModal: ! this.state.newItemModal
    });
  };

  render(){ 
    const { newActivityData, newItemModal, activities } = this.state;  
    return(
    

<div className="conti">
         <div className="badge">Hi, Marek</div>
         <Sidebar />
         
         <Modal isOpen={ newItemModal } >
            <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} >Zaloguj</ModalHeader>
            <ModalBody>
              <FormGroup>       
              <Label for="limit">Wynik</Label>
              <Input className="neigh" tabindex="1" type="number" name="limit" id="limit" placeholder="Wynik" value={newActivityData.limit} onChange={(e) => {
                newActivityData.limit = e.target.value;
                this.setState({ newActivityData });
              }}/>
              <br/>
              <Label>Przesłanie dowodu</Label>
              <DnD />
            </FormGroup>
            </ModalBody>
                <ModalFooter>
                {/* <Button color="primary" >Add</Button>{' '} */}
                <Button color="success"    onClick={ this.addItem.bind(this) }>Prześlij</Button>
                <Button color="secondary"  onClick={ this.toggleNewItemModal.bind(this) }>Anuluj</Button>
              </ModalFooter>
        </Modal>     
         




    <div className="container">
        <br/>
        <CardColumns>
        

          { activities.map(this.renderCard) }
          <Card>
          <CardImg width="320px" height="200px" src={Obrazek1}/>
          <CardBody>
            <CardTitle tag="h5">Ukończono aktywność</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Bieganie</CardSubtitle>
            <CardText>Użytkownik: Jan Kowalski</CardText>
            <CardText>Dystans: 5.03 km</CardText>
            <CardText>Czas: 25'06 min</CardText>
            <Button>Rozlicz się</Button>
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
    </div>
  );
}
}

export default Activity;
