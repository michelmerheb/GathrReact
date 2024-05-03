import { Link } from "react-router-dom";
import LogoImage from "../assets/GathrLogo.png";
import LogoutComponent from "./LogoutComponent";
import { useState } from "react";
import {
  CalendarDaysIcon,
  NewspaperIcon,
  InformationCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/16/solid";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <img
              src={LogoImage}
              alt="Logo"
              className="h-12 w-12 md:h-20 md:w-20"
            />
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
            <LogoutComponent />
          </div>
        </div>
      </div>
    </header>
  );
}
