import React from "react";

import { Link, useLocation } from "react-router-dom";

import { X } from "lucide-react";

import { Menu } from "./Menu";

export const MobileMenu = ({ setOpenMenu }) => {
  const location = useLocation();

  return (
    <div
      className="
        fixed inset-0
        bg-black/30
        backdrop-blur-sm
        md:hidden
        z-50
      "
      onClick={() => setOpenMenu(false)}
    >
      <div
        className="
          mobile-menu-panel w-72 h-screen ml-auto
          bg-[rgb(var(--color-mossVelvet))]/90
          text-[rgb(var(--color-cloudMilk))]
          p-6
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="
            flex items-center justify-between
            mb-8
          "
        >
          <h2
            className="
              text-xl
              font-semibold
              tracking-[0]
            "
          >
            Menu
          </h2>

          <button
            onClick={() => setOpenMenu(false)}
            className="
              grid h-10 w-10 place-items-center rounded-lg
              hover:rotate-90
              transition duration-300
            "
          >
            <X size={28} />
          </button>
        </div>

        <ul className="flex flex-col gap-2">
          {Menu.map((item) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setOpenMenu(false)}
                  className={`

                    block
                    rounded-lg
                    px-8 py-2
                    text-base
                    transition-all duration-300
                    
                    ${
                      isActive
                        ? `
                          bg-[rgb(var(--color-cloudMilk))]/15
                          backdrop-blur-md
                          border border-white/10
                        `
                        : `
                          hover:bg-white/10
                        `
                    }
                  `}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
