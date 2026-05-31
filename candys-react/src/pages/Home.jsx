import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Sobre from "../components/Sobre";
import Produtos from "../components/Produtos";
import Contato from "../components/Contato";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Sobre />
      <Produtos />
      <Contato />
      <Footer />
    </div>
  );
}
