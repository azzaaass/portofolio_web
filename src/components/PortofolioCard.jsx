import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function PortofolioCard({ project }) {
  const navigate = useNavigate();

  return (
    <motion.div
      layout
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      onClick={() => navigate(`/project/${project.slug}`)}
      className="
                group
                relative
                bg-surface
                rounded-2xl
                overflow-hidden
                border
                border-line
                cursor-pointer
                hover:border-ink/20
                transition-colors
            "
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="
                        w-full
                        h-full
                        object-cover
                        duration-700
                        transition
                        group-hover:scale-105
                    "
        />

        <div
          className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black/70
                        via-black/10
                        to-transparent
                        opacity-0
                        group-hover:opacity-100
                        transition
                    "
        />

        <div
          className="
                        absolute
                        top-4
                        left-4
                        bg-surface/90
                        backdrop-blur
                        px-3.5
                        py-1.5
                        rounded-full
                        font-mono
                        text-xs
                        text-ink-soft
                    "
        >
          {project.category}
        </div>

        {/* corner-frame signature, reveals on hover */}
        <span
          className="
            absolute top-3 right-3 w-5 h-5
            border-t-2 border-r-2 border-white/0
            group-hover:border-white/70
            transition-colors duration-300
          "
        />
        <span
          className="
            absolute bottom-3 left-3 w-5 h-5
            border-b-2 border-l-2 border-white/0
            group-hover:border-white/70
            transition-colors duration-300
          "
        />

        <div
          className="
                        absolute
                        bottom-4
                        right-4
                        opacity-0
                        translate-y-3
                        group-hover:opacity-100
                        group-hover:translate-y-0
                        transition-all
                    "
        >
          <div
            className="
                            bg-white
                            text-black
                            rounded-full
                            w-11
                            h-11
                            flex
                            items-center
                            justify-center
                            shadow-lg
                        "
          >
            <FiArrowUpRight />
          </div>
        </div>
      </div>

      <div className="p-6">
        <h2 className="font-display text-xl font-semibold text-ink">
          {project.title}
        </h2>

        <p className="text-ink-soft mt-2.5 text-sm leading-6 line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5 font-mono text-xs">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="
                                px-2.5
                                py-1
                                rounded-md
                                bg-bg
                                border
                                border-line
                                text-ink-soft
                            "
            >
              {tech}
            </span>
          ))}

          {project.tech.length > 3 && (
            <span
              className="
                                px-2.5
                                py-1
                                rounded-md
                                bg-accent-soft
                                text-accent
                            "
            >
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
