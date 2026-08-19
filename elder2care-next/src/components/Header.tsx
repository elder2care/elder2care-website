"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Who We Serve", href: "/serve" },
  { label: "Community Intelligence", href: "/platform" },
  { label: "Care Championship", href: "/community" },
  { label: "Stories", href: "/community#stories" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      {/* BRAND AREA */}
      <div className="brand-header">
        <Link
          href="/"
          className="brand"
          aria-label="Elder2Care home"
          onClick={closeMenu}
        >
          <div className="brand-logo-frame">
            <Image
              src="/images/elder2care-logo.png"
              alt="Elder2Care logo"
              width={893}
              height={579}
              priority
              className="brand-logo"
            />
          </div>

          <div className="brand-copy">
            <strong>Elder2Care</strong>
            <span>Guiding Seniors. Connecting Care. Enriching Lives.</span>
          </div>
        </Link>

        <div className="header-social" aria-label="Elder2Care social media">
          <a
            href="https://www.facebook.com/Elder2Care"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.7.3-1 1-1z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/company/elder2care"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 3.5A2.5 2.5 0 1 1 5 8.5 2.5 2.5 0 0 1 5 3.5zM3 9h4v12H3V9zm6 0h4v1.7c.9-1.3 2.2-2.1 4.2-2.1 4 0 4.8 2.6 4.8 6V21h-4v-5.7c0-1.4 0-3.3-2-3.3s-2.3 1.5-2.3 3.2V21H9V9z" />
            </svg>
          </a>

          <a
            href="https://www.instagram.com/elder2care"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1.2" className="social-fill" />
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@elder2care"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M23 7.1a3 3 0 0 0-2.1-2.1C19 4.5 12 4.5 12 4.5s-7 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.9a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.9 31 31 0 0 0-.5-4.9z" />
              <path className="social-cutout" d="m10 8.5 5.5 3.5-5.5 3.5v-7z" />
            </svg>
          </a>

          <a
            href="https://bsky.app/profile/elder2care.bsky.social"
            aria-label="Bluesky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 10.7C10.8 8.3 7.6 4 4.6 4 2 4 1.1 5.7 1.1 7.2c0 3.2 2.4 5.1 5.1 5.6-2.7.3-4.7 1.6-4.7 4 0 2.2 1.8 3.2 3.7 3.2 3 0 5.5-3.2 6.8-5.5 1.3 2.3 3.8 5.5 6.8 5.5 1.9 0 3.7-1 3.7-3.2 0-2.4-2-3.7-4.7-4 2.7-.5 5.1-2.4 5.1-5.6C22.9 5.7 22 4 19.4 4c-3 0-6.2 4.3-7.4 6.7z" />
            </svg>
          </a>
        </div>
      </div>

      {/* NAVIGATION BAR */}
      <div className="navigation-bar">
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}

          <Link className="nav-cta" href="/contact">
            Let&apos;s Connect
          </Link>
        </nav>

        <button
          type="button"
          className="mobile-menu-button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <nav
          id="mobile-navigation"
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </Link>
          ))}

          <Link
            className="mobile-nav-cta"
            href="/contact"
            onClick={closeMenu}
          >
            Let&apos;s Connect
          </Link>
        </nav>
      )}
    </header>
  );
}
