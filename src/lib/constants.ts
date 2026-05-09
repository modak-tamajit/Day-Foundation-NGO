/* ===================================================================
 * DAY Foundation — Site-wide Constants
 * ===================================================================
 * Central location for all text, links, and data used across the site.
 * Edit this file to change navigation items, footer links, social URLs,
 * organization info, and section content without touching components.
 * 
 * SOURCE: Official DAY Foundation Central Information Sheet (10/09/2025)
 * =================================================================== */

/* ── Navigation ── */
export const NAV_LINKS = [
  { label: "Our Mission", href: "/#mission" },
  { label: "Community Stories", href: "/impact" },
  { label: "Impact", href: "/#impact-stats" },
  { label: "Get Involved", href: "/get-involved" },
] as const;

export const NAV_CTA = {
  donate: { label: "Donate Now", href: "/get-involved#donate" },
  portal: { label: "Volunteer Portal", href: "/get-involved#volunteer" },
} as const;

/* ── Organization Info ── */
export const ORG_INFO = {
  name: "DAY Foundation",
  fullName: "DAY Foundation (BHTDAY Welfare Foundation)",
  legalName: "BHTDAY Welfare Foundation",
  tagline: "Rooted in Compassion, Built for Impact.",
  motto: "शिक्षा से सशक्तिकरण, युवा से समर्थन",
  description:
    "DAY Foundation is a Section 8, NITI Aayog-registered NGO dedicated to empowering underprivileged communities across India through Education, Aid, Youth, and Care. We focus on providing education to slum children, organizing healthcare and welfare drives, engaging youth through internships and volunteer programs, and creating employment opportunities.",
  founded: 2022,
  foundedDate: "12th April 2022",
  registrationType: "Section 8 Non-Profit Organisation, Registered with NITI Aayog Govt of India",

  /* Contact */
  phone: "+91 8982144416",
  emergencyPhone: "+91 6265114416",
  email: "info@dayfoundation.in",
  hrEmail: "hr@dayfoundation.in",
  legalEmail: "legal@dayfoundation.in",
  connectEmail: "connect@dayfoundation.in",
  volunteerEmail: "volunteer@dayfoundation.in",
  supportEmail: "support@dayfoundation.in",

  /* Address */
  address: {
    city: "Delhi",
    state: "Delhi",
    country: "India",
  },

  /* Cities of Operation */
  activeCities: ["Delhi", "Indore", "Jabalpur"],
  expansionCities: ["Delhi NCR", "Prayagraj", "Mumbai"],

  /* Links */
  website: "https://dayfoundation.in",
  linktree: "https://linktr.ee/dayfoundation",

  /* Forms */
  forms: {
    volunteer: "https://forms.gle/yCkah58QrvmJ8U1P6",
    internship: "https://forms.gle/E8txdN4JxsLxjdS5A",
    feedback: "https://forms.gle/VUR3Q1LQTzkLg6RY9",
    donation: "https://forms.gle/vbgZVLju3v3gBB3d9",
  },

  social: {
    instagram: "https://instagram.com/dayfoundation",
    twitter: "https://twitter.com/dayfoundation",
    linkedin: "https://linkedin.com/company/dayfoundation",
    facebook: "https://facebook.com/dayfoundation",
    youtube: "https://youtube.com/@dayfoundation",
    linktree: "https://linktr.ee/dayfoundation",
  },

  /* Working Model */
  workingModel: {
    offline: 60,
    online: 40,
    description:
      "DAY Foundation follows a 60% offline and 40% online working structure. Offline participation in drives and on-ground activities is mandatory.",
  },

  /* Funding Policy */
  fundingPolicy:
    "DAY Foundation follows a strict and independent funding model. The organisation does not accept CSR funding from corporate entities. There is no involvement with political funding or affiliations of any kind. All funds are raised through controlled and approved channels only.",
} as const;

