import { Rubik } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal/LoginModal";


const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Ryan Foster-Hill | Portfolio",
  description: "Ryan Foster-Hill | Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className="flex flex-col min-h-screen">
        <LoginModal/>
        <Navbar/>
        {children}
        <Footer/>


      </body>
    </html>
  );
}
