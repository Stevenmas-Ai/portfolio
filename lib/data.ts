// ---------------------------------------------------------------------------
// All portfolio content lives here so the components stay presentational.
// Edit copy in this file; the UI updates automatically.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Steven Mascarenhas",
  fullName: "Steven Gerard Mascarenhas",
  initials: "SM",
  headline:
    "AI software engineer shipping production systems with real-world impact.",
  intro:
    "Software engineer with an MSc in AI & ML, building software, LLM workflows, REST API integrations, RAG pipelines and cloud-deployed models on AWS. I turn research-grade ideas into shipped, monitored, full-stack products with a collaborative, build-fast mindset.",
  availability: "Open to AI / ML & Software Engineering roles",
  location: "Dublin, Ireland",
  email: "stevengmascarenhas@gmail.com",
  github: "github.com/Stevenmas-Ai",
  githubUrl: "https://github.com/Stevenmas-Ai",
  linkedin: "linkedin.com/in/steven-mas",
  linkedinUrl: "https://linkedin.com/in/steven-mas",
  resumeUrl: "/Steven-Mascarenhas-CV.pdf",
  profileImage: "/profile.png",
};

export type Project = {
  title: string;
  date: string;
  cover: string;
  /** Outbound link — the whole card is clickable. */
  link: string;
  /** object-position for the cover image (default "50% 50%"). */
  coverPosition?: string;
  subtitle?: string;
  bullets: string[];
  tags: string[];
  badge?: { label: string; tone: "winner" | "accent" };
};

// Featured + academic projects (all render as full cards, each links to its repo).
export const projects: Project[] = [
  {
    title: "End-to-End AI Medical Chatbot",
    date: "Mar 2026",
    cover: "/assets/cover-medical.png",
    link: "https://github.com/Stevenmas-Ai",
    bullets: [
      "Built a production RAG pipeline over a 637-page medical corpus (5,800+ chunks, HuggingFace embeddings, Pinecone vector store) with reranking, serving real-time responses with FastAPI and React across Groq LLaMA 3.1 and OpenAI GPT-4o, containerised with Docker/ECR and deployed to AWS EC2 with Terraform and GitHub CI/CD.",
      "Evaluated and monitored the pipeline with LangSmith, scoring 100% on four LLM-as-judge metrics, with request tracing for latency, token usage, and cost.",
    ],
    tags: [
      "Python", "LangChain", "Pinecone", "Cohere Rerank", "FastAPI",
      "HuggingFace", "Groq", "OpenAI", "LangSmith", "Docker", "Terraform",
      "AWS EC2", "ECR", "GitHub Actions CI/CD",
    ],
  },
  {
    title: "Skin Lesion Classification for Skin Cancer Detection",
    date: "May 2025",
    cover: "/assets/cover-skin.png",
    link: "https://github.com/Stevenmas-Ai",
    bullets: [
      "Achieved 90%+ accuracy classifying 7 lesion types across 10,000+ images using a pretrained HuggingFace Vision Transformer and automated the pipeline (S3, Lambda, SageMaker, CloudWatch, IAM-secured access) with a Streamlit front-end for instant diagnoses.",
    ],
    tags: ["AWS SageMaker", "HuggingFace", "AWS Lambda", "S3", "IAM", "CloudWatch", "Streamlit"],
  },
  {
    title: "Vision Transformers for Semantic Segmentation",
    date: "Mar 2025",
    cover: "/assets/cover-segmentation.png",
    link: "https://github.com/Stevenmas-Ai/Comparative_analysis_of_vision_transformers_segformer_and_mask2Former_semantic_segmentation_IDD_lite",
    bullets: [
      "Comparative analysis of SegFormer and Mask2Former for semantic segmentation on the IDD-Lite Indian driving dataset.",
    ],
    tags: ["Python", "PyTorch", "SegFormer", "Mask2Former", "Jupyter Notebook"],
  },
  {
    title: "Deep Reinforcement Learning: Vanilla vs Double DQN",
    date: "Mar 2025",
    cover: "/assets/cover-rl.png",
    link: "https://github.com/Stevenmas-Ai/Deep-Reinforcement-Learning-Vanilla-versus-Double-Deep-neural-networks",
    bullets: [
      "Built and compared vanilla and Double Deep Q-Networks, evaluating training stability and reward performance on control tasks.",
    ],
    tags: ["Python", "PyTorch", "DQN", "Reinforcement Learning", "Jupyter Notebook"],
  },
  {
    title: "Survivor Struggle — AI for Games",
    date: "Mar 2025",
    cover: "/assets/cover-gameai.png",
    link: "https://github.com/Stevenmas-Ai/Survivor-Struggle---Artificial-Intelligence-for-Games",
    bullets: [
      "Game AI agents built in C# exploring pathfinding and decision-making behaviours for survival gameplay.",
    ],
    tags: ["C#", "Pathfinding", "Game AI"],
  },
];

