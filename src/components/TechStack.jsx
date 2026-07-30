export default function TechStack({ tech = [] }) {
  if (!tech.length) return null;

  return (
    <div className="flex flex-wrap gap-2 font-mono text-sm">
      {tech.map((item) => (
        <span
          key={item}
          className="
            px-3.5
            py-2
            rounded-lg
            bg-bg
            border
            border-line
            text-ink-soft
          "
        >
          {item}
        </span>
      ))}
    </div>
  );
}
