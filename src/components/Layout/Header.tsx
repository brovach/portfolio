import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
 // const location = useLocation();

 // const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-6 py-6">
        <nav className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
          >
            Joe Kovach
          </Link>
          
         {/* <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Home
            </Link>
            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors ${
                isActive('/contact') 
                  ? 'text-gray-900 border-b-2 border-gray-900 pb-1' 
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Contact
            </Link>
          </div>*/}
        </nav>
      </div>
    </header>
  );
};

export default Header;