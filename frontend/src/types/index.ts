export interface PortfolioItem {
  name: string;
  category: string;
  year: string;
  description: string;
  tags: string[];
}

export interface ServiceItem {
  index: string;
  title: string;
  description: string;
  details?: string;
  deliverables?: string[];
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface CardItem {
  caption: string;
  title: string;
}

export interface NavItem {
  label: string;
  target: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialty: string;
  quote: string;
  imageUrl: string;
}

export interface ArticleSection {
  id: string;
  heading: string;
  body: string[];
  callout?: string;
  keyPoints?: string[];
  codeBlock?: {
    language: string;
    code: string;
  };
}

export interface BlogArticle {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  imageUrl: string;
  author: {
    name: string;
    role: string;
    avatarUrl?: string;
    initials: string;
  };
  tags: string[];
  infobox?: {
    topic: string;
    industry: string;
    difficulty: string;
    targetAudience: string;
  };
  sections: ArticleSection[];
  conclusion?: string;
}

export interface RequestFormData {
  name: string;
  email: string;
  project: string;
}

export interface TestimonialItem {
  name: string;
  handle: string;
  rating: number;
  content: string;
  avatarBg?: string;
  initials: string;
}

export interface ClientPartner {
  name: string;
  sub: string;
  badge: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}
