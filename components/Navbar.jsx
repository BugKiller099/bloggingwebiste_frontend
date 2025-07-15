import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from "../imgs/logo.png";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <>
      <nav className="navbar flex items-center justify-between px-[5vw] py-4 border-b border-grey relative">
        {/* Logo */}
        <Link to="/" className="flex-none w-10">
          <img src={logo} className="w-full" alt="Logo" />
        </Link>

        {/* Desktop Search Box - Always visible on md+ */}
        <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-grey p-4 pl-12 pr-6 rounded-full placeholder:text-dark-grey focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <i className="fi fi-rr-search absolute left-5 top-1/2 -translate-y-1/2 text-xl text-dark-grey pointer-events-none"></i>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Mobile Search Toggle */}
          <button
            onClick={() => setSearchBoxVisibility(prev => !prev)}
            className="md:hidden bg-grey w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
            aria-label="Toggle search"
          >
            <i className={`fi ${searchBoxVisibility ? 'fi-rr-cross' : 'fi-rr-search'} text-xl`}></i>
          </button>

          {/* Write Link */}
          <Link 
            to="/editor" 
            className="hidden md:flex items-center gap-2 link hover:text-blue-600 transition-colors"
          >
            <i className="fi fi-rr-file-edit"></i>
            <p>Write</p>
          </Link>

          <Link className='btn-dark py-2' to="/signin">Sign In</Link>

          <Link className='btn-light py-2 hidden md:block' to="/signup">Sign Up</Link>
        </div>

        {/* Mobile Search Box - Toggleable */}
        <div
          className={`absolute top-full left-0 w-full mt-0 px-[5vw] py-4 bg-white border-b border-grey z-10 md:hidden transition-all duration-300 ${
            searchBoxVisibility ? "block opacity-100" : "hidden opacity-0"
          }`}
        >
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-grey p-4 pl-6 pr-12 rounded-full placeholder:text-dark-grey focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus={searchBoxVisibility}
            />
            <i className="fi fi-rr-search absolute right-4 top-1/2 -translate-y-1/2 text-xl text-dark-grey pointer-events-none"></i>
          </div>
        </div>
      </nav>

      {/* Child routes will render here */}
      <Outlet />
    </>
  );
};

export default Navbar;