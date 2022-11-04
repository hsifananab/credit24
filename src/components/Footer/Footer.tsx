import React from 'react';
import Languages from '../UI/Languages';
import Logo from '../UI/Logo';
import { navLinks } from '../../data/data';

const Footer = () => {
  return (
    <div className="bg-text relative rounded-t-[25px]">
      <div className="container pt-[80px] pb-[44px]">
        <div className="grid grid-cols-3 mb-[163px]">
          <Logo invert={true} />
          <div className="text-white flex flex-col gap-[30px]">
            <ul className="text-[30px] flex flex-col gap-[3px]">
              <li>
                <a href="tel:(050) 837-23-25">(050) 837-23-25</a>
              </li>
              <li>
                <a href="tel:(096) 052-78-75">(096) 052-78-75</a>
              </li>
              <li>
                <a href="tel:(044) 585-59-66">(044) 585-59-66</a>
              </li>
            </ul>
            <Languages />
          </div>
          <nav className="text-white">
            <ul className="flex flex-col gap-[20px]">
              {navLinks.map(item => (
                <li key={item.label}>{item.label}</li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-between text-white">
          <p>2022. Credit24. Все права защищены</p>
          <a href="#" className="underline">
            Договора и лицензии
          </a>
          <a href="#" className="underline">
            Смотреть на карте
          </a>
          <p>Киев, бульв. Леси Украинки, 26</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
