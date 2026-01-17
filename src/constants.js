// Cal.com Configuration
export const CAL_USERNAME = "kelly-style-confident";
export const CAL_BOOKING_URL = `https://cal.com/${CAL_USERNAME}/consultation`;

// Color Palettes
export const defaultPalettes = [
  {
    name: "Refined Luxe",
    primary: "#2D2926",
    secondary: "#FAF7F4",
    accent1: "#E8614D",
    accent2: "#C9A962",
    neutral: "#7D756E",
    neutralLight: "#B8B2AA",
    background: "#FFFDFB"
  },
  {
    name: "Modern Femme",
    primary: "#6B3A42",
    secondary: "#FBF5F3",
    accent1: "#E8614D",
    accent2: "#D4A574",
    neutral: "#5C4F4F",
    neutralLight: "#A89999",
    background: "#FFFAF9"
  },
  {
    name: "Bold & Grounded",
    primary: "#2C4A3E",
    secondary: "#F9F7F4",
    accent1: "#E8614D",
    accent2: "#E8C547",
    neutral: "#4A5550",
    neutralLight: "#8B9590",
    background: "#FDFCFA"
  },
  {
    name: "Sleek Minimal",
    primary: "#1A1A1A",
    secondary: "#FAFAFA",
    accent1: "#E8614D",
    accent2: "#F4D03F",
    neutral: "#666666",
    neutralLight: "#9A9A9A",
    background: "#FFFFFF"
  }
];

export const colorLabels = {
  primary: { label: 'Primary', desc: 'Main text, headers, dark sections' },
  secondary: { label: 'Secondary', desc: 'Light backgrounds, cards' },
  accent1: { label: 'Accent 1', desc: 'Buttons, highlights, CTAs' },
  accent2: { label: 'Accent 2', desc: 'Gold accents, decorative elements' },
  neutral: { label: 'Neutral', desc: 'Body text, subtle elements' },
  neutralLight: { label: 'Neutral Light', desc: 'Borders, placeholders' },
  background: { label: 'Background', desc: 'Page background' }
};

// Testimonials
export const testimonials = [
  { quote: "Kelly completely transformed how I see my wardrobe. I finally feel like myself again after years of hiding in boring clothes.", name: "Sarah M.", title: "Wardrobe Rescue Client, Surrey" },
  { quote: "The colour analysis was life-changing! I've received more compliments in the last month than in the last year. I finally understand what works for me.", name: "Emma T.", title: "Colour Analysis Client, London" },
  { quote: "I was so nervous about personal shopping but Kelly made it fun and relaxed. She knew exactly which shops to take me to and I didn't waste money on mistakes.", name: "Rachel H.", title: "Personal Shopping Client, Battersea" }
];

export const bridalTestimonials = [
  { quote: "Kelly and the team were so helpful and friendly and really made me feel welcome and comfortable. They were amazing at recommending dresses to try that suited my shape.", name: "Rachel Tinawi" },
  { quote: "Kelly and her team were absolutely brilliant and I cannot thank them enough for helping me find my perfect dress. I had so many compliments on the day!", name: "Emily Miles" },
  { quote: "The Secret Dress House literally SAVED my wedding day. After being told there was nothing that could be done by another shop, Kelly went above and beyond.", name: "Holly Barakat" }
];

// Navigation Links
export const navLinks = [
  { label: 'Services', id: 'services' },
  { label: 'About', id: 'about' },
  { label: 'Contact', action: 'booking' }
];

// Services Data
export const services = [
  {
    title: "Wardrobe Rescue",
    subtitle: "3 hours · In-home",
    price: "£250",
    description: "We'll sort through everything you own, clear the clutter, and create outfits from pieces you'd forgotten you had.",
    ideal: "You've got clothes everywhere but 'nothing to wear'"
  },
  {
    title: "Personal Shopping",
    subtitle: "3 hours · In-store",
    price: "£250",
    description: "I'll take you to shops that actually suit your style and budget — no more wandering aimlessly or buying mistakes.",
    ideal: "Shopping feels overwhelming or you keep buying the wrong things"
  },
  {
    title: "Colour Analysis",
    subtitle: "2 hours · Professional draping",
    price: "£170",
    description: "Find out which colours make you look alive and which ones drain you. Game-changer for shopping.",
    ideal: "You want to stop guessing and finally know your colours"
  },
  {
    title: "Online Style Edit",
    subtitle: "2 hours · Virtual",
    price: "£150",
    description: "Can't meet in person? We'll do it over video — same results, from your own wardrobe.",
    ideal: "You're not local or prefer to work from home"
  }
];

// Problem statements
export const problems = [
  { title: "Your Life Has Evolved", text: "New job, new chapter, new priorities — but your wardrobe hasn't caught up. Your old clothes just don't feel like 'you' anymore." },
  { title: "You've Lost Your Style Identity", text: "You used to know what you liked. Now you default to the same safe outfits and wonder where 'you' went." },
  { title: "Shopping Leaves You Empty-Handed", text: "You walk into shops full of hope and leave with nothing. Or worse — another mistake hanging in your wardrobe with the tags still on." }
];

// FAQ Data
export const faqs = [
  {
    question: "Can a 'normal' person really use a personal stylist?",
    answer: "Absolutely! My services are designed for real women with real lives and budgets—not celebrities. If you've ever felt stuck with your style, I'm here for you."
  },
  {
    question: "What budget do I need for shopping appointments?",
    answer: "That's entirely up to you. We discuss budget before any shopping trip, and I work across all price points—from the high street to designer."
  },
  {
    question: "Do you offer virtual consultations?",
    answer: "Yes! My Online Style Edit is perfect if you're not in London or Surrey. We work via video call and I send personalised shopping links directly to you."
  }
];

// Instagram Grid Data
export const instagramGrid = [
  { bg: 'linear-gradient(135deg, #E8614D 0%, #C9A962 100%)', label: 'Style Tips' },
  { bg: 'linear-gradient(135deg, #FAF7F4 0%, #E8DFD0 100%)', label: 'Neutrals' },
  { bg: 'linear-gradient(135deg, #2D2926 0%, #4A4139 100%)', label: 'Outfits' },
  { bg: 'linear-gradient(135deg, #C9A962 0%, #E8614D 100%)', label: 'Colour' },
  { bg: 'linear-gradient(135deg, #7D756E 0%, #B8B2AA 100%)', label: 'BTS' },
  { bg: 'linear-gradient(135deg, #E8614D 0%, #FAF7F4 100%)', label: 'Tips' }
];
