import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Portofolio from "../components/Portofolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  const location = useLocation();

  // Scroll ke section yang sesuai saat berpindah dari halaman lain
  // (mis. tombol "Kembali ke Portofolio" di halaman detail project)
  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    const el = document.getElementById(id);

    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Portofolio />

      <Contact />

      <Footer />
    </>
  );
}
