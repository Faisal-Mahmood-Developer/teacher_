import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const items = [
  { icon: Phone, label: "Phone", value: "0308-6319135", href: "tel:+923086319135" },
  { icon: Mail, label: "Email", value: "liaqatayesha52@gmail.com", href: "mailto:liaqatayesha52@gmail.com" },
  { icon: MapPin, label: "Location", value: "Lahore, Pakistan", href: null },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-border shadow-soft" style={{ background: "var(--gradient-soft)" }}>
          <div className="grid gap-10 p-10 md:grid-cols-2 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                Get in Touch
              </span>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-foreground md:text-5xl">
                Let's start a conversation.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Whether you'd like to discuss an opportunity, collaborate on a project, or simply
                say hello — I'd love to hear from you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              {items.map((item) => {
                const Wrapper: React.ElementType = item.href ? "a" : "div";
                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href ? { href: item.href } : {})}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all hover:-translate-y-0.5 hover:shadow-card"
                  >
                    <span className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs uppercase tracking-widest text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="truncate font-medium text-foreground">{item.value}</div>
                    </div>
                    {item.href && (
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                    )}
                  </Wrapper>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
