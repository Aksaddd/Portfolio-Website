import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Portal from "@/components/Portal";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Portal />
      <Interests />
      <Contact />
    </main>
  );
}
