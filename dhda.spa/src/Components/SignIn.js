import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import { Label, FormGroup, Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import { React, Component } from 'react';
import { Redirect } from "react-router-dom";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class SignIn extends Component {

    constructor(props){
        super(props);
        this.state = {
          userData: {
            login: '',
            password: '',
          },
          newItemModal: props.newModal,
          loginStatus: false,
        };
      }

    componentDidMount(){ }

    addItem = async () => {
      const { userData } = this.state;
     // await fetch(`https://localhost:5001/login?email=${userData.login}&password=${userData.password}`, {
      await fetch(`https://localhost:5001/user`, {
        method: 'GET', mode: 'cors', credentials: 'omit'
      }).then( response => {
        console.log(response.json().data)
        this.setState({       
          newItemModal: false,  
          loginStatus: true,
          userData: {
            login: '',
            password: '',
          },
        });  
      });
    };

      toggleNewItemModal(){
        this.setState({
          newItemModal: ! this.state.newItemModal
        });
      };

      renderRedirect = () => {
        if(this.state.loginStatus){
          return <Redirect from="/" to="/loggedin" />
        }
      }

    render() {
        const { newItemModal, userData } = this.state;
  
      return (
        <div>
            {this.renderRedirect}       
            <Modal isOpen={ newItemModal } >
            <ModalHeader cssModule={{'modal-title': 'w-100 text-center'}} >Zaloguj</ModalHeader>
            <ModalBody>
                <FormGroup>
                    <Label for="login">Login</Label>
                    <Input required type="text" name="login" id="login" placeholder="Nazwa użytkownika lub email" value={ userData.login} onChange={(e) => {
                             userData.login = e.target.value;
                             this.setState({  userData });
                    }}/>
                </FormGroup>
                <FormGroup>
                    <Label for="password">Hasło</Label>
                    <Input required type="password" name="idItem" id="idItem" placeholder="Hasło" value={ userData.password} onChange={(e) => {
                             userData.password = e.target.value;
                             this.setState({  userData });
                    }}/>
                </FormGroup>
                <Button color="success" className="btn-lg  btn-block" onClick={this.addItem.bind(this)}>Zaloguj się</Button>
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
            {this.renderRedirect()} 
            </div>
    );
  }
}
export default SignIn;
  