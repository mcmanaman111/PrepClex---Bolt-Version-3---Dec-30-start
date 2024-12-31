import React from 'react';

interface ToggleProps {
  label: string;
  value: boolean;
  onChange: (value: boolean) => void;
  darkText?: boolean;
}

const Toggle = ({ label, value, onChange, darkText = true }: ToggleProps) => {
  const textColor = darkText ? 'text-white' : 'text-gray-700 dark:text-gray-200';
  
  return (
    <div className="flex flex-col items-center space-y-2">
      <span className={`text-sm text-center ${textColor}`}>{label}</span>
      <div className="flex rounded-full bg-gray-100 dark:bg-gray-800 p-1 w-48 shadow-inner">
        <button
          className={`flex-1 py-1.5 px-4 rounded-full text-sm font-medium transition-all ${
            !value
              ? 'bg-blue-600 text-white shadow-md ring-1 ring-blue-700'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          onClick={() => onChange(false)}
        >
          Off
        </button>
        <button
          className={`flex-1 py-1.5 px-4 rounded-full text-sm font-medium transition-all ${
            value
              ? 'bg-blue-600 text-white shadow-md ring-1 ring-blue-700'
              : 'text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
          onClick={() => onChange(true)}
        >
          On
        </button>
      </div>
    </div>
  );
};

export default Toggle;