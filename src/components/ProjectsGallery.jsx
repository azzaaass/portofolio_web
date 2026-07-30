import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiX, FiChevronLeft, FiChevronRight, FiImage } from "react-icons/fi";

export default function ProjectsGallery({ gallery = [], title }) {
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current - 1 + gallery.length) % gallery.length
    );
  }, [gallery.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) =>
      current === null ? null : (current + 1) % gallery.length
    );
  }, [gallery.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, close, showPrev, showNext]);

  if (!gallery.length) return null;

  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <div
          className="
            w-10
            h-10
            rounded-xl
            bg-accent-soft
            text-accent
            flex
            items-center
            justify-center
          "
        >
          <FiImage size={18} />
        </div>

        <h3 className="font-display text-2xl font-semibold text-ink">Galeri Project</h3>

        <span className="text-ink-faint text-sm font-mono">
          ({gallery.length} gambar)
        </span>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gallery.map((item, index) => (
          <motion.button
            key={index}
            type="button"
            onClick={() => setActiveIndex(index)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ y: -6 }}
            className="
              group
              relative
              text-left
              rounded-2xl
              overflow-hidden
              border
              border-line
              bg-surface
              hover:border-ink/20
              transition-colors
              cursor-zoom-in
            "
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={item.src}
                alt={item.caption || `${title} - gambar ${index + 1}`}
                className="
                  w-full
                  h-full
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-110
                "
                loading="lazy"
              />
            </div>

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black/70
                via-black/0
                to-black/0
                opacity-0
                group-hover:opacity-100
                transition
              "
            />

            {item.caption && (
              <p
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-4
                  text-sm
                  text-white
                  opacity-0
                  translate-y-2
                  group-hover:opacity-100
                  group-hover:translate-y-0
                  transition
                "
              >
                {item.caption}
              </p>
            )}

            <span
              className="
                absolute
                top-3
                right-3
                bg-white/90
                backdrop-blur
                text-xs
                font-mono
                text-black
                px-2.5
                py-1
                rounded-full
              "
            >
              {index + 1}/{gallery.length}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/90
              backdrop-blur-sm
              flex
              items-center
              justify-center
              px-4
              py-10
            "
            onClick={close}
          >
            <button
              type="button"
              onClick={close}
              className="
                absolute
                top-6
                right-6
                w-11
                h-11
                rounded-full
                bg-white/10
                text-white
                flex
                items-center
                justify-center
                hover:bg-white/20
                transition
              "
              aria-label="Tutup"
            >
              <FiX size={22} />
            </button>

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                className="
                  absolute
                  left-4
                  md:left-8
                  top-1/2
                  -translate-y-1/2
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-white/20
                  transition
                "
                aria-label="Sebelumnya"
              >
                <FiChevronLeft size={22} />
              </button>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={gallery[activeIndex].src}
                alt={gallery[activeIndex].caption || title}
                className="w-full max-h-[75vh] object-contain rounded-2xl mx-auto"
              />

              <div className="mt-4 text-center">
                {gallery[activeIndex].caption && (
                  <p className="text-white/90">{gallery[activeIndex].caption}</p>
                )}
                <p className="text-white/40 text-sm mt-1">
                  {activeIndex + 1} / {gallery.length}
                </p>
              </div>
            </motion.div>

            {gallery.length > 1 && (
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                className="
                  absolute
                  right-4
                  md:right-8
                  top-1/2
                  -translate-y-1/2
                  w-11
                  h-11
                  rounded-full
                  bg-white/10
                  text-white
                  flex
                  items-center
                  justify-center
                  hover:bg-white/20
                  transition
                "
                aria-label="Berikutnya"
              >
                <FiChevronRight size={22} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
