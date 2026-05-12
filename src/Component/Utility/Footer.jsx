import React from "react";
import { Code2, Mail, Send, Sparkles } from "lucide-react";
import Logo from "../../assets/Photos/Logo.png";
import { Menu } from "./Menu";
import { Link } from "react-router-dom";

const socials = [
  { label: "Code", icon: Code2 },
  { label: "Ideas", icon: Sparkles },
  { label: "Message", icon: Send },
  { label: "Email", icon: Mail },
];

export const Footer = () => {
  return (
    <footer className="border-t border-[rgb(var(--color-mossVelvet))]/12 bg-[rgb(var(--color-cloudMilk))] text-[rgb(var(--color-mossVelvet))]">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-10 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr] lg:px-12">
        <div>
          <img src={Logo} alt="Logo" className="h-auto w-32" />
          <p className="mt-4 max-w-sm text-sm leading-7 text-[rgb(var(--color-mossVelvet))]/70">
            Building digital products and portfolios that feel clean, useful,
            and ready for real visitors.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold">Quick Links</h2>
          <div className="mt-4 grid gap-3 text-sm">
            {Menu.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="transition-colors duration-300 hover:text-[rgb(var(--color-mossVelvet))]/70"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-heading text-lg font-bold">Follow Me</h2>
          <div className="mt-4 flex gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <button
                key={label}
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-lg border border-[rgb(var(--color-mossVelvet))]/15 bg-white/50 transition-all duration-300 hover:-translate-y-1 hover:bg-[rgb(var(--color-mossVelvet))] hover:text-white"
              >
                {React.createElement(Icon, {
                  size: 18,
                  "aria-hidden": "true",
                })}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-[rgb(var(--color-mossVelvet))]/10 px-6 py-4 text-center text-sm text-[rgb(var(--color-mossVelvet))]/65">
        Copyright 2026 Portfolio. All rights reserved.
      </div>
    </footer>
  );
};
