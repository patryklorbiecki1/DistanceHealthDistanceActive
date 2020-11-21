import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Label, FormGroup, Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'


import { Component } from 'react';



class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
          items: [],
          userData: {
            login: '',
            password: '',
          },
          newItemModal: props.newModal,
        };
      }

      componentDidMount(){
        // axios.get('http://localhost:3000/items').then((response) => {
        //   this.setState({ 
        //     items: response 
        //   })
        // });
    //    this.getItems();
      }

    //   getItems = async () => {
    //     await fetch('http://localhost:1234/items',{method: 'GET', mode: 'cors', credentials: 'omit'})
    //     .then(response => {return response.json();})
    //     // .then(response => {return JSON.stringify(response);})
    //     .then(response => {console.log('BEFORE',response); {return response.data}})
    //     .then(response => {this.setState({ items: response })})
    //     .catch(err => console.error(err))
    //   }

      toggleNewItemModal(){
        this.setState({
          newItemModal: ! this.state.newItemModal
        });
      };

      render() {
        const { items, newItemModal, newItemData, editItemData, editItemModal } = this.state;
        

      return (
        <div>
            <Modal isOpen={ newItemModal } >
            <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} >Zaloguj</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="idItem">Login</Label>
                    <Input required type="text" name="idItem" id="idItem" placeholder="Login"/>
                </FormGroup>
                <FormGroup>
                    <Label for="idItem">Hasło</Label>
                    <Input required type="password" name="idItem" id="idItem" placeholder="Hasło"/>
                </FormGroup>
                <Button color="success" className="btn-lg  btn-block">Zaloguj się</Button>
                <span className="text-center pt-3"> Zaloguj się przez </span>
                <GoogleLoginButton/>
                <FacebookLoginButton/>
                <div className="text-center" >
                    <a href="/sign-up">Zarejestruj się</a>
                    <span className="p=2"> | </span>
                    <a href="/forgot-password">Zapomniałeś hasła?</a>
                </div>
            </ModalBody>
                <ModalFooter>
                {/* <Button color="primary" >Add</Button>{' '} */}
                <Button color="secondary"  onClick={ this.toggleNewItemModal.bind(this) }>Anuluj</Button>
              </ModalFooter>
            </Modal>
            </div>
    );
  }
}
export default SignIn;
  