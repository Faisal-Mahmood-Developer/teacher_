import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const jobs = [
  {
    school: "Dar-e-Arqam School",
    period: "Apr 2025 — Present",
    location: "Lahore",
    current: true,
    points: [
      "Teaching core subjects to Grade 7 & 8 students with engaging, student-centered lessons.",
      "Designing weekly lesson plans aligned with the school curriculum and learning objectives.",
      "Maintaining a positive, disciplined classroom environment that encourages participation.",
      "Conducting regular assessments and providing constructive feedback to students and parents.",
    ],
  },
  {
    school: "The Nation Grammar School",
    period: "Jan 2024 — Dec 2024",
    location: "Lahore",
    current: false,
    points: [
      "Delivered structured lessons to middle-school classes, focusing on conceptual clarity.",
      "Implemented interactive teaching methods to improve engagement and retention.",
      "Mentored students on academic performance and personal development.",
      "Collaborated with fellow teachers on co-curricular activities and parent meetings.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Experience</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            A timeline of teaching.
          </h2>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-12">
            {jobs.map((job, i) => (
              <motion.div
                key={job.school}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative pl-14 md:pl-0"
              >
                {/* Dot */}
                <div className="absolute left-3 top-2 grid h-5 w-5 place-items-center rounded-full bg-primary ring-4 ring-background md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary-foreground" />
                </div>

                <div
                  className={`md:grid md:grid-cols-2 md:gap-12 ${
                    i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className={`hidden md:block ${i % 2 === 0 ? "md:text-right md:pr-8" : "md:pl-8"}`}>
                    <div className="text-sm font-medium text-primary">{job.period}</div>
                    <div className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {job.location}
                    </div>
                  </div>

                  <div className={`${i % 2 === 0 ? "md:pl-8" : "md:pr-8"}`}>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-soft text-primary">
                            <Briefcase className="h-5 w-5" />
                          </span>
                          <div>
                            <h3 className="font-display text-xl font-semibold text-foreground">
                              {job.school}
                            </h3>
                            <div className="md:hidden text-xs text-muted-foreground">
                              {job.period} · {job.location}
                            </div>
                          </div>
                        </div>
                        {job.current && (
                          <span className="rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                            Current
                          </span>
                        )}
                      </div>

                      <ul className="mt-5 space-y-2.5">
                        {job.points.map((p) => (
                          <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
