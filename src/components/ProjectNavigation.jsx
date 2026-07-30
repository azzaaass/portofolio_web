import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiGrid } from "react-icons/fi";
import { projects } from "../data/projects";

export default function ProjectNavigation({ currentSlug }) {
  const navigate = useNavigate();

  const currentIndex = projects.findIndex((p) => p.slug === currentSlug);

  const prevProject =
    projects[(currentIndex - 1 + projects.length) % projects.length];

  const nextProject = projects[(currentIndex + 1) % projects.length];

  const goTo = (slug) => {
    navigate(`/project/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (projects.length <= 1) return null;

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      <motion.button
        whileHover={{ y: -4 }}
        onClick={() => goTo(prevProject.slug)}
        className="
          group
          text-left
          bg-surface
          border
          border-line
          rounded-2xl
          p-6
          hover:border-ink/20
          transition-all
        "
      >
        <div className="flex items-center gap-2 text-ink-faint font-mono text-xs uppercase tracking-wide mb-3">
          <FiArrowLeft className="group-hover:-translate-x-1 transition" />
          Previous
        </div>
        <p className="font-display font-semibold text-lg text-ink line-clamp-1">
          {prevProject.title}
        </p>
      </motion.button>

      <motion.button
        whileHover={{ y: -4 }}
        onClick={() => {
          navigate("/#portofolio");
        }}
        className="
          flex
          flex-col
          items-center
          justify-center
          gap-2
          bg-accent
          text-white
          rounded-2xl
          p-6
          hover:bg-accent-dark
          transition-all
        "
      >
        <FiGrid size={20} />
        <span className="font-mono text-sm">all_projects</span>
      </motion.button>

      <motion.button
        whileHover={{ y: -4 }}
        onClick={() => goTo(nextProject.slug)}
        className="
          group
          text-right
          bg-surface
          border
          border-line
          rounded-2xl
          p-6
          hover:border-ink/20
          transition-all
        "
      >
        <div className="flex items-center justify-end gap-2 text-ink-faint font-mono text-xs uppercase tracking-wide mb-3">
          Next
          <FiArrowRight className="group-hover:translate-x-1 transition" />
        </div>
        <p className="font-display font-semibold text-lg text-ink line-clamp-1">
          {nextProject.title}
        </p>
      </motion.button>
    </div>
  );
}
