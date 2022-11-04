import React from 'react';

interface LogoProps {
  invert?: boolean;
}

const Logo = ({ invert }: LogoProps) => {
  return (
    <div className="max-w-max">
      <div
        className="px-[20px] py-2 rounded-[15px] text-[17px] font-medium cursor-pointer"
        style={{
          backgroundColor: invert ? '#ffffff' : '#333333',
          color: invert ? '#333333' : '#ffffff',
        }}
      >
        Credit24
      </div>
    </div>
  );
};

export default Logo;
