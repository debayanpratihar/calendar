import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {}

export const Select: React.FC<SelectProps> = ({ children, ...props }) => {
  return (
    <select
      className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      {...props}
    >
      {children}
    </select>
  );
};

interface SelectTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const SelectTrigger: React.FC<SelectTriggerProps> = ({ children, ...props }) => {
  return (
    <button
      className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      {...props}
    >
      {children}
    </button>
  );
};

interface SelectContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectContent: React.FC<SelectContentProps> = ({ children, ...props }) => {
  return (
    <div
      className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
      {...props}
    >
      {children}
    </div>
  );
};

interface SelectItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const SelectItem: React.FC<SelectItemProps> = ({ children, ...props }) => {
  return (
    <div
      className="cursor-pointer select-none relative py-2 pl-3 pr-9"
      {...props}
    >
      {children}
    </div>
  );
};

interface SelectValueProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const SelectValue: React.FC<SelectValueProps> = ({ children, ...props }) => {
  return (
    <span
      className="block truncate"
      {...props}
    >
      {children}
    </span>
  );
};