import React, { useState } from "react";
import Logo from "../../assets/Photos/Logo.png";

import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { MobileMenu } from "./MobileMenu";
import { Menu as MenuItems } from "./Menu";
import { Button } from "../Common/Button";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  // Current Route
  const location = useLocation();

  return (
    <header
      className="
        fixed top-0 left-0 w-full
        h-24
        bg-[rgb(var(--color-cloudMilk))]
        shadow-sm
        z-50
      "
    >
      <div
        className="
          max-w-8xl mx-auto
          h-full
          flex items-center justify-between
          px-6 md:px-12
        "
      >
        {/* Logo */}
        <div className="flex-1">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="
                w-36 md:w-42
                h-auto
                object-contain
              "
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-10 font-heading">
            {MenuItems.map((item, idx) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={idx} className="relative group">
                  <Link
                    to={item.path}
                    className={`
                      relative
                      text-lg
                      tracking-wide
                      transition-colors duration-300
                      
                      ${
                        isActive
                          ? `
                            text-[rgb(var(--color-mossVelvet))]
                            font-semibold
                          `
                          : `
                            
                            text-[rgb(var(--color-mossVelvet))]/80
                            hover:text-[rgb(var(--color-mossVelvet))]
                          `
                      }
                    `}
                  >
                    {item.name}

                    {/* Animated Underline */}
                    <span
                      className={`
                        absolute left-0 -bottom-2
                        h-1
                        rounded-2xl
                        bg-[rgb(var(--color-mossVelvet))]
                        transition-all duration-500
                        
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                      `}
                    ></span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side */}
        <div
          className="
            flex-1
            flex justify-end items-center
            gap-4
          "
        >
          {/* Hire Me Button */}
          <Link to="/hire">
            <Button
              className="
              hidden md:block
              px-6 py-2.5
  "
            >
              Hire Me
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="
              md:hidden
              text-[rgb(var(--color-mossVelvet))]
              transition duration-300
            "
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
    </header>
  );

};