/* ── Hero Section ── */
export const HERO_CONTENT = {
  badge: "OUR LEGACY",
  heading: "Rooted in Compassion,\nBuilt for Impact.",
  description:
    "Founded on 12th April 2022, DAY Foundation is dedicated to empowering underprivileged communities across India through Education, Aid, Youth, and Care. Active in Delhi, Indore, and Jabalpur — our mission is guided by the motto \"शिक्षा से सशक्तिकरण, युवा से समर्थन\".",
  stats: [
    { value: "1,200+", label: "Interns Trained" },
    { value: "3", label: "Cities Active" },
    { value: "800+", label: "Certificates Issued" },
  ],
  cta: { label: "Join Our Mission", href: "/get-involved" },
} as const;

/* ── Founder's Message ── */
export const FOUNDER_MESSAGE = {
  name: "Founder & Executive Director",
  message:
    "At DAY Foundation, our mission is to build an inclusive society where every individual has access to Education, Aid, Youth, and Care. Since our inception, we have been dedicated to empowering youth, supporting underprivileged communities, and providing sustainable solutions through initiatives like Rojgar and child development programs. Our goal is to create a future where everyone has the opportunity to grow, lead a dignified life, and become self-reliant. I am immensely proud of our team's commitment and hard work, which makes this journey possible. Thank you for your continued support as we make a meaningful difference, together.",
  image: "/images/founder.jpg",
} as const;

/* ── Mission & Vision ── */
export const MISSION_VISION = {
  mission: {
    title: "Our Mission",
    description:
      "To empower underprivileged communities across India through Education, Aid, Youth, and Care. We focus on providing education to slum children, organizing healthcare and welfare drives, engaging youth through internships and volunteer programs, and creating employment opportunities via innovative projects like Rojgar.",
    points: [
      "Education for slum children",
      "Healthcare & welfare drives",
      "Youth engagement & internships",
      "Employment via Rojgar initiative",
    ],
  },
  vision: {
    title: "Our Vision",
    description:
      "To build a brighter and more inclusive future through sustainable social impact. We envision expanding into universities and colleges, reaching more communities, launching mental health initiatives, and empowering youth to become self-reliant leaders of change.",
    points: [
      "Expanding into universities & colleges",
      "Increasing reach to more communities",
      "Mental health awareness & support",
      "Youth-driven network for social change",
    ],
  },
} as const;

/* ── Focus Areas ── */
export const FOCUS_AREAS = [
  {
    id: "education",
    title: "Education",
    description:
      "Providing education to slum children and underserved communities. Digital literacy programs and learning initiatives transforming futures.",
    icon: "GraduationCap",
    image: "/images/focus-education.jpg",
  },
  {
    id: "aid",
    title: "Aid & Welfare",
    description:
      "Organizing healthcare drives, welfare campaigns, and community support programs to provide essential aid where it's needed most.",
    icon: "HeartPulse",
    image: "/images/focus-healthcare.jpg",
  },
  {
    id: "youth",
    title: "Youth Empowerment",
    description:
      "Engaging youth through internship programs, volunteer opportunities, and leadership development to build the next generation of changemakers.",
    icon: "Users",
    image: "/images/focus-community.jpg",
  },
  {
    id: "rojgar",
    title: "Rojgar — Employment",
    description:
      "Creating sustainable employment opportunities through the innovative Rojgar project, empowering communities to become self-reliant.",
    icon: "Sprout",
    image: "/images/focus-livelihood.jpg",
  },
] as const;

/* ── Impact Statistics ── */
export const IMPACT_STATS = [
  { value: "1,200+", label: "Interns Trained", description: "Through 15-day programs" },
  { value: "800+", label: "Certificates Issued", description: "Social work internship" },
  { value: "3", label: "Active Cities", description: "Delhi, Indore, Jabalpur" },
  { value: "2022", label: "Founded", description: "12th April 2022" },
] as const;

