import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

const BioNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const styleObject = {
    Navbar: {
      'background-color': '#0E1D65',
    },
  };

  return (
    <div>
      <Navbar color="$borderColor" style={styleObject.Navbar} id="bootstrap-overrides" expand="md" light>
        <NavbarBrand href="/">Derek Malone</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="container-fluid" navbar>
            {user ? (
              <>
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
                <NavItem>
                  <NavLink href="/projectsForm">Projects Form</NavLink>
                </NavItem>
              </>
            ) : (
              <>
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
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

BioNavbar.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      uid: PropTypes.string,
      fullName: PropTypes.string,
      user: PropTypes.string,
    }),
  ]),
};

BioNavbar.defaultProps = {
  user: null,
};

export default BioNavbar;
