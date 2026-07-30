export default function SectionTitle({ title, subtitle, align = "left" }) {
  return (
    <div
      className={`mb-14 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="eyebrow">{subtitle}</p>

      <h2 className="font-display text-4xl md:text-5xl font-semibold mt-3 text-ink tracking-tight">
        {title}
      </h2>
    </div>
  );
}
