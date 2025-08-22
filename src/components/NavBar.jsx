import React from "react";
import {
  FaHamburger,
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
} from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import ToggleDark from "./ToggleDark";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const NavItems = [
    {
      title: "Home",
      icon: <FaHome />,
      href: "/",
    },
    {
      title: "About",
      icon: <FaInfoCircle />,
      href: "/about",
    },
    {
      title: "Projects",
      icon: <FaLaptopCode />,
      href: "/projects",
    },
    {
      title: "Contact",
      icon: <IoMdContacts />,
      href: "contact",
    },
  ];

  return (
    <>
      <nav className="w-full bg-primary-color dark:bg-dark-primary-color dark:opacity-90 dark:border-b dark:border-b-outline-color shadow-md ">
        <div className="flex flex-row justify-start md:justify-between  space-x-9 px-10 py-4 md:py-3 max-w-7xl mx-auto items-center">
          <div className="md:hidden">
            <RxHamburgerMenu
              onClick={toggleMenu}
              className="  text-3xl text-black dark:text-white"
            />
          </div>

          <div>
            <span className="text-3xl mix_colors">Bibek Pandit</span>
          </div>

          <div className="max-md:hidden  flex flex-row gap-x-4 items-center justify-center">
            {NavItems.map((item, index) => (
              <NavLink
                to={item.href}
                key={index}
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "bg-button-color text-white transition-all duration-100 ease-in "
                      : ""
                  } group px-3 flex py-2 space-x-2 cursor-pointer rounded-md nav-hover `
                }
              >
                <span className="text-2xl group-hover:text-white text-black dark:text-white">
                  {item.icon}
                </span>
                <h3 className="text- text-black dark:text-white group-hover:text-white ">
                  {item.title}
                </h3>
              </NavLink>
            ))}
          </div>

          <div className="max-md:hidden ">
            <span>
              <ToggleDark />
            </span>
          </div>
        </div>
      </nav>

      <section
        className={`md:hidden absolute border-r border-r-gray-300 dark:border-r-outline-color z-40 top-17 h-[calc(100vh-70px)] w-26 bg-primary-color dark:bg-dark-primary-color shadow-md border-t border-t-gray-300 dark:border-t-outline-color flex flex-col gap-40 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-100 ease-in-out `}
      >
        <div className="flex flex-col  ">
          {NavItems.map((item, i) => (
            <NavLink
            to={item.href}
              key={i}
              className={({isActive})=>
            `${
                isActive?"bg-button-color text-white transition-all duration-100 ease-in":""
            } group flex flex-col gap-2      py-4 items-center  even:bg-lightest-color odd:bg-lighter-color dark:even:bg-dark-secondary-color dark:odd:bg-dark-fourth-color  cursor-pointer rounded-sm nav-hover`}
            >
              <li className="group-hover:text-white text-xl text-black dark:text-white list-none">
                {item.icon}
              </li>
              <li className="group-hover:text-white  text-black dark:text-white list-none">
                {item.title}
              </li>
            </NavLink>
          ))}
        </div>

        {/* w-fit so that it doesn't take the width of section */}
        <div className="w-fit mx-auto">
          <ToggleDark />
        </div>
      </section>
    </>
  );
};

export default NavBar;
