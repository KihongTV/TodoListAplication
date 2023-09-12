import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
    let handleropen=()=>{
        isOpen==true?setIsOpen(false):setIsOpen(true)
    }
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
<path fill="#64b5f6" d="M37,36H17c-2.761,0-5-2.239-5-5V11c0-2.761,2.239-5,5-5h20c2.761,0,5,2.239,5,5v20 C42,33.761,39.761,36,37,36z M21,30h14V18.5c0-3.038-2.462-5.5-5.5-5.5H18v14C18,28.657,19.343,30,21,30z"></path><path fill="#fb8c00" d="M31,42H11c-2.761,0-5-2.239-5-5V17c0-2.761,2.239-5,5-5h20c2.761,0,5,2.239,5,5v20 C36,39.761,33.761,42,31,42z M17.5,36H30V21c0-1.657-1.343-3-3-3H15c-1.657,0-3,1.343-3,3v9.5C12,33.538,14.462,36,17.5,36z"></path><path fill="#64b5f6" d="M36,26v1c0,1.657-1.343,3-3,3H23v6h14c2.75,0,5-2.25,5-5v-5H36z"></path>
</svg>
              
            </a>
            <div className="hidden sm:ml-6 sm:flex items-center">
              <NavLink to='/' className="px-3 py-2 text-gray-500 hover:text-gray-700">خانه</NavLink>
              <NavLink to='/Aboutus' className="px-3 py-2 text-gray-500 hover:text-gray-700">درباره ما</NavLink>
              <NavLink to='/Services' className="px-3 py-2 text-gray-500 hover:text-gray-700">خدمات</NavLink>
              <NavLink to='/Contactus' className="px-3 py-2 text-gray-500 hover:text-gray-700">تماس با ما</NavLink>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
           

            {/* Profile dropdown */}
            <div className="ml-3 relative">
              <div>
                <button onClick={handleropen} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="h-8 w-8 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
                </button>
              </div>
              {/* Dropdown menu, show/hide based on menu state. */}
              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">
                  {/* Active: "bg-gray-100", Not Active: "" */}
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">حساب کاربری</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">تنظیمات</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">خروج</a>
                </div>
              )}
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)}>
              <span className="sr-only">Toggle mobile menu</span>
              {/* Icon when menu is closed. */}
              {!isOpen && (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
              {/* Icon when menu is open. */}
              {isOpen && (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle classNamees based on menu state. */}
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">

            <NavLink to='/' className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">خانه</NavLink>
              <NavLink to='/Aboutus' className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">درباره ما</NavLink>
              <NavLink to='/Services' className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">خدمات</NavLink>
              <NavLink to='/Contactus' className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">تماس با ما</NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-5">
              <div className="flex-shrink-0">
                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" alt="" />
              </div>
              <div className="ml-3">
                <div className="text-base font-medium text-gray-800">Jane Doe</div>
                <div className="text-sm font-medium text-gray-500">jane.doe@example.com</div>
              </div>
              
            </div>
            <div className="mt-3 px-2 space-y-1">
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">حساب کاربری</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">تنظیمات</a>
              <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">خروج</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;