/* ── Team / Central Management ── */
export const TEAM_MEMBERS = [
  {
    name: "Niharika Vasvani",
    role: "Head of Human Resource",
    bio: "Leading HR operations, volunteer management, and organizational development across all cities.",
    image: "/images/team-niharika.jpg",
  },
  {
    name: "Aditi Tiwari",
    role: "Head of Programs & Development",
    bio: "Driving program strategy, development initiatives, and community impact measurement.",
    image: "/images/team-aditi.jpg",
  },
  {
    name: "Khushi Tandon",
    role: "Head of Legal & Advocacy",
    bio: "Ensuring legal compliance, policy adherence, and advocacy efforts across the organization.",
    image: "/images/team-khushi.jpg",
  },
  {
    name: "Radhika Umre",
    role: "Head of SMH",
    bio: "Overseeing social media and digital outreach to amplify DAY Foundation's mission and reach.",
    image: "/images/team-radhika.jpg",
  },
  {
    name: "Harshita Saraiya",
    role: "Head of PR",
    bio: "Managing public relations, media engagement, and organizational communication.",
    image: "/images/team-harshita.jpg",
  },
  {
    name: "Khushali Tak",
    role: "Head of Finance & Hiring Executive",
    bio: "Managing financial operations, fund allocation, and executive hiring processes.",
    image: "/images/team-khushali.jpg",
  },
] as const;

/* ── City Management ── */
export const CITY_MANAGEMENT = [
  {
    name: "Moulshree Sahu",
    role: "City Representative — Jabalpur",
    image: "/images/team-moulshree.jpg",
  },
  {
    name: "Vinayak Khandelwal",
    role: "Management Co-Ord — Jabalpur",
    image: "/images/team-vinayak.jpg",
  },
  {
    name: "Anmol Chugwani",
    role: "Management Co-Ord — Indore",
    image: "/images/team-anmol.jpg",
  },
] as const;

/* ── Testimonials ── */
export const TESTIMONIALS = [
  {
    quote:
      "The DAY Foundation internship gave me a real purpose. Working with slum children in Indore opened my eyes to the power of education and compassion.",
    name: "Intern Volunteer",
    location: "Indore",
    image: "/images/testimonial-1.jpg",
  },
  {
    quote:
      "Being part of the healthcare drives was life-changing. DAY Foundation doesn't just talk about impact — they create it, on the ground, every single day.",
    name: "Healthcare Volunteer",
    location: "Jabalpur",
    image: "/images/testimonial-2.jpg",
  },
  {
    quote:
      "The 15-day social work internship program gave me skills, experience, and a certificate that truly means something. This foundation walks the talk.",
    name: "Student Intern",
    location: "Delhi",
    image: "/images/testimonial-3.jpg",
  },
] as const;

/* ── Campaigns / Programs ── */
export const CAMPAIGNS = [
  {
    title: "Education for Slum Children",
    category: "Education",
    description:
      "Providing quality education, learning materials, and mentorship to children in urban slum communities across Delhi, Indore, and Jabalpur.",
    image: "/images/campaign-education.jpg",
    link: "/impact",
  },
  {
    title: "Healthcare & Welfare Drives",
    category: "Healthcare",
    description:
      "Organizing health camps, awareness drives, and welfare programs in underserved communities to bring essential care to those who need it most.",
    image: "/images/campaign-health.jpg",
    link: "/impact",
  },
  {
    title: "Rojgar — Employment Initiative",
    category: "Livelihood",
    description:
      "Creating sustainable employment opportunities and skill-building programs to empower youth and communities towards self-reliance.",
    image: "/images/campaign-livelihood.jpg",
    link: "/impact",
  },
] as const;

/* ── Internship Program ── */
export const INTERNSHIP_INFO = {
  duration: "15 days",
  totalInterns: "1,200+",
  certificatesIssued: "800+",
  type: "Social Work Internship",
  stipend: "No Stipend",
  formLink: "https://forms.gle/E8txdN4JxsLxjdS5A",
} as const;

/* ── Events ── */
export const EVENTS = [
  {
    title: "Community Education Drive",
    date: "Ongoing",
    location: "Delhi, Indore, Jabalpur",
    description:
      "Regular education sessions for slum children with learning materials and mentorship support.",
    image: "/images/event-education.jpg",
  },
  {
    title: "Healthcare Awareness Camp",
    date: "Monthly",
    location: "Across Active Cities",
    description: "Free health awareness camps and welfare programs for underserved communities.",
    image: "/images/event-health.jpg",
  },
  {
    title: "Volunteer Orientation",
    date: "Monthly",
    location: "Virtual + City Offices",
    description: "Learn about our programs and how you can contribute to meaningful change.",
    image: "/images/event-volunteer.jpg",
  },
] as const;

