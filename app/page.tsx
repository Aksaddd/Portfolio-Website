import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Contact />
    </main>
  );
}
