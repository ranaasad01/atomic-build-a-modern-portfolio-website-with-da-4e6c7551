export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  image: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description:
      "A real-time analytics platform with interactive charts, user management, and subscription billing built for modern SaaS products.",
    longDescription:
      "A full-stack SaaS analytics dashboard featuring real-time data visualization with Recharts, multi-tenant architecture, Stripe subscription management, and role-based access control. Built with Next.js 14, Prisma ORM, and PostgreSQL.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Recharts"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-1.png",
    featured: true,
  },
  {
    slug: "ai-writing-assistant",
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by OpenAI GPT-4 that helps users draft, edit, and improve content with context-aware suggestions.",
    longDescription:
      "An AI-powered writing assistant that leverages OpenAI's GPT-4 API to provide real-time writing suggestions, grammar corrections, tone adjustments, and content generation. Features a rich text editor built with TipTap and streaming responses.",
    tags: ["Next.js", "OpenAI", "TipTap", "Tailwind CSS", "Vercel AI SDK"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-2.png",
    featured: true,
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A high-performance online store with product catalog, cart management, checkout flow, and order tracking built on modern web standards.",
    longDescription:
      "A fully-featured e-commerce platform with dynamic product catalog, advanced filtering, cart and wishlist management, Stripe Checkout integration, and a custom admin panel for inventory management.",
    tags: ["Next.js", "TypeScript", "Stripe", "Sanity CMS", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-3.png",
    featured: true,
  },
  {
    slug: "devops-monitoring",
    title: "DevOps Monitoring Tool",
    description:
      "A lightweight infrastructure monitoring solution with alerting, log aggregation, and deployment pipeline visualization.",
    longDescription:
      "A DevOps monitoring tool that aggregates metrics from multiple cloud providers, provides real-time alerting via Slack/email, visualizes deployment pipelines, and offers log search with Elasticsearch integration.",
    tags: ["Node.js", "React", "Docker", "Elasticsearch", "WebSockets"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-4.png",
    featured: false,
  },
  {
    slug: "mobile-fitness-app",
    title: "Fitness Tracking App",
    description:
      "A cross-platform mobile app for workout logging, progress tracking, and personalized training plans with social features.",
    longDescription:
      "A React Native fitness app with workout logging, custom exercise library, progress charts, calorie tracking, and social features including workout sharing and friend challenges.",
    tags: ["React Native", "Expo", "Firebase", "Redux Toolkit", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-5.png",
    featured: false,
  },
  {
    slug: "open-source-ui-kit",
    title: "Open Source UI Kit",
    description:
      "A comprehensive React component library with 50+ accessible, customizable components built with Radix UI and Tailwind CSS.",
    longDescription:
      "An open-source React component library featuring 50+ accessible components built on Radix UI primitives, fully customizable with Tailwind CSS, with comprehensive Storybook documentation and TypeScript support.",
    tags: ["React", "TypeScript", "Radix UI", "Tailwind CSS", "Storybook"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    image: "/images/project-6.png",
    featured: false,
  },
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: [
      { name: "React", level: 5 },
      { name: "Next.js", level: 5 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Framer Motion", level: 4 },
      { name: "Vue.js", level: 3 },
      { name: "React Native", level: 4 },
      { name: "GraphQL", level: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: 5 },
      { name: "PostgreSQL", level: 4 },
      { name: "Prisma", level: 4 },
      { name: "Redis", level: 3 },
      { name: "REST APIs", level: 5 },
      { name: "tRPC", level: 4 },
      { name: "Python", level: 3 },
      { name: "Docker", level: 4 },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git & GitHub", level: 5 },
      { name: "Vercel", level: 5 },
      { name: "AWS", level: 3 },
      { name: "Figma", level: 4 },
      { name: "CI/CD", level: 4 },
      { name: "Jest", level: 4 },
      { name: "Playwright", level: 3 },
      { name: "Linux", level: 4 },
    ],
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
];
