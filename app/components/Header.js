"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { projects } from "../data";
import { useLanguage, useTranslations } from "../context/LanguageContext";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const t = useTranslations();
  const [activeSection, setActiveSection] = useState("home");
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const projectsRef = useRef(null);
  const observerRef = useRef(null);

  const closeMenu = () => {
    setMenuOpen(false);
    setProjectsOpen(false);
  };

  // Close dropdown when clicking outside or on navigation
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (projectsRef.current && !projectsRef.current.contains(e.target)) {
        setProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const workEl = document.getElementById("work");
    const aboutEl = document.getElementById("about");

    if (!workEl || !aboutEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(workEl);
    observer.observe(aboutEl);
    observerRef.current = observer;

    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href) => {
    const active = pathname !== "/" ? null : activeSection;
    if (href === "/") {
      if (pathname !== "/") return false;
      if (active === "work" || active === "about") return false;
      return true;
    }
    if (href === "/#work") return pathname === "/" && active === "work";
    if (href === "/#about") return pathname === "/" && active === "about";
    return pathname === href;
  };

  const onProjectPage = pathname.startsWith("/projects");

  const projectLabel = (proj) => {
    const navTitle = lang === "de" ? proj.navTitleDE : proj.navTitle;
    return navTitle || proj.title;
  };

  return (
    <header>
      <nav>
        <div className={`logo ${isActive("/") ? "active" : ""}`}>
          <Link href="/" onClick={closeMenu} style={{ color: "inherit", textDecoration: "none" }}>{t.nav.home}</Link>
        </div>
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={t.nav.toggleNav}
          aria-expanded={menuOpen}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Links use /#id to ensure they work from the Gallery page too */}
          <li className={isActive("/#work") ? "active" : ""}><Link href="/#work" onClick={closeMenu}>{t.nav.work}</Link></li>
          <li className={isActive("/gallery") ? "active" : ""}><Link href="/gallery" onClick={closeMenu}>{t.nav.gallery}</Link></li>
          <li
            className={`nav-dropdown ${onProjectPage || isActive("/projects") ? "active" : ""}`}
            ref={projectsRef}
          >
            <button
              type="button"
              className="nav-dropdown-toggle"
              onClick={() => setProjectsOpen((o) => !o)}
              aria-expanded={projectsOpen}
              aria-haspopup="true"
            >
              {t.nav.projects}
              <span className={`nav-caret ${projectsOpen ? "open" : ""}`}>&#9662;</span>
            </button>
            <ul className={`nav-dropdown-menu ${projectsOpen ? "open" : ""}`}>
              {[...projects].reverse().map((proj) => (
                <li key={proj.slug}>
                  <Link href={`/projects/${proj.slug}`} onClick={closeMenu}>{projectLabel(proj)}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={isActive("/#about") ? "active" : ""}><Link href="/#about" onClick={closeMenu}>{t.nav.about}</Link></li>
          <li className={`nav-btn ${isActive("/commissions") ? "active" : ""}`}><Link href="/commissions" onClick={closeMenu}>{t.nav.commissions}</Link></li>
        </ul>
        <LanguageToggle />
      </nav>
    </header>
  );
}