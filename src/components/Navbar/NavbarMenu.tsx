import React from 'react';
import { navLinks } from '../../data/data';
import NavbarMenuItem from './NavbarMenuItem';

const NavbarMenu = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-[20px]">
          {navLinks.map(item => (
            <NavbarMenuItem item={item} key={item.path} />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavbarMenu;