/* ── FAQ ── */
export const FAQ_ITEMS = [
  {
    question: "What is DAY Foundation?",
    answer:
      "DAY Foundation (BHTDAY Welfare Foundation) is a Section 8, NITI Aayog-registered NGO founded on 12th April 2022. We are dedicated to empowering underprivileged communities across India through Education, Aid, Youth, and Care. We are active in Delhi, Indore, and Jabalpur.",
  },
  {
    question: "How can I volunteer with DAY Foundation?",
    answer:
      "You can apply through our official Volunteer Form. DAY Foundation follows a 60% offline and 40% online working structure. Offline participation in drives and on-ground activities is mandatory. Online work includes planning, coordination, content, and communication support. Contact us at volunteer@dayfoundation.in for more details.",
  },
  {
    question: "What internship programs do you offer?",
    answer:
      "We offer 15-day social work internship programs. Till date, we have trained 1,200+ interns and issued 800+ certificates. These are no-stipend internships focused on hands-on social impact work. Apply through our Internship Form or email hr@dayfoundation.in.",
  },
  {
    question: "How does DAY Foundation ensure transparency?",
    answer:
      "DAY Foundation follows a strict and independent funding model. We do not accept CSR funding from corporate entities, and there is no involvement with political funding or affiliations. All funds are raised through controlled and approved channels only. Every transaction is properly recorded, monitored, and legally compliant.",
  },
  {
    question: "How can I donate to DAY Foundation?",
    answer:
      "You can donate through our official Donation Form available on our website. All financial decisions and fund usage are handled only by authorized management. Funds are used strictly for organisational objectives and welfare activities. For queries, contact support@dayfoundation.in.",
  },
  {
    question: "Where does DAY Foundation operate?",
    answer:
      "We currently operate in Delhi, Indore, and Jabalpur. Our future vision includes expanding to Delhi NCR, Prayagraj, and Mumbai. We are also planning to expand into universities and colleges to build a youth-driven network.",
  },
  {
    question: "What is the Rojgar initiative?",
    answer:
      "Rojgar is our innovative employment project aimed at creating sustainable employment opportunities for underprivileged communities. It's part of our upcoming Segment 2 launch alongside Mental Wellness initiatives.",
  },
] as const;

/* ── Credentials ── */
export const CREDENTIALS = [
  {
    title: "Section 8 Registered",
    description: "Registered non-profit organization under the Companies Act.",
    icon: "Shield",
  },
  {
    title: "NITI Aayog",
    description: "Registered on NITI Aayog NGO Darpan portal, Govt of India.",
    icon: "Building2",
  },
  {
    title: "Independent Funding",
    description: "No CSR or political funding. All funds raised through approved channels only.",
    icon: "BadgeCheck",
  },
  {
    title: "Legal Compliance",
    description: "Dedicated Legal Unit ensuring all activities are legally sound and compliant.",
    icon: "FileCheck",
  },
] as const;

/* ── Future Vision ── */
export const FUTURE_VISION = [
  "Restarting Delhi Operations with stronger structure and coordination",
  "Expanding into Universities & Colleges to build a youth-driven network",
  "Increasing Social Impact by reaching more communities",
  "Focusing on Mental Health through awareness and support initiatives",
  "Launching DAY Influencer Community to amplify reach and visibility",
  "Expanding to New Cities: Delhi NCR, Prayagraj, and Mumbai",
  "Segment 2 Launch: Focus on Rojgar & Mental Wellness",
  "Strengthening HR & Legal Units for compliance and sustainability",
] as const;

/* ── Footer Links ── */
export const FOOTER_LINKS = {
  explore: [
    { label: "Our Mission", href: "/#mission" },
    { label: "Impact Stories", href: "/impact" },
    { label: "Programs", href: "/programs" },
    { label: "Events", href: "/#events" },
  ],
  governance: [
    { label: "About Us", href: "/about" },
    { label: "Transparency", href: "/about#transparency" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Bylaws", href: "/about#bylaws" },
  ],
  connect: [
    { label: "Contact Us", href: "/contact" },
    { label: "Volunteer", href: "/get-involved#volunteer" },
    { label: "Internship", href: "/get-involved#internship" },
    { label: "Donate", href: "/get-involved#donate" },
  ],
} as const;
