import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav, Navbar, NavbarBrand, NavItem } from 'reactstrap';

const Heading = () => {
    return (
        <div>
         <Navbar color='dark'>
          <NavbarBrand href='/'>My Team</NavbarBrand>
          <Nav>
              <NavItem>
                  <Link to="/adduser">
                  <Button className='btn btn-primary'>Add user</Button>
                  </Link>
                 
              </NavItem>
          </Nav>
        </Navbar>  
        </div>
    );
};

export default Heading;