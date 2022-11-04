import React from 'react';

type ButtonProps = {
  label: string;
};

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="pt-[15px] pb-4 flex items-center justify-center rounded-[25px] bg-[#405554] text-white font-medium w-full">
      {label}
    </button>
  );
};

export default Button;
