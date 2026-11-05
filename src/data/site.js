export const SITE = {
  name: "KJOZ",
  tagline: "Taste the Moment.",
  address: "KfarJoz Main Road, Nabatieh, Lebanon",
  phone: "71 425 492",
  phoneHref: "tel:+96171425492",
  instagram: "https://www.instagram.com/kjoz.lb/",
  menu: "https://menu.omegasoftware.ca/kjoz",
  directions:
    "https://www.google.com/maps/search/?api=1&query=KJOZ%2C%20KfarJoz%20Main%20Road%2C%20Nabatieh%2C%20Lebanon",
  mapEmbed:
    "https://maps.google.com/maps?q=KJOZ%2C%20KfarJoz%20Main%20Road%2C%20Nabatieh%2C%20Lebanon&t=&z=14&ie=UTF8&iwloc=&output=embed",
};

export const NAV_LINKS = [
  { label: "The space", href: "#experience" },
  { label: "Game night", href: "#games" },
  { label: "Menu", href: "#menu" },
  { label: "Gallery", href: "#gallery" },
  { label: "Visit", href: "#visit" },
];

export const EXPERIENCES = [
  {
    id: "morning",
    label: "Morning",
    title: "Coffee first.",
    copy: "Breakfast on the table, a proper coffee in hand, and nowhere else to be. Ease into the day at your own speed.",
    image: "/images/opt/latte.webp",
    alt: "A latte served at KJOZ",
  },
  {
    id: "afternoon",
    label: "Afternoon",
    title: "Plug in or tune out.",
    copy: "A quiet corner for laptops and long lunches — or a good excuse to leave the inbox for later.",
    image: "/images/opt/lounge.webp",
    alt: "A guest relaxing in a corner at KJOZ",
  },
  {
    id: "evening",
    label: "Evening",
    title: "The table fills up.",
    copy: "Monopoly, Jackaroo, Risk, cards. The games come out, the volume goes up, and the next hour disappears.",
    image: "/images/opt/interior.webp",
    alt: "Inside KJOZ in the evening",
  },
  {
    id: "late",
    label: "Late",
    title: "One more round.",
    copy: "Shisha, something sweet, and the kind of conversation that carries you to midnight.",
    image: "/images/opt/shisha.webp",
    alt: "Shisha served at KJOZ",
  },
];

export const GAMES = [
  {
    id: "monopoly",
    name: "Monopoly",
    tagline: "Property, deals & friendly rivalry.",
    icon: "house",
    colour: "#e86c42",
  },
  {
    id: "jackaroo",
    name: "Jackaroo",
    tagline: "Marbles, moves & mild chaos.",
    icon: "marbles",
    colour: "#f4eee4",
  },
  {
    id: "risk",
    name: "Risk",
    tagline: "World domination, one roll at a time.",
    icon: "globe",
    colour: "#e7bb63",
  },
  {
    id: "cards",
    name: "Cards",
    tagline: "Deal, bluff, repeat.",
    icon: "cards",
    colour: "#aeb46b",
  },
];

export const MENU_CATEGORIES = [
  "All",
  "Breakfast",
  "Coffee",
  "Cold",
  "Sweet",
  "Shisha",
];

export const MENU_ITEMS = [
  {
    name: "Zaatar Baladi",
    category: "Breakfast",
    image: "/images/opt/zaatar.webp",
    note: "Served with cucumber, home-prepared olive & labneh baladi.",
    featured: true,
  },
  {
    name: "Sweet Break",
    category: "Sweet",
    image: "/images/opt/sweet-break.webp",
    note: "Any crepe of your choice — Nutella, Lotus, Kinder or Oreo — with a latte.",
    featured: true,
  },
  {
    name: "Latte",
    category: "Coffee",
    image: "/images/opt/latte.webp",
    featured: true,
  },
  {
    name: "Espresso",
    category: "Coffee",
    image: "/images/opt/espresso.webp",
  },
  {
    name: "White Mocha Frappe",
    category: "Coffee",
    image: "/images/opt/frappe.webp",
    note: "Double shot espresso.",
    featured: true,
  },
  {
    name: "Irish Frappe",
    category: "Coffee",
    image: "/images/opt/irish-frappe.webp",
    note: "Single shot espresso.",
  },
  {
    name: "Mojito Classic",
    category: "Cold",
    image: "/images/opt/mojito.webp",
    featured: true,
  },
  {
    name: "Cherry Mojito",
    category: "Cold",
    image: "/images/opt/cherry-mojito.webp",
  },
  {
    name: "Minted Lemonade",
    category: "Cold",
    image: "/images/opt/lemonade.webp",
  },
  {
    name: "Mango Smoothie",
    category: "Cold",
    image: "/images/opt/smoothie.webp",
  },
  {
    name: "Strawberry Milkshake",
    category: "Cold",
    image: "/images/opt/milkshake.webp",
  },
  {
    name: "Nutella Crepe",
    category: "Sweet",
    image: "/images/opt/nutella-crepe.webp",
  },
  {
    name: "Lotus Crepe",
    category: "Sweet",
    image: "/images/opt/crepe.webp",
    featured: true,
  },
  {
    name: "Brookie",
    category: "Sweet",
    image: "/images/opt/brookie.webp",
    note: "Better with chocolate gelato.",
    featured: true,
  },
  {
    name: "Cookies Plate",
    category: "Sweet",
    image: "/images/opt/cookies.webp",
    note: "Better with chocolate gelato.",
  },
  {
    name: "Apple Shisha",
    category: "Shisha",
    image: "/images/opt/shisha.webp",
    featured: true,
  },
  {
    name: "Grape Shisha",
    category: "Shisha",
    image: "/images/opt/grape-shisha.webp",
  },
];

export const GALLERY = [
  {
    src: "/images/opt/interior.webp",
    alt: "A corner inside KJOZ",
    caption: "Inside KJOZ",
    className:
      "col-span-2 aspect-[16/10] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
  },
  {
    src: "/images/opt/workshop.webp",
    alt: "An art workshop at KJOZ",
    caption: "Workshops & community",
    className:
      "col-span-1 aspect-[4/3] lg:col-span-5 lg:row-span-2 lg:aspect-auto",
  },
  {
    src: "/images/opt/latte.webp",
    alt: "A latte served at KJOZ",
    caption: "The daily ritual",
    className:
      "col-span-1 aspect-[4/3] lg:col-span-3 lg:row-span-1 lg:aspect-auto",
  },
  {
    src: "/images/opt/mojito.webp",
    alt: "A classic mojito at KJOZ",
    caption: "Something fresh",
    className:
      "col-span-1 aspect-[4/3] lg:col-span-4 lg:row-span-1 lg:aspect-auto",
  },
  {
    src: "/images/opt/crepe.webp",
    alt: "A Lotus crepe at KJOZ",
    caption: "Sweet things",
    className:
      "col-span-1 aspect-[4/3] lg:col-span-5 lg:row-span-1 lg:aspect-auto",
  },
  {
    src: "/images/opt/shisha.webp",
    alt: "Shisha served at KJOZ",
    caption: "Evening ritual",
    className:
      "col-span-1 aspect-[4/3] lg:col-span-5 lg:row-span-2 lg:aspect-auto",
  },
  {
    src: "/images/opt/lounge.webp",
    alt: "A quiet corner to settle into at KJOZ",
    caption: "Stay a while",
    className:
      "col-span-1 aspect-[4/3] lg:col-span-7 lg:row-span-2 lg:aspect-auto",
  },
];
