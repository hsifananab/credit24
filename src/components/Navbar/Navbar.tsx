import React from 'react';
import Languages from '../../UI/Languages';
import Logo from '../../UI/Logo';
import NavbarMenu from './NavbarMenu';

const Navbar = () => {
  return (
    <div className="container fixed top-[80px] left-0 right-0 z-10">
      <div className="grid grid-cols-3 items-center">
        <Logo />
        <div className="col-span-2 flex justify-between">
          <NavbarMenu />
          <Languages />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