export const hackathons: Project[] = [
  {
    title: "Prism — Crypto-Agile Post-Quantum Vault for Solana",
    date: "May 2026",
    cover: "/assets/prism-team.jpg",
    coverPosition: "50% 40%",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7464997714095955968/",
    badge: { label: "★ Hackathon Winner", tone: "winner" },
    subtitle:
      "Won Best Solana Solution and 3rd Place Overall (70+ participants) at the world's first Blockchain + Quantum Hackathon.",
    bullets: [
      "Built Prism, a crypto-agile migration layer that protects Solana assets from quantum attacks through a smart vault integrated with a decentralised post-quantum validation system. Supporting NIST-standardised Falcon and ML-DSA (FIPS-204) algorithms.",
    ],
    tags: [
      "Rust", "Anchor", "Solana Devnet", "Falcon-512", "ML-DSA-44",
      "Open Quantum Safe", "Phantom Wallet", "TypeScript", "React",
    ],
  },
  {
    title: "AdGuard AI — Brand Ad Safety Screening Agent",
    date: "Apr 2026",
    cover: "/assets/cover-adguard.png",
    link: "https://github.com/Stevenmas-Ai/AdGuard-AI-Lyzr-Hackathon",
    badge: { label: "AI · Hackathon", tone: "accent" },
    subtitle:
      "Built at the AI Tinkerers Dublin: Agentic Architect Hackathon, powered by Lyzr AI.",
    bullets: [
      "An autonomous agent that screens publisher URLs against brand-specific safety rules using the GARM framework, returning a Run, Review or Block decision with a 0 to 100 safety score in seconds.",
      "Orchestrated a 4-agent pipeline (URL Researcher, Safety Classifier, Safety Scorer, Results Reporter) over an extensible Agentic RAG brand knowledge base, delivering reports automatically via Slack and Gmail.",
    ],
    tags: ["Lyzr Studio", "Agentic RAG", "Claude Opus 4", "GPT-4.1", "GARM", "Lovable", "Slack", "Gmail"],
  },
  {
    title: "Smart Pay — AI BNPL Recommender for SME Merchants",
    date: "Feb 2025",
    cover: "/assets/cover-smartpay.png",
    link: "https://devpost.com/software/neural-net-worth-browser-extension",
    badge: { label: "AI · Hackathon", tone: "accent" },
    bullets: [
      "Built a browser extension using the OpenAI API and prompt engineering to rank 3 providers for personalised recommendations.",
    ],
    tags: ["OpenAI API", "FastAPI", "PostgreSQL", "React"],
  },
];

export type Experience = {
  role: string;
  date: string;
  org: string;
  summary?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Quality Assurance Associate",
    date: "Dec 2023 – Aug 2024",
    org: "Trigyn Technologies · Mumbai, India",
    bullets: [
      "Reduced project delivery delays on the UN Mental Health project through project management and process compliance audits, aligned with ISO software quality standards, across Agile and Waterfall workflows.",
      "Designed and executed 200+ test cases across functional and regression testing, logging 100+ defects in JIRA and monitoring code quality with SonarQube before release.",
      "Decreased rework and defect rates across a team of 20+ engineers by performing Root Cause Analysis (RCA) on recurring defects and leading knowledge-sharing sessions on risk management.",
    ],
  },
  {
    role: "Full Stack Software Engineer Intern",
    date: "Oct 2022 – Jul 2023",
    org: "Patnekar Private Limited (PPL) · Goa, India",
    summary:
      "Built a hyperlocal marketplace connecting local businesses to customers across 100+ categories.",
    bullets: [
      "Built the customer side serving 2,000+ users, with 10+ responsive web pages and REST APIs using CodeIgniter MVC, PHP, JavaScript, JQuery, SCSS, and MySQL on AWS RDS.",
      "Implemented JWT authentication for the customer REST API, with ZeroBounce API for email validation at signup.",
      "Built the cart, checkout, and order tracking flow integrating Cashfree for payments, Google Maps API for location-based vendor discovery and tiered delivery options, and Amazon SES for order confirmation emails.",
      "Worked in a 4-developer team using Agile Scrum across 6+ sprints, with code reviews, peer testing, and Trello for backlog tracking and sprint management.",
      "Maintained 99.9% platform uptime and reliable production deployments by setting up AWS infrastructure (EC2, RDS, S3, IAM) and CloudWatch monitoring, and automated CI/CD across multi-stage environments using AWS CodePipeline.",
    ],
  },
  {
    role: "Software Developer Intern",
    date: "Apr 2021 – Jun 2022",
    org: "Pai Kane Group · Goa, India",
    summary:
      "Built the admin dashboard for ServeME, digitising generator servicing and inventory.",
    bullets: [
      "Saved 10+ hours per week and digitised manual workflows for 1,000+ genset products by building a real-time inventory and service-management dashboard with 8 CRUD modules on React, CoreUI, and Firebase.",
      "Built a scheduling module linking each service request to its customer, genset, assigned technician, and required spare parts with real-time status tracking, secured with Firebase Authentication.",
      "Identified and fixed recurring bugs across the React frontend and Firebase backend through systematic debugging.",
    ],
  },
  {
    role: "Machine Learning Engineer Intern",
    date: "Jul 2021 – Sept 2021",
    org: "Cloud Counselage Pvt Ltd · Mumbai, India",
    bullets: [
      "Achieved an RMSE of 1.05, validated by 5-fold cross-validation, by building an item-based collaborative filtering movie recommender in Python using KNN with cosine similarity on the MovieLens 100K dataset.",
      "Predicted Amazon stock prices over a 14-day forecast with an RMSE of $3.08 by training an LSTM model in PyTorch.",
    ],
  },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "AI & Machine Learning",
    skills: [
      "LLMs", "RAG Pipelines", "LangChain", "Pinecone", "Prompt Engineering",
      "Computer Vision", "Hugging Face", "PyTorch", "TensorFlow", "Scikit-learn",
      "XGBoost", "LSTM", "NLP", "OpenAI", "Groq", "Claude",
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      "AWS EC2", "ECR", "S3", "Lambda", "SageMaker", "CloudWatch", "IAM",
      "CodePipeline", "Docker", "Terraform (IaC)", "Git", "GitHub Actions CI/CD",
    ],
  },
  {
    title: "Languages & Frameworks",
    skills: [
      "Python", "JavaScript", "TypeScript", "C++", "PHP", "SQL", "React",
      "React Native", "Node.js", "FastAPI", "CodeIgniter MVC", "REST APIs",
    ],
  },
  {
    title: "Engineering Practices",
    skills: [
      "Unit & Integration Testing", "Functional & Regression Testing",
      "Test Case Design", "JIRA", "SonarQube", "Code Reviews",
      "Root Cause Analysis", "Agile / Scrum", "SDLC",
    ],
  },
];

