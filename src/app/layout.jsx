import { Rubik } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="flex flex-col min-h-screen">
        
        <Navbar />
        {children}
        <Footer className=""/>


      </body>
    </html>
  );
}
