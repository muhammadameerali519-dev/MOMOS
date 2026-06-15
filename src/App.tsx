import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Deals from "./components/Deals";
import OutdoorScene from "./components/OutdoorScene";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import BiteBot from "./components/BiteBot";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#111111] text-white min-h-screen selection:bg-[#F97316] selection:text-white overflow-x-hidden antialiased">
      {/* Sticky Top Header Navigation */}
      <Navbar />

      {/* Main Structural Layout blocks */}
      <main>
        <Hero />
        <About />
        <Menu />
        <Deals />
        <OutdoorScene />
        <Locations />
        <Testimonials />
        <Gallery />
      </main>

      {/* Persistent floating AI chatbot assistant (BiteBot) */}
      <BiteBot />

      {/* Bottom informational footer summary */}
      <Footer />
    </div>
  );
}

