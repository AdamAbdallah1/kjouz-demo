export default function Logo({ light = false, className = "" }) {
  return (
    <a
      href="#top"
      aria-label="KJOZ — back to top"
      className={`group inline-flex items-baseline font-display text-[1.7rem] font-extrabold leading-none tracking-[-0.075em] ${
        light ? "text-cream" : "text-ink"
      } ${className}`}
    >
      <span>KJOZ</span>
      <span className="text-orange transition-transform duration-300 group-hover:translate-x-0.5">
        .
      </span>
    </a>
  );
}
