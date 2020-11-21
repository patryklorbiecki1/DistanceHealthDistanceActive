import { 
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';
import { React,Component } from 'react';
import { Label, FormGroup, Input, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import SignIn from './SignIn';


class NavMenu extends Component {
    constructor(props){
      super(props);
      this.state = {
        newItemModal: false,
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
    
    //   }

     toggleNewItemModal(){
         this.setState({
            newItemModal: ! this.state.newItemModal
         });
         console.log('adsdsdsdsdsdsdsdsds');
     };
 
      render(){
        const { newItemModal } = this.state;
        let modal;
        if( newItemModal ) { modal=<SignIn newModal={ newItemModal }/> } 
          return(
            <div>
            { modal }
            <Navbar color="dark" dark expand="md" className="navmenu">
              <NavbarBrand href="/">DistanceHealth - DistanceActive</NavbarBrand>
              <NavbarToggler 
              // onClick={toggle} 
              />
              <Collapse 
              // isOpen={isOpen} 
              navbar>
                <Nav className="mr-auto" navbar>
                  {/* <NavItem>
                    <NavLink href="/components/">Components</NavLink>
                  </NavItem> */}
                  <NavItem>
                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                  </NavItem>
                  {/* <NavItem>
                    <NavLink href="/next">next</NavLink>
                  </NavItem>  */}
                  {/* <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Options
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        Option 1
                      </DropdownItem>
                      <DropdownItem>
                        Option 2
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>
                        Reset
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown> */}
       
                  
                </Nav>
                <Button color="secondary"  onClick={this.toggleNewItemModal.bind(this)} >Zaloguj się</Button>
                {/* <NavbarText>Zaloguj</NavbarText> */}
              </Collapse>
            </Navbar>
          </div>
          );
      }   
}

export default NavMenu;