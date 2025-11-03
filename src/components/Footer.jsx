import { NavLink } from "react-router-dom";
import Button from "./Button";
import { assets } from "../assets/assets";

export default function Footer() {
  return (
    <footer className="bg-[#232533] py-10">
      <div className="w-full max-w-[1350px] mx-auto px-5 flex items-center flex-col">
        <div className="flex flex-col items-center justify-between gap-8 text-center">
          <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight text-white font-yeseva">
            We Are Waiting to Serve You!
          </h3>
          <Button title="Book a table" link={"/"} />
          <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight text-white font-yeseva">
            Or Call +1 234 56 7890
          </h3>
          <ul className="flex items-center justify-center gap-5 flex-wrap">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-light" : "text-white"
                  } font-varela font-normal transition-all duration-200`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-light" : "text-white"
                  } font-varela font-normal transition-all duration-200`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-light" : "text-white"
                  } font-varela font-normal transition-all duration-200`
                }
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `${
                    isActive ? "text-orange-light" : "text-white"
                  } font-varela font-normal transition-all duration-200`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="w-full flex flex-col md:flex-row my-8">
          <div className="w-full mb-10 sm:mb-0 sm:w-1/4 text-white text-center px-10 flex flex-col gap-10">
            <div className="flex flex-col items-center justify-center gap-3">
              <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight font-yeseva">
                Location
              </h3>
              <p className="font-varela">
                1234 N Spring St, Los Angeles, CA 90012
              </p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight font-yeseva">
                Follow Us
              </h3>
              <ul className="flex items-center gap-4 justify-center">
                <li>
                  <a href="/" target="_blank">
                    <img
                      src={assets.facebook_icon}
                      alt="Facebook"
                      className="max-w-7 object-cover"
                    />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <img
                      src={assets.twitter_icon}
                      alt="Twitter"
                      className="max-w-7 object-cover"
                    />
                  </a>
                </li>
                <li>
                  <a href="/" target="_blank">
                    <img
                      src={assets.instagram_icon}
                      alt="Instagram"
                      className="max-w-7 object-cover"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full sm:w-2/4">
            <img
              src={assets.footer_table}
              alt="Dinning Table"
              className="w-max mx-auto"
            />
          </div>
          <div className="w-full sm:w-1/4 mt-10 sm:mt-0 text-white text-center px-10">
            <h3 className="text-2xl sm:text-3xl tracking-normal leading-tight font-yeseva">
              Hours
            </h3>
            <p className="font-varela">
              Monday : 11AM – 11PM <br />
              Tuesday : 11AM – 11PM <br />
              Wednesday : 11AM – 11PM
              <br />
              Thursday : 11AM – 11PM <br />
              Friday : 11AM – 11PM <br />
              Saturday : 11AM – 01AM
              <br />
              Sunday : 11AM – 01AM
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
