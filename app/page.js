import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Servicios from "@/components/sections/Servicios";
import Testimonios from "@/components/sections/Testimonios";
import Contacto from "@/components/sections/Contacto";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Servicios />
      <Testimonios />
      <Contacto />
      <Footer />
    </main>
  );
}