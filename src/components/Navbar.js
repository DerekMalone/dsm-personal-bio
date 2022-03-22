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
    NavLink: {
      color: '#EDF2F1',
    },
    navFont: {
      color: '#EDF2F1 !important',
    },
  };

  const styledNavFont = {
    'li.a': {
      color: '#EDF2F1',
    },
    'NavItem.h4': {
      color: '#EDF2F1',
    },
    'NavLink.styledFont': {
      color: '#EDF2F1',
    },
  };

  return (
    <div>
      <Navbar style={styleObject.Navbar} expand="md" light>
        <NavbarBrand style={styleObject.NavLink} href="/">Derek Malone</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={styleObject.NavLink} className="container-fluid" navbar>
            {user ? (
              <>
                <NavItem style={styledNavFont.NavItem}>
                  <NavLink style={styledNavFont.NavItem} href="/">
                    <h4 style={styledNavFont.NavItem} className="navFont" id="styledFont">
                      About Me
                    </h4>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact" style={styleObject.NavLink}>Contact Info</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/tech" style={styleObject.NavLink}>Tech Stacks</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projects" style={styleObject.NavLink}>Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/projectsForm" style={styleObject.NavLink}>Projects Form</NavLink>
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
