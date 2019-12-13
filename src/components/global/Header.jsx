import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

const Header = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>Autobooks Test</NavbarBrand>
      </Navbar>
    </div>
  );
};

export default Header;