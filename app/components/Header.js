"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from "react";

export default function Header() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

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

  return (
    <header>
      <nav>
        <div className={`logo ${isActive("/") ? "active" : ""}`}>
          <Link href="/" style={{ color: "inherit", textDecoration: "none" }}>Home</Link>
        </div>
        <ul>
          {/* Links use /#id to ensure they work from the Gallery page too */}
          <li className={isActive("/#work") ? "active" : ""}><Link href="/#work">Work</Link></li>
          <li className={isActive("/gallery") ? "active" : ""}><Link href="/gallery">Gallery</Link></li>
          <li className={isActive("/#about") ? "active" : ""}><Link href="/#about">About</Link></li>
          <li className={isActive("/commissions") ? "active" : ""}><Link href="/commissions">Commissions</Link></li>
        </ul>
      </nav>
    </header>
  );
}
