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
import { signOutUser } from '../api/auth';

const BioNavbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const styleObject = {
    Navbar: {
      'background-color': '#0E1D65',
      color: '#EDF2F1',
    },
    NavItem: {
      color: '#EDF2F1',
    },
    NavLink: {
      color: '#EDF2F1',
    },
    navFont: {
      color: '#EDF2F1 !important',
    },
  };

  // const styledNavFont = {
  //   'li.a': {
  //     color: '#EDF2F1',
  //   },
  //   'NavItem.h4': {
  //     color: '#EDF2F1',
  //   },
  //   // 'NavLink.styledFont': {
  //   //   color: '#EDF2F1',
  //   // },
  // };

  return (
    <div>
      <Navbar dark expand="md">
        <NavbarBrand style={styleObject.NavItem} href="/">
          Derek Malone
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav style={styleObject.NavLink} className="container-fluid" navbar>
            {user ? (
              <>
                <NavItem>
                  <NavLink className="nav-span" href="/contact">
                    Contact Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-span" href="/tech">
                    Tech Stacks
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-span" href="/projects">
                    Projects
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-span" href="/projectsForm">
                    Projects Form
                  </NavLink>
                </NavItem>
                <NavItem>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={signOutUser}
                  >
                    Sign Out.
                  </button>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem>
                  <NavLink className="nav-span" href="/contact">
                    Contact Info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-span" href="/tech">
                    Tech Stacks
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-span" href="/projects">
                    Projects
                  </NavLink>
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
