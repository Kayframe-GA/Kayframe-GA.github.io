"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import { projects } from "../data";

export default function Header() {
  const pathname = usePathname();
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
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

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
    if (href === "/") {
      if (pathname !== "/") return false;
      if (activeSection === "work" || activeSection === "about") return false;
      return true;
    }
    if (href === "/#work") return pathname === "/" && activeSection === "work";
    if (href === "/#about") return pathname === "/" && activeSection === "about";
    return pathname === href;
  };

  const onProjectPage = pathname.startsWith("/projects");

  return (
    <header>
      <nav>
        <div className={`logo ${isActive("/") ? "active" : ""}`}>
          <Link href="/" onClick={closeMenu} style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
        </div>
        <button
          type="button"
          className={`nav-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
          <span className="nav-toggle-bar"></span>
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {/* Links use /#id to ensure they work from the Gallery page too */}
          <li className={isActive("/#work") ? "active" : ""}><Link href="/#work" onClick={closeMenu}>Work</Link></li>
          <li className={isActive("/gallery") ? "active" : ""}><Link href="/gallery" onClick={closeMenu}>Gallery</Link></li>
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
              Projects
              <span className={`nav-caret ${projectsOpen ? "open" : ""}`}>&#9662;</span>
            </button>
            <ul className={`nav-dropdown-menu ${projectsOpen ? "open" : ""}`}>
              {projects.map((proj) => (
                <li key={proj.slug}>
                  <Link href={`/projects/${proj.slug}`} onClick={closeMenu}>{proj.title}</Link>
                </li>
              ))}
            </ul>
          </li>
          <li className={isActive("/#about") ? "active" : ""}><Link href="/#about" onClick={closeMenu}>About</Link></li>
          <li className={`nav-btn ${isActive("/commissions") ? "active" : ""}`}><Link href="/commissions" onClick={closeMenu}>Commissions</Link></li>
        </ul>
      </nav>
    </header>
  );
}
