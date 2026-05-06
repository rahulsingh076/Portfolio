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
      "
      onClick={() => setOpenMenu(false)}
    >
      {/* Sidebar */}
      <div
        className="
          w-62 h-screen ml-auto
          bg-[rgb(var(--color-mossVelvet))]/90
          text-[rgb(var(--color-cloudMilk))]
          p-6
          shadow-2xl
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top */}
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
              tracking-wide
            "
          >
            Menu
          </h2>

          {/* Close Button */}
          <button
            onClick={() => setOpenMenu(false)}
            className="
              hover:rotate-90
              transition duration-300
            "
          >
            <X size={28} />
          </button>
        </div>

        {/* Menu Items */}
        <ul className="flex flex-col gap-2 items-center">
          {Menu.map((item, idx) => {
            const isActive = location.pathname === item.path;

            return (
              <li key={idx}>
                <Link
                  to={item.path}
                  onClick={() => setOpenMenu(false)}
                  className={`

                    block
                    rounded-xl
                    px-8 py-2
                    text-md
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
