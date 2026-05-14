import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Ayesha Liaqat — B.Ed Qualified Teacher | Lahore" },
      {
        name: "description",
        content:
          "Portfolio of Ayesha Liaqat, a B.Ed qualified teacher in Lahore with 1.5+ years of experience teaching Grade 7 & 8 students.",
      },
      { property: "og:title", content: "Ayesha Liaqat — B.Ed Qualified Teacher" },
      {
        property: "og:description",
        content: "Dedicated educator passionate about lesson planning, classroom management, and student development.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}
