"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
  { href: "#work", label: "Selected work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-menu">
      <button
        className="menu-button"
        type="button"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav
        className="mobile-menu-panel"
        id="mobile-navigation"
        aria-label="Mobile navigation"
        hidden={!isOpen}
      >
        {navigationLinks.map(({ href, label }) => (
          <a href={href} key={href} onClick={() => setIsOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}