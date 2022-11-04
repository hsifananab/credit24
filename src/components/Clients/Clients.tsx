import React from 'react';

import { clients } from '../../data/data';

const Clients = () => {
  return (
    <div className="bg-gradient-bg relative">
      <div className="container pt-[47px] pb-[36px] relative grid grid-cols-3 justify-items-end items-center">
        <div className="">
          <p className="text-[40px] leading-[47px] font-medium">250 000+</p>
          <p className="text-[14px] leading-[140%] font-light">
            Клиетов воспользовались нашими услугами
          </p>
        </div>
        <div className="col-span-2">
          <div className="flex ">
            {clients.map((item, index) => (
              <ClientsItem key={item} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;

interface ClientsItemProps {
  item: NodeRequire;
  index: number;
}

const ClientsItem = ({ item, index }: ClientsItemProps) => {
  return (
    <div>
      <img
        src={item.toString()}
        // className="absolute"
        style={{ zIndex: index + 1 }}
        alt=""
      />
    </div>
  );
};
