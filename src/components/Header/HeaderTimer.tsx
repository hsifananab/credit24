import React from 'react';

const HeaderTimer = () => {
  return (
    <div className="flex gap-[15px]">
      <HeaderTimerItem time="00" label="Дней" />
      <HeaderTimerItem time="23" label="Часов" />
      <HeaderTimerItem time="54" label="Минут" />
      <HeaderTimerItem time="22" label="Секунд" />
    </div>
  );
};

export default HeaderTimer;

interface HeaderTimerItemProps {
  time: string;
  label: string;
}

const HeaderTimerItem = ({ time, label }: HeaderTimerItemProps) => {
  return (
    <div className="flex flex-col gap-[7px] items-center">
      <div className="flex items-center justify-center px-[22px] py-[10px] rounded-[25px] bg-white text-[13px] font-medium">
        {time}
      </div>
      <p className="text-[15px]"> {label}</p>
    </div>
  );
};
