import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header';
import Footer from './components/Footer';
import ClientProviders from './components/ClientProviders';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kayframe GA Portfolio",
  description: "Game Artist with Focus on Concept Art and Sculpting",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <Header />
          {children}
          <Footer />
        </ClientProviders>
      </body>
    </html>
  );
}