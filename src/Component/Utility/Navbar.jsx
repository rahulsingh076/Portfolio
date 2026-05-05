import React from "react";
import Logo from "../../assets/Photos/Logo.png";
import { Link } from "react-router-dom";
import { ListIndentDecrease } from "lucide-react";
import { MobileMenu } from "./MobileMenu";

export const Navbar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Project", path: "/project" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

    return (
      <div className="fixed top-0 left-0 w-full shadow-md z-50 ">
        <div className="flex items-center justify-between px-12 py-4  ">
          {/* Logo */}
          <div className="flex-1">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-50 h-auto object-contain "
              />
            </Link>
          </div>

          {/* Navigation with responsive code */}
          <nav className="flex-1">
            <ul className="hidden md:flex justify-center gap-10 font-heading">
              {navItems.map((item, idx) => (
                <li key={idx} className="text-lg hover:opacity-70 transition">
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right side ( button Hire me) */}
          <div className="flex-1 flex justify-end">
            <Link to="/hire">
              <button className="hidden md:block transition ]">Hire Me</button>
            </Link>

            <button className="md:hidden ">
              <ListIndentDecrease />
            </button>
          </div>
        </div>
        <MobileMenu />
      </div>
    );
};
