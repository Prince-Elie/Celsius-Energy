const base = import.meta.env.BASE_URL;

const flavorlists = [
  {
    name: "Sparkling Cherry Cola",
    label: "Cherry Cola",
    can: `${base}images/cherry-cola-front-wet-cans-usa.webp`,
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Arctic Vibe",
    label: "Arctic Vibe",
    can: `${base}images/Arctic-Vibe-front.webp`,
    rotation: "md:rotate-[3deg] rotate-0",
  },
  {
    name: "Fuji Apple Pear",
    label: "Apple Pear",
    can: `${base}images/Fuji-Apple-Pear-front.webp`,
    rotation: "md:rotate-[-3deg] rotate-0",
  },
  {
    name: "Kiwi Guava",
    label: "Kiwi Guava",
    can: `${base}images/Kiwi-Guava-front.webp`,
    rotation: "md:rotate-[4deg] rotate-0",
  },
  {
    name: "Mango Passionfruit",
    label: "Mango Passion",
    can: `${base}images/Mango-Passionfruit-front.webp`,
    rotation: "md:rotate-[-4deg] rotate-0",
  },
  {
    name: "Tropical Vibe",
    label: "Tropical Vibe",
    can: `${base}images/Tropical-Vibe-front.webp`,
    rotation: "md:rotate-[3deg] rotate-0",
  },
  {
    name: "Wild Berry",
    label: "Wild Berry",
    can: `${base}images/Wild-Berry-front.webp`,
    rotation: "md:rotate-[-3deg] rotate-0",
  },
];

const otgPackets = [
  { name: "Strawberry Mango", src: `${base}images/strawberry-mango-otg-packet-front.webp` },
  { name: "Strawberry Coconut", src: `${base}images/strawberry-coconut-otg-packet-front.webp` },
  { name: "Orange", src: `${base}images/orange-otg-packet-front-ornge.webp` },
  { name: "Berry", src: `${base}images/berry-otg-packet-front-berry.webp` },
  { name: "Tropical Vibe", src: `${base}images/Tropical-Vibe-front-OTG-packet-usa.webp` },
  { name: "Peach Vibe", src: `${base}images/Peach-Vibe-front-OTG-packet-usa.webp` },
  { name: "Arctic Vibe", src: `${base}images/Arctic-Vibe-front-OTG-packet-usa.webp` },
  { name: "Kiwi Guava Lime", src: `${base}images/kiwi-guava-lime-otg-packet-front-kwglim.webp` },
  { name: "Watermelon Ice", src: `${base}images/watermelon-ice-otg-packet-front.webp` },
  { name: "Blueberry Lemonade", src: `${base}images/blueberry-lemonade-otg-packet-front-bblmnd.webp` },
  { name: "Dragonfruit Lime", src: `${base}images/dragonfruit-lime-otg-packet-front-drgolm.webp` },
  { name: "Cranberry Lemon", src: `${base}images/cranberry-lemon-otg-packet-front-crnblm.webp` },
];

const cards = [
  {
    src: `${base}videos/shorts/short-1.mp4`,
    rotation: "rotate-z-[-10deg]",
    name: "Madison",
    img: `${base}images/p1.png`,
    translation: "translate-y-[-5%]",
  },
  {
    src: `${base}videos/shorts/short-2.mp4`,
    rotation: "rotate-z-[4deg]",
    name: "Alexander",
    img: `${base}images/p2.png`,
  },
  {
    src: `${base}videos/shorts/short-3.mp4`,
    rotation: "rotate-z-[-4deg]",
    name: "Andrew",
    img: `${base}images/p3.png`,
    translation: "translate-y-[-5%]",
  },
  {
    src: `${base}videos/shorts/short-4.mp4`,
    rotation: "rotate-z-[4deg]",
    name: "Bryan",
    img: `${base}images/p4.png`,
    translation: "translate-y-[5%]",
  },
  {
    src: `${base}videos/shorts/short-5.mp4`,
    rotation: "rotate-z-[-10deg]",
    name: "Chris",
    img: `${base}images/p5.png`,
  },
  {
    src: `${base}videos/shorts/short-6.mp4`,
    rotation: "rotate-z-[4deg]",
    name: "Devante",
    img: `${base}images/p6.png`,
    translation: "translate-y-[5%]",
  },
  {
    src: `${base}videos/shorts/short-7.mp4`,
    rotation: "rotate-z-[-3deg]",
    name: "Melisa",
    img: `${base}images/p7.png`,
    translation: "translate-y-[10%]",
  },
];

export { flavorlists, otgPackets, cards };
