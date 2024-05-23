import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpened) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [menuOpened]);

  const toggleMenu = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <>
      <nav className="bg-white flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-10">
          <img src={logo} alt="logo" className="h-10" />

          <div className="hidden md:flex space-x-4">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 px-3 py-2 text-sm"
              autoFocus
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 px-3 py-2 text-sm"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 px-3 py-2 text-sm"
            >
              Features +
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 px-3 py-2 text-sm"
            >
              Plans
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="block text-gray-700 hover:text-gray-500 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18h18v-2H3v2zM3 9h18V7H3v2zm0-5v2h18V4H3z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="hidden md:flex z-10 bg-white p-1 rounded-md">
          <button className="text-white w-40 bg-red-900 rounded-md border-2 border-white">
            Contact us
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden ${
          menuOpened ? "block" : "hidden"
        } bg-white px-6 py-4`}
      >
        <a
          href="#"
          className="block text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 py-2 text-sm"
          autoFocus
          onClick={() => setMenuOpened(false)}
        >
          Home
        </a>
        <a
          href="#"
          className="block text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 py-2 text-sm"
          onClick={() => setMenuOpened(false)}
        >
          About Us
        </a>
        <a
          href="#"
          className="block text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 py-2 text-sm"
          onClick={() => setMenuOpened(false)}
        >
          Features +
        </a>
        <a
          href="#"
          className="block text-gray-700 hover:text-gray-500 focus:outline-none focus:border-b-4 focus:border-red-500 hover:border-red-500 py-2 text-sm"
          onClick={() => setMenuOpened(false)}
        >
          Plans
        </a>
        <div className="mt-4">
          <button className="text-white w-full bg-red-900 rounded-md border-2 border-white py-2">
            Contact us
          </button>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
