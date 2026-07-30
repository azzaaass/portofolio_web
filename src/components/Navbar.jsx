import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const menus = ["About", "Portofolio", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        border-b

        ${
          scrolled
            ? "backdrop-blur-xl bg-surface/80 border-line"
            : "bg-transparent border-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="font-display font-semibold text-lg text-ink flex items-center gap-2">
          <span className="signal-dot" />
          Baihaqi
          <span className="font-mono text-ink-faint text-sm">.dev</span>
        </a>

        <div className="hidden sm:flex gap-10 font-mono text-sm">
          {menus.map((menu) => (
            <a
              key={menu}
              href={`#${menu.toLowerCase()}`}
              className="
                relative
                text-ink-soft
                hover:text-ink
                transition
                py-1

                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-0.5
                after:h-[1.5px]
                after:w-0
                after:bg-accent
                after:transition-all
                after:duration-300
                hover:after:w-full
              "
            >
              {menu.toLowerCase()}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
