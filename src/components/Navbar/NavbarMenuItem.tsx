import React from 'react';

interface NavbarMenuItemProps {
  item: {
    label: string;
    path: string;
  };
}

const NavbarMenuItem = ({ item }: NavbarMenuItemProps) => {
  return <li>{item.label}</li>;
};

export default NavbarMenuItem;
