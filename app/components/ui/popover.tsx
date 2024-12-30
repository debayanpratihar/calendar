import React, { useState, useRef, useEffect } from 'react';

interface PopoverProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Popover: React.FC<PopoverProps> = ({ children, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={popoverRef} {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === PopoverTrigger) {
          return React.cloneElement(child as React.ReactElement<PopoverTriggerProps>, {
            onClick: () => setIsOpen(!isOpen),
          });
        }
        if (React.isValidElement(child) && child.type === PopoverContent) {
          return isOpen ? child : null;
        }
        return child;
      })}
    </div>
  );
};

interface PopoverTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const PopoverTrigger: React.FC<PopoverTriggerProps> = ({ children, ...props }) => {
  return (
    <button className="text-gray-500 hover:text-gray-700" {...props}>
      {children}
    </button>
  );
};

interface PopoverContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const PopoverContent: React.FC<PopoverContentProps> = ({ children, ...props }) => {
  return (
    <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg" {...props}>
      {children}
    </div>
  );
};