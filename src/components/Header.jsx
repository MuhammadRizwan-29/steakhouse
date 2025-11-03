import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const menuOpen = () => {
    setShowMenu(true);
  };

  const menuClose = () => {
    setShowMenu(false);
  };

  return (
    <header className="absolute w-full z-15">
      <div className="flex relative z-10 px-5 md:px-10  py-5 items-center justify-between">
        <div className="text-white font-yeseva text-3xl">
          <Link to="/">Steak House</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link
                to="/"
                className="text-white font-varela hover:text-orange-dark transition-colors duration-200 text-[17px]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-white font-varela hover:text-orange-dark transition-colors duration-200 text-[17px]"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="text-white font-varela hover:text-orange-dark transition-colors duration-200 text-[17px]"
              >
                Menu
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-white font-varela hover:text-orange-dark transition-colors duration-200 text-[17px]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden md:block">
          <Button title={"Book a table"} link={""} />
        </div>

        {/* Small Screen Menu */}
        <div className="block md:hidden">
          <button
            className="text-2xl text-white hover:text-orange-dark transition-colors duration-200 cursor-pointer"
            onClick={menuOpen}
          >
            <span>&#9776;</span>
          </button>

          <div
            className={`w-full h-screen bg-white fixed top-0 right-0 p-4 z-50 transition-all duration-500 ${
              showMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="float-end text-4xl text-orange-dark transition-colors duration-200 cursor-pointer"
              onClick={menuClose}
            >
              <span>&#10540;</span>
            </button>
            <nav className="px-2">
              <ul className="w-full flex flex-col py-5 mt-7">
                <li className="border-b border-orange-light py-3">
                  <Link
                    to="/"
                    className="font-varela text-orange-dark transition-colors duration-200 text-[17px]"
                    onClick={menuClose}
                  >
                    Home
                  </Link>
                </li>
                <li className="border-b border-orange-light py-3">
                  <Link
                    to="/about"
                    className="font-varela text-orange-dark transition-colors duration-200 text-[17px]"
                    onClick={menuClose}
                  >
                    About
                  </Link>
                </li>
                <li className="border-b border-orange-light py-3">
                  <Link
                    to="/menu"
                    className="font-varela text-orange-dark transition-colors duration-200 text-[17px]"
                    onClick={menuClose}
                  >
                    Menu
                  </Link>
                </li>
                <li className="py-3">
                  <Link
                    to="/contact"
                    className="font-varela text-orange-dark transition-colors duration-200 text-[17px]"
                    onClick={menuClose}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
