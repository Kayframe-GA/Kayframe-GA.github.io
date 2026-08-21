import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link'; // Import Next.js Link for faster navigation

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kay | Game Artist Portfolio",
  description: "Game Artist with Focus on Concept Art and Sculpting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navigation moved here to persist across all pages */}
        <header>
          <nav>
            <div className="logo">
                <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link>
            </div>
            <ul>
              {/* Links use /#id to ensure they work from the Gallery page too */}
              <li><Link href="/#work">Work</Link></li>
              <li><Link href="/gallery">Gallery</Link></li> {/* NEW LINK */}
              <li><Link href="/#about">About</Link></li>
              <li><Link href="/commissions">Commissions</Link></li>
            </ul>
          </nav>
        </header>

        {children}

        {/* Footer can also be moved here if you want it on every page */}
        <footer>
            {/* Links row: legal + socials together */}
            <div className="footer-links">
                <Link href="/impressum">Impressum</Link>
                <Link href="/datenschutz">Datenschutzerklärung</Link>
                <a href="#">ArtStation</a>
                <a href="#">LinkedIn</a>
                <a href="#">Instagram</a>
            </div>

            <p>&copy; 2026 Kay. Built with passion.</p>

            {/* Small stamp */}
            <img src="/images/Signature.png" alt="Kay's signature" className="footer-stamp" />
        </footer>
      </body>
    </html>
  );
}