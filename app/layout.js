import { Inter } from "next/font/google";
import Link from 'next/link';
import "./globals.css";
import Header from './components/Header';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kayframe GA Portfolio",
  description: "Game Artist with Focus on Concept Art and Sculpting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

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
            <img src="/images/01_Logo.png" alt="Kay's logo" className="footer-stamp" />
        </footer>
      </body>
    </html>
  );
}