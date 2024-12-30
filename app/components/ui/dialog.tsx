import React from 'react';

interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Dialog: React.FC<DialogProps> = ({ children, ...props }) => {
  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" {...props}>
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        {children}
      </div>
    </div>
  );
};

interface DialogContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogContent: React.FC<DialogContentProps> = ({ children, ...props }) => {
  return (
    <div className="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full" {...props}>
      {children}
    </div>
  );
};

interface DialogHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const DialogHeader: React.FC<DialogHeaderProps> = ({ children, ...props }) => {
  return (
    <div className="bg-gray-50 px-4 py-5 sm:px-6" {...props}>
      {children}
    </div>
  );
};

interface DialogTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

export const DialogTitle: React.FC<DialogTitleProps> = ({ children, ...props }) => {
  return (
    <h3 className="text-lg leading-6 font-medium text-gray-900" {...props}>
      {children}
    </h3>
  );
};

interface DialogTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const DialogTrigger: React.FC<DialogTriggerProps> = ({ children, ...props }) => {
  return (
    <button className="text-indigo-600 hover:text-indigo-900" {...props}>
      {children}
    </button>
  );
};