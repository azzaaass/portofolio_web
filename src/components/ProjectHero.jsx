import { motion } from "framer-motion";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function ProjectHero({ project }) {
  const navigate = useNavigate();

  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden bg-bg">
      <img
        src={project.hero}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-bg/20" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-between py-8">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          onClick={() => navigate("/#portofolio")}
          className="
            inline-flex
            items-center
            gap-2
            w-fit
            bg-white/10
            backdrop-blur
            text-white
            font-mono
            text-sm
            px-4
            py-2
            rounded-full
            border
            border-white/20
            hover:bg-white/20
            transition
          "
        >
          <FiArrowLeft />
          back
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="max-w-3xl"
        >
          <span className="font-mono text-sm text-white/60 tracking-wide">
            <span className="text-white/40">// </span>
            {project.category.toLowerCase()}
          </span>

          <h1 className="font-display text-4xl md:text-6xl font-semibold text-white leading-tight tracking-tight mt-3">
            {project.title}
          </h1>

          <p className="mt-4 text-white/70 text-lg max-w-2xl leading-7">
            {project.description}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
