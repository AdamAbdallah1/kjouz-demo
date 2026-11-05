import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Games from "./components/Games";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Visit from "./components/Visit";

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-ink px-5 py-3 text-xs font-bold text-cream transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <div className="noise-overlay" aria-hidden="true" />
      <Navbar />

      <main id="main">
        <Hero />
        <Marquee />
        <Experience />
        <Games />
        <Menu />
        <Gallery />
        <About />
        <Visit />
      </main>

      <Footer />
    </>
  );
}
