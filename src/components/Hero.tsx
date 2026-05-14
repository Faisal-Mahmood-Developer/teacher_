import { motion } from "framer-motion";
import { ArrowRight, Sparkles, BookOpen, Users, Award } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Decorative background image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        width={1536}
        height={1024}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40 mix-blend-multiply"
      />

      {/* Soft glow */}
      <div className="pointer-events-none absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-accent/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/20 blur-3xl" />

      <div className="container relative z-10 mx-auto grid items-center gap-12 px-6 lg:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="lg:col-span-8"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Educator · Lahore, Pakistan
          </span>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] text-foreground md:text-7xl lg:text-[5.5rem]">
            Hi, I'm <span className="italic text-primary">Ayesha</span>
            <br />
            Liaqat.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            B.Ed qualified teacher dedicated to nurturing curious, confident learners.
            Over <span className="font-medium text-foreground">1.5+ years</span> of experience teaching{" "}
            <span className="font-medium text-foreground">Grade 7 & 8</span> students.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contact Me
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-card"
            >
              Learn more
            </a>
          </div>

          {/* Stat chips */}
          <div className="mt-14 grid max-w-xl grid-cols-3 gap-4">
            {[
              { icon: BookOpen, label: "1.5+ yrs", sub: "Teaching" },
              { icon: Users, label: "Grade 7–8", sub: "Focus" },
              { icon: Award, label: "B.Ed", sub: "Qualified" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card/70 p-4 backdrop-blur"
              >
                <s.icon className="h-5 w-5 text-primary" />
                <div className="mt-3 font-display text-lg font-semibold text-foreground">{s.label}</div>
                <div className="text-xs text-muted-foreground">{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:col-span-4 lg:block"
        >
          <div className="relative mx-auto aspect-[3/4] max-w-sm">
            <div className="absolute inset-0 rotate-3 rounded-3xl bg-primary/10" />
            <div className="absolute inset-0 -rotate-2 rounded-3xl border border-border bg-card shadow-card" />
            <div className="relative flex h-full flex-col justify-between rounded-3xl border border-border bg-card p-8 shadow-card">
              <div>
                <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  Now teaching
                </div>
                <div className="mt-3 font-display text-2xl text-foreground">Dar-e-Arqam School</div>
                <div className="mt-1 text-sm text-muted-foreground">Apr 2025 — Present</div>
              </div>
              <div className="rounded-2xl bg-primary-soft p-5">
                <div className="font-display text-3xl text-primary">"</div>
                <p className="text-sm leading-relaxed text-foreground">
                  Every student deserves a teacher who believes in their potential.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
