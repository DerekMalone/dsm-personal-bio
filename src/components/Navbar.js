import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const BioNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" expand="md" light>
        <NavbarBrand href="/">Derek Malone</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/">About Me</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact Info</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/tech">Tech Stacks</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

// BioNavbar.propTypes = {

// }

export default BioNavbar;
