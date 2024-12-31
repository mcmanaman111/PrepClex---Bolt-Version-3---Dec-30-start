import React, { ReactNode } from 'react';

interface Props {
  content: string;
  children: ReactNode;
}

const Tooltip = ({ content, children }: Props) => {
  return (
    <div className="relative group">
      {children}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
        {content}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
      </div>
    </div>
  );
};

export default Tooltip;