export type Education = {
  degree: string;
  date: string;
  school: string;
  detail: string;
  logo: string;
};

export const education: Education[] = [
  {
    degree: "MSc in Artificial Intelligence and ML",
    date: "Sept 2024 – Jan 2026",
    school: "University of Limerick",
    detail: "QCA 3.31 / 4 · Second Class Honours (2.1), Grade 1",
    logo: "/assets/logo-ul.png",
  },
  {
    degree: "Bachelor in Computer Engineering",
    date: "Jul 2019 – Jun 2023",
    school: "Goa University",
    detail: "CGPA 9.1 / 10 · Grade A+",
    logo: "/assets/logo-goa.png",
  },
];

export type Certification = { title: string; date: string; issuer: string; logo: string; link: string };

export const certifications: Certification[] = [
  { title: "Machine Learning Foundations", date: "Apr 2025", issuer: "AWS Academy", logo: "/assets/logo-aws.png", link: "https://www.credly.com/badges/b9465abf-11fb-484f-8471-ad650448d562/linked_in_profile" },
  { title: "Cloud Foundations", date: "Mar 2025", issuer: "AWS Academy", logo: "/assets/logo-aws.png", link: "https://www.credly.com/badges/ec7a2b9d-5a95-4fc7-9e9b-5310e82c5d6d/linked_in_profile" },
];

export type Publication = {
  title: string;
  date: string;
  venue: string;
  detail: string;
  link: string;
};

export const publications: Publication[] = [
  {
    title:
      "Hyperlocal Marketplace: Transforming Unorganized Localized Marketplace with Future Tech",
    date: "Dec 2023",
    venue:
      "S. G. Mascarenhas et al., IEEE 5th International Conference on Advances in Computing, Communication Control and Networking (ICAC3N), 2023.",
    detail:
      "Co-authored a peer-reviewed IEEE paper proposing a tech-enabled platform to digitize unorganized local marketplaces and connect local businesses to customers.",
    link: "https://ieeexplore.ieee.org/document/10541378",
  },
];

export type Award = { title: string; detail: string; date: string };

export const awards: Award[] = [
  { title: "University of Limerick Postgraduate Scholarship", detail: "for International Students", date: "Sept 2024 – Aug 2025" },
  { title: "Medal for Meritorious Performance", detail: "Bachelor of Computer Engineering, Don Bosco College of Engineering", date: "Jun 2023" },
  { title: "3rd Place, Tech Mania 2k23", detail: "Final Year Project Category (Digital Customer Onboarding Platform)", date: "2023" },
  { title: "Semi-Finalist", detail: "Inter-Collegiate Basketball Competition", date: "Jan 2023" },
  { title: "Sports Volunteer", detail: "Basketball Event Coordination, National Games, Goa", date: "Oct 2023" },
];

export type Volunteering = {
  role: string;
  date: string;
  org: string;
  detail: string;
};

export const volunteering: Volunteering[] = [
  {
    role: "Volunteer Assistant, Basketball",
    date: "Sep 2023 – Oct 2023",
    org: "Goa National Games · Social Services",
    detail: "Assistant Volunteer, Basketball | Goa National Games",
  },
];

export const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
