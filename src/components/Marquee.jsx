import Icon from "./Icon";

const ITEMS = [
  "Breakfast",
  "Specialty coffee",
  "Board games",
  "Laptop corners",
  "Shisha",
  "Desserts",
  "Good company",
];

export default function Marquee() {
  return (
    <div className="marquee overflow-hidden border-y border-cream/10 bg-ink py-4 text-cream sm:py-5">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div
            key={group}
            className="flex shrink-0 items-center"
            aria-hidden={group === 1 ? "true" : undefined}
          >
            {ITEMS.map((item) => (
              <span
                key={`${group}-${item}`}
                className="flex items-center gap-7 whitespace-nowrap px-7 text-[10px] font-bold uppercase tracking-[0.22em] text-cream/85 sm:px-9"
              >
                {item}
                <Icon name="spark" size={12} className="text-orange" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
