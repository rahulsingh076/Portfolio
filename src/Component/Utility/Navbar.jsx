import React, { useState } from "react";
import Logo from "../../assets/Photos/Logo.png";

import { Link, useLocation } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { MobileMenu } from "./MobileMenu";
import { Menu as MenuItems } from "./Menu";
import { Button } from "../Common/Button";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const location = useLocation();

  return (
    <header
      className="
        sticky top-0 left-0 w-full
        h-20
        border-b border-[rgb(var(--color-mossVelvet))]/10
        bg-[rgb(var(--color-cloudMilk))]/88
        shadow-sm backdrop-blur-xl
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
        <div className="flex-1">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="
                w-32 md:w-36
                h-auto
                object-contain
                transition-transform duration-300 hover:-rotate-1 hover:scale-105
              "
            />
          </Link>
        </div>

        <nav className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-7 font-heading">
            {MenuItems.map((item) => {
              const isActive = location.pathname === item.path;

              return (
                <li key={item.id} className="relative group">
                  <Link
                    to={item.path}
                    className={`
                      relative
                      text-base
                      tracking-[0]
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

                    <span
                      className={`
                        absolute left-0 -bottom-2
                        h-0.5
                        rounded-lg
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

          <button
            aria-label="Toggle menu"
            className="
              md:hidden
              grid h-11 w-11 place-items-center rounded-lg border border-[rgb(var(--color-mossVelvet))]/15
              text-[rgb(var(--color-mossVelvet))]
              transition duration-300 hover:bg-[rgb(var(--color-mossVelvet))] hover:text-white
            "
            onClick={() => setOpenMenu(!openMenu)}
          >
            {openMenu ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {openMenu && <MobileMenu setOpenMenu={setOpenMenu} />}
    </header>
  );

};
