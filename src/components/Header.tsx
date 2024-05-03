import { Link } from "react-router-dom";
import LogoImage from "../assets/GathrLogo.png";
import LogoutComponent from "./LogoutComponent";
import { useState, useRef, useEffect } from "react";
import {
  CalendarDaysIcon,
  NewspaperIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement | null>(null);

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileMenuRef.current &&
        !profileMenuRef.current.contains(event.target as Node)
      ) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [profileMenuRef]);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src={LogoImage}
                alt="Logo"
                className="h-12 w-12 md:h-20 md:w-20"
              />
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:block`}>
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="flex items-center text-lg text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md font-medium"
              >
                <CalendarDaysIcon className="h-6 w-6 mr-1" /> Events
              </Link>
              <Link
                to="/news"
                className="flex items-center text-lg text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md font-medium"
              >
                <NewspaperIcon className="h-6 w-6 mr-1" /> News
              </Link>
              <Link
                to="/aboutus"
                className="flex items-center text-lg text-gray-800 hover:text-purple-600 px-3 py-2 rounded-md font-medium"
              >
                <InformationCircleIcon className="h-6 w-6 mr-1" /> About Us
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <div ref={profileMenuRef}>
              <button onClick={toggleProfileMenu} className="p-2">
                <UserCircleIcon className="h-7 w-7 text-gray-800 hover:text-purple-600  " />
              </button>
              {isProfileMenuOpen && (
                <div className="absolute mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-50">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-purple-600"
                  >
                    Settings
                  </Link>
                </div>
              )}
            </div>
            <LogoutComponent />
          </div>
        </div>
      </div>
    </header>
  );
}
