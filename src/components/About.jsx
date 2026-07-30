import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { projects } from "../data/projects";
import SectionTitle from "./SectionTitle";

export default function About() {
  const categories = new Set(projects.map((p) => p.category));

  const stats = [
    { label: "Projects", value: `${projects.length}+` },
    { label: "Tech Stack", value: `${profile.skills.length}+` },
    { label: "Focus Areas", value: `${categories.size}` },
  ];

  return (
    <section id="about" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="About Me" subtitle="about" />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full max-w-md mx-auto lg:mx-0"
          >
            <div className="relative rounded-3xl overflow-hidden border border-line bg-surface aspect-[4/5]">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* corner-frame signature */}
            <span className="absolute -top-3 -left-3 w-8 h-8 border-t-2 border-l-2 border-accent rounded-tl-lg" />
            <span className="absolute -bottom-3 -right-3 w-8 h-8 border-b-2 border-r-2 border-accent rounded-br-lg" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-ink-soft leading-8 text-lg">
              {profile.about}
            </p>

            <div className="flex flex-wrap gap-2.5 mt-9">
              {profile.skills.map((skill) => (
                <span
                  key={skill}
                  className="
                    px-4
                    py-2
                    rounded-full
                    border
                    border-line
                    bg-surface
                    font-mono
                    text-sm
                    text-ink-soft
                  "
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-line">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-semibold text-ink">
                    {stat.value}
                  </p>
                  <p className="font-mono text-xs text-ink-faint uppercase tracking-wide mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
