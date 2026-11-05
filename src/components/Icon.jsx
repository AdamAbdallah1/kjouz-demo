const ICONS = {
  "arrow-up-right": (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  "arrow-right": <path d="M4 12h15m-6-6 6 6-6 6" />,
  "arrow-down": <path d="M12 4v15m-6-6 6 6 6-6" />,
  "arrow-up": <path d="M12 20V5m-6 6 6-6 6 6" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.5 6.5h.01" />
    </>
  ),
  phone: (
    <path d="M8.2 3.5 10 8l-2 1.8c1.1 2.4 3 4.3 5.4 5.4L15 13l4.5 1.8v3.1c0 1.4-1.1 2.6-2.6 2.6C9.4 20.5 3.5 14.6 3.5 7.1c0-1.5 1.2-2.6 2.6-2.6h2.1Z" />
  ),
  "map-pin": (
    <>
      <path d="M20 10c0 5.7-8 11.5-8 11.5S4 15.7 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.7" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  "chevron-left": <path d="m14.5 5-7 7 7 7" />,
  "chevron-right": <path d="m9.5 5 7 7-7 7" />,
  spark: (
    <path d="M12 2c.5 5.4 4.6 9.5 10 10-5.4.5-9.5 4.6-10 10-.5-5.4-4.6-9.5-10-10 5.4-.5 9.5-4.6 10-10Z" />
  ),
  coffee: (
    <>
      <path d="M4 8h13v6.5a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V8Z" />
      <path d="M17 9h1.5a3 3 0 0 1 0 6H17" />
      <path d="M8 3.5v2M12 3v2M16 3.5v2" />
    </>
  ),
  house: (
    <>
      <path d="m3 11 9-7 9 7v9.5H3V11Z" />
      <path d="M9.5 20.5v-5h5v5" />
    </>
  ),
  marbles: (
    <>
      <circle cx="9" cy="9" r="4.2" />
      <circle cx="16" cy="14.5" r="3" />
      <circle cx="8" cy="17" r="1.8" />
      <path d="M4 3.5v2M2.8 4.5h2.4" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.4 2.4 3.6 5.3 3.6 8.5S14.4 18.1 12 20.5C9.6 18.1 8.4 15.2 8.4 12S9.6 5.9 12 3.5Z" />
    </>
  ),
  cards: (
    <>
      <rect x="7" y="4" width="11" height="15" rx="2" transform="rotate(6 7 4)" />
      <rect x="4.5" y="6" width="11" height="15" rx="2" transform="rotate(-6 4.5 6)" />
      <path d="M9 12.5h2.5M10.25 11.25v2.5" />
    </>
  ),
};

export default function Icon({
  name,
  size = 20,
  className = "",
  strokeWidth = 1.6,
}) {
  const shape = ICONS[name];

  if (!shape) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {shape}
    </svg>
  );
}
