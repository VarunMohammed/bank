import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';
import Image from 'next/image'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Polima Foods | Top Quality Rice and Flour Exports",
  description: "Polima Foods is your premier destination for high-quality rice and flour products. We specialize in delivering premium ingredients for your kitchen and offer bespoke private labeling services to help you build your own brand. Discover the finest in nutrition and quality with Polima Foods, where every grain counts. Explore our products and services today!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}