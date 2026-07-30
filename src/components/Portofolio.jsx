import { useMemo, useState } from "react";
import { motion } from "framer-motion";

import { projects } from "../data/projects";
import PortofolioCard from "./PortofolioCard";
import SectionTitle from "./SectionTitle";

export default function Portofolio() {
  const categories = [
    "All",

    ...new Set(projects.map((project) => project.category)),
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter((project) => project.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <section id="portofolio" className="py-28">
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle title="Selected Work" subtitle="portofolio" />

        {/* Filter */}

        <div className="flex flex-wrap gap-3 mb-14 font-mono text-sm">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`

                                px-5
                                py-2
                                rounded-full
                                border
                                transition

                                ${
                                  selectedCategory === category
                                    ? "bg-accent text-white border-accent"
                                    : "bg-surface text-ink-soft border-line hover:border-ink/30 hover:text-ink"
                                }

                                `}
            >
              {category.toLowerCase()}
            </button>
          ))}
        </div>

        {/* Grid */}

        <motion.div
          layout
          className="

                        grid

                        md:grid-cols-2

                        xl:grid-cols-3

                        gap-8

                    "
        >
          {filteredProjects.map((project) => (
            <PortofolioCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
