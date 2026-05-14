import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const degrees = [
  { degree: "Bachelor of Education (B.Ed)", year: "2021", note: "Professional teaching qualification" },
  { degree: "Master of Science (M.Sc)", year: "2018", note: "Postgraduate degree" },
  { degree: "Bachelor of Science (B.Sc)", year: "2016", note: "Undergraduate degree" },
];

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Education</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            Built on a foundation of learning.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-3">
          {degrees.map((d, i) => (
            <motion.div
              key={d.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-soft"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary-soft transition-transform group-hover:scale-125" />
              <div className="relative">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="h-6 w-6" />
                </span>
                <div className="mt-6 font-display text-sm font-medium text-primary">{d.year}</div>
                <h3 className="mt-1 font-display text-xl font-semibold text-foreground">
                  {d.degree}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{d.note}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
