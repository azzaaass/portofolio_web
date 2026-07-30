import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiUser,
  FiCalendar,
  FiClock,
  FiCheckCircle,
  FiStar,
} from "react-icons/fi";

import { projects } from "../data/projects";
import ProjectHero from "../components/ProjectHero";
import ProjectsGallery from "../components/ProjectsGallery";
import ProjectNavigation from "../components/ProjectNavigation";
import TechStack from "../components/TechStack";
import Footer from "../components/Footer";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export default function ProjectDetail() {
  const { slug } = useParams();

  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-bg">
        <p className="font-mono text-accent mb-3">404</p>
        <h1 className="font-display text-4xl font-semibold text-ink mb-4">
          Project tidak ditemukan
        </h1>
        <p className="text-ink-soft max-w-md mb-8">
          Project yang kamu cari mungkin sudah dipindahkan atau tidak pernah
          ada.
        </p>
        <Link
          to="/"
          className="
            bg-accent
            text-white
            px-6
            py-3
            rounded-xl
            hover:bg-accent-dark
            transition
          "
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  const meta = [
    { icon: <FiUser />, label: "Role", value: project.role },
    { icon: <FiCalendar />, label: "Tahun", value: project.year },
    { icon: <FiClock />, label: "Durasi", value: project.duration },
    { icon: <FiCheckCircle />, label: "Status", value: project.status },
  ].filter((item) => item.value);

  return (
    <div className="bg-bg">
      <ProjectHero project={project} />

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-16">
            <motion.div {...fadeUp}>
              <p className="eyebrow mb-4">about this project</p>
              <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                Overview
              </h2>
              <p className="text-ink-soft leading-8 whitespace-pre-line">
                {project.longDescription || project.description}
              </p>
            </motion.div>

            {project.features?.length > 0 && (
              <motion.div {...fadeUp}>
                <p className="eyebrow mb-4">what it does</p>
                <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                  Fitur Utama
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="
                        flex
                        items-center
                        gap-3
                        bg-surface
                        border
                        border-line
                        rounded-xl
                        px-5
                        py-4
                      "
                    >
                      <span
                        className="
                          w-9
                          h-9
                          rounded-lg
                          bg-accent-soft
                          text-accent
                          flex
                          items-center
                          justify-center
                          shrink-0
                        "
                      >
                        <FiCheckCircle size={16} />
                      </span>
                      <span className="font-medium text-ink">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {project.highlights?.length > 0 && (
              <motion.div {...fadeUp}>
                <p className="eyebrow mb-4">outcome</p>
                <h2 className="font-display text-3xl font-semibold text-ink mb-6">
                  Hasil &amp; Highlight
                </h2>

                <div className="space-y-4">
                  {project.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-start gap-3">
                      <span className="text-signal mt-1">
                        <FiStar size={16} />
                      </span>
                      <p className="text-ink-soft">{highlight}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            <motion.div {...fadeUp}>
              <p className="eyebrow mb-4">visuals</p>
              <ProjectsGallery gallery={project.gallery} title={project.title} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-28 h-fit space-y-8"
          >
            <div className="bg-surface border border-line rounded-2xl p-8">
              <h3 className="font-display font-semibold text-lg text-ink mb-6">
                Detail Project
              </h3>

              <div className="space-y-5">
                {meta.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <span
                      className="
                        w-10
                        h-10
                        rounded-lg
                        bg-bg
                        border
                        border-line
                        text-accent
                        flex
                        items-center
                        justify-center
                        shrink-0
                      "
                    >
                      {item.icon}
                    </span>
                    <div>
                      <p className="font-mono text-xs text-ink-faint uppercase tracking-wide">
                        {item.label}
                      </p>
                      <p className="font-medium text-ink">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-line">
                <p className="font-mono text-xs text-ink-faint uppercase tracking-wide mb-4">
                  Tech Stack
                </p>
                <TechStack tech={project.tech} />
              </div>

              <div className="mt-8 flex flex-col gap-3">
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-accent
                      text-white
                      px-6
                      py-3.5
                      rounded-xl
                      hover:bg-accent-dark
                      transition
                      font-medium
                    "
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      justify-center
                      gap-2
                      bg-surface
                      border
                      border-line
                      text-ink
                      px-6
                      py-3.5
                      rounded-xl
                      hover:border-ink/30
                      transition
                      font-medium
                    "
                  >
                    <FiGithub />
                    Lihat Source Code
                  </a>
                )}
              </div>
            </div>
          </motion.aside>
        </div>

        <div className="mt-20">
          <ProjectNavigation currentSlug={project.slug} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
