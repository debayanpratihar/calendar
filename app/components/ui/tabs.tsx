import React from 'react';

interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Tabs: React.FC<TabsProps> = ({ children, ...props }) => {
  return (
    <div className="border-b border-gray-200" {...props}>
      {children}
    </div>
  );
};

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsList: React.FC<TabsListProps> = ({ children, ...props }) => {
  return (
    <nav className="-mb-px flex space-x-8" {...props}>
      {children}
    </nav>
  );
};

interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, ...props }) => {
  return (
    <button
      className="whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm text-gray-500 hover:text-gray-700 hover:border-gray-300"
      {...props}
    >
      {children}
    </button>
  );
};

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabsContent: React.FC<TabsContentProps> = ({ children, ...props }) => {
  return (
    <div className="pt-4" {...props}>
      {children}
    </div>
  );
};