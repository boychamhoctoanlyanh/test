import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import logo from '../logo.svg';
import earth from '../images/earth.svg';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md" className="bg404041">
          <NavbarBrand href="/">
            <img src={logo} alt="logo" className="App-logo" />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/#">Vectors</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">Photos</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <img src={earth} alt={earth} />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    EN
                  </DropdownItem>
                  <DropdownItem>
                    VI
                  </DropdownItem>
                  <DropdownItem>
                    TH
                  </DropdownItem>
                  <DropdownItem>
                    KO
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/#">Login</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#">Sign up</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
