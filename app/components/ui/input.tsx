import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      className="block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
      {...props}
    />
  );
};