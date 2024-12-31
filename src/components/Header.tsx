import React from 'react';
import { User, Search } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <header className="bg-white dark:bg-dark-lighter shadow transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-end items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 dark:bg-dark focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-200"
            />
            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
          </div>
          <ThemeToggle />
          <div className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600">
            <User className="w-5 h-5 mr-2" />
            <span className="text-sm">John McManaman</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;