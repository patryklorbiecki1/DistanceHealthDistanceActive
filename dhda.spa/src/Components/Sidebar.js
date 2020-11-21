import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { React, Component } from 'react';

import '../App.css';



import Notificon from '../Assets/notification.svg';
import Chaticon from '../Assets/chat.svg';
import Teamicon from '../Assets/team.svg';

class Sidebar extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
      }
    
    render(){
          return(
     
    <SideNav className="sidenav"
        onSelect={(selected) => {           
        }}
    >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="Activity">
            <NavItem eventKey="Activity">
                <NavIcon>
                    <i className="fa fa-fw fa-activity" style={{ fontSize: '1.75em' }} />
                    <img src={ Notificon } className="iconic" alt="Notificon"/>
                </NavIcon>
                <NavText>
                    Activity
                </NavText>
            </NavItem>
            <NavItem eventKey="teams">
                <NavIcon>
                    <i className="fa fa-fw fa-teams" style={{ fontSize: '1.75em' }} />
                    <img src={ Teamicon } className="iconic" alt="Teamicon"/>
                </NavIcon>
                <NavText>
                    Teams
                </NavText>
            </NavItem>
            <NavItem eventKey="chat">
                <NavIcon>
                    <i className="fa fa-fw fa-chat" style={{ fontSize: '1.75em' }} />
                    <img src={ Chaticon } className="iconic" alt="Chaticon"/>
                </NavIcon>
                <NavText>
                    Chat
                </NavText>
            </NavItem>
        </SideNav.Nav>
    </SideNav>
    
          );
    }
}

export default Sidebar;