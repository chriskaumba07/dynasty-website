// ╔═══════════════════════════════════════════════════════════════════════════╗
// ║                    🌟 EDIT THIS FILE TO UPDATE YOUR SITE 🌟                ║
// ║                                                                           ║
// ║  This file contains all the text you might want to change.                ║
// ║  Just edit the text between the quotes, save, and rebuild!                ║
// ║                                                                           ║
// ╚═══════════════════════════════════════════════════════════════════════════╝

// ─────────────────────────────────────────────────────────────────────────────
// 📌 THOUGHT OF THE WEEK - Change this every week!
// ─────────────────────────────────────────────────────────────────────────────
export const thoughtOfTheWeek = {
  text: "Collecting days that feel like they belong in a film.",
  date: "Field note 024",
};

// ─────────────────────────────────────────────────────────────────────────────
// 📌 NOW SECTION - What are you currently doing?
// ─────────────────────────────────────────────────────────────────────────────
export const nowSection = {
  eyebrow: "Right now · Summer 2026",
  heading: "Planting things I may never sit in the shade of.",
  items: [
    { label: "Reading", content: "The Creative Act" },
    { label: "Building", content: "A calmer financial life" },
    { label: "Learning", content: "To trust the long route" },
  ],
};

// ─────────────────────────────────────────────────────────────────────────────
// 📌 MANIFESTO SECTION - Your "About" text
// ─────────────────────────────────────────────────────────────────────────────
export const manifesto = {
  eyebrow: "The idea",
  dropCap: "D",  // Just one letter!
  text: "ynasty is not about where I came from. It is about what I choose to leave behind: work with meaning, honest proof of growth, and a life documented with warmth.",
  aside: "A house for every chapter. I invite you to view...the Dynasty",
};

// ─────────────────────────────────────────────────────────────────────────────
// 📌 ARCHIVE/MEMORY SECTION - Your photos
// ─────────────────────────────────────────────────────────────────────────────
// 
// 📷 HOW TO ADD YOUR OWN IMAGES:
// 1. Create a folder called "images" inside the "public" folder
// 2. Put your photos there (JPG, PNG, or WebP files)
// 3. Change the image path below to: './images/your-photo-name.jpg'
//
// Example: If you have a photo called "sunset.jpg" in public/images/
// Change: backgroundImage: 'linear-gradient(...)'
// To:     backgroundImage: 'url(./images/sunset.jpg)'
//
// The 'linear-gradient(...)' values create colors without images.
// Replace with 'url(...)' to show your actual photos!
// ─────────────────────────────────────────────────────────────────────────────
export const memories = [
  {
    type: "photo", // 'photo' or 'video' or 'quote'
    caption: "Lisbon, 6:42 PM",
    // Replace the background with an image like this:
    // backgroundImage: "url(./images/lisbon-photo.jpg)",
    background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    span: "tall", // 'tall' = spans 2 rows, 'normal' = normal height
  },
  {
    type: "video",
    caption: "Summer film · 01:18",
    background: "linear-gradient(135deg, #1f1c2c 0%, #302b39 50%, #24243e 100%)",
  },
  {
    type: "quote",
    quote: "Collecting days that feel like they belong in a film.",
    quoteSource: "Field note 024",
    span: 2, // spans 2 columns
  },
  {
    type: "photo",
    caption: "Sunday table",
    background: "linear-gradient(135deg, #3d2c29 0%, #2a1f1d 100%)",
  },
  {
    type: "photo",
    caption: "On the way home",
    background: "linear-gradient(135deg, #1d2c3d 0%, #1a2530 100%)",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 📌 PROJECTS SECTION - Your work
// ─────────────────────────────────────────────────────────────────────────────
export const projects = [
  {
    number: "01",
    category: "Wealth",
    title: "The Freedom Fund",
    description: "A personal operating system for saving, investing, and buying back my time.",
    meta: "Ongoing · 2024—",
    color: "gold", // gold, rose, green, blue, clay, plum
  },
  {
    number: "02",
    category: "Art",
    title: "Rooms I Remember",
    description: "A growing visual study of homes, objects, light, and the stories they keep.",
    meta: "Photography · Volume I",
    color: "rose",
  },
  {
    number: "03",
    category: "Becoming",
    title: "The Long Game",
    description: "Twelve months of stronger habits, quieter mornings, and deliberate change.",
    meta: "Journal · 38 entries",
    color: "green",
  },
  {
    number: "04",
    category: "Art",
    title: "Sunday Studio",
    description: "Small experiments in paint, collage, type, and making without permission.",
    meta: "Mixed media · 17 pieces",
    color: "blue",
  },
  {
    number: "05",
    category: "Wealth",
    title: "Keys & Foundations",
    description: "Notes from learning property, place, and what it means to build a home.",
    meta: "Research · In progress",
    color: "clay",
  },
  {
    number: "06",
    category: "Becoming",
    title: "Notes to Future Me",
    description: "Letters, lessons, and evidence that the person I imagined is taking shape.",
    meta: "Private archive · 2022—",
    color: "plum",
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// 📌 SITE INFO
// ─────────────────────────────────────────────────────────────────────────────
export const siteInfo = {
  wordmark: "DYNASTY",
  tagline: "A personal archive of a life in progress",
  heroTitle: "DYNASTY",
  heroSubtitle: "A personal archive of a life in progress",
  heroText: "A living record of what I'm building, what I'm becoming, and everything worth remembering along the way.",
  establishment: "MMXXVI",
  footerTagline: "Built slowly. Kept forever.",
  copyright: "© 2026 · Somewhere between here and there",
  currentMonth: "July 2026",
};
