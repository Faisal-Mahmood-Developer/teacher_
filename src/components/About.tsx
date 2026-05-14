import { motion } from "framer-motion";
import { Heart, Lightbulb, Users } from "lucide-react";
import portrait from "@/assets/about-portrait.jpg";

const pillars = [
  { icon: Heart, title: "Passion", text: "Teaching is more than a profession — it's a calling I embrace daily." },
  { icon: Users, title: "Connection", text: "Building strong, respectful classroom communities where every voice matters." },
  { icon: Lightbulb, title: "Growth", text: "Helping students develop critical thinking and confidence in themselves." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative mx-auto max-w-md"
          >
            <div className="absolute -inset-4 rounded-3xl bg-primary-soft -z-10" />
            <img
              src={portrait}
              alt="Illustration of Ayesha Liaqat"
              loading="lazy"
              width={1024}
              height={1280}
              className="rounded-3xl border border-border shadow-card"
            />
            <div className="absolute -bottom-6 -right-6 rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Based in</div>
              <div className="font-display text-lg text-foreground">Lahore, Pakistan</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-primary">About Me</span>
            <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
              Shaping young minds with patience &amp; purpose.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              I'm a passionate educator who believes the classroom is a place where curiosity meets
              compassion. With strong classroom management skills and a learner-first mindset, I
              create lessons that engage, challenge, and inspire Grade 7 &amp; 8 students.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              From thoughtful lesson planning to fair, formative assessment, my focus stays on the
              whole student — academic growth, character, and confidence.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <p.icon className="h-5 w-5 text-primary" />
                  <div className="mt-3 font-display text-base font-semibold text-foreground">
                    {p.title}
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
