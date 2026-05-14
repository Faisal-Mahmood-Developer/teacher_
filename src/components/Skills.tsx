import { motion } from "framer-motion";
import { ClipboardList, Users, ClipboardCheck, MessageCircle } from "lucide-react";

const skills = [
  {
    icon: ClipboardList,
    title: "Lesson Planning",
    desc: "Designing structured, curriculum-aligned lessons with clear learning outcomes.",
  },
  {
    icon: Users,
    title: "Classroom Management",
    desc: "Creating disciplined, supportive environments where students thrive.",
  },
  {
    icon: ClipboardCheck,
    title: "Student Assessment",
    desc: "Crafting fair, formative assessments and offering meaningful feedback.",
  },
  {
    icon: MessageCircle,
    title: "Communication Skills",
    desc: "Engaging clearly with students, parents, and colleagues alike.",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative bg-secondary/40 py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-primary">Skills</span>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
            What I bring to the classroom.
          </h2>
        </div>

        <div className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2">
          {skills.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-card"
            >
              <div className="flex-shrink-0">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
