import { 
    Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, 
    UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText
} from 'reactstrap';

const NavMenu = () => (
    <div>
          <Navbar color="dark" dark expand="md">
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
                <NavItem>
                  <NavLink href="/next">next</NavLink>
                </NavItem> 
                <UncontrolledDropdown nav inNavbar>
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
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>Zaloguj</NavbarText>
            </Collapse>
          </Navbar>
        </div>
    );
    
    export default NavMenu;