export const INITIAL_CANDIDATES = [
  {
    id: "cand-1",
    name: "Aria Montgomery",
    email: "aria.montgomery@example.com",
    phone: "+1 (555) 234-8901",
    location: "San Francisco, CA (Open to Remote)",
    role: "Senior Full Stack Engineer",
    experience: "6 years",
    matchScore: 94,
    status: "Shortlisted",
    appliedDate: "2026-10-08",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    skills: ["React", "TypeScript", "Node.js", "GraphQL", "PostgreSQL", "AWS", "Docker", "Tailwind CSS"],
    education: "B.S. in Computer Science — Stanford University (2020)",
    currentCompany: "Nexus Cloud Systems",
    bio: "Passionate full-stack developer with 6+ years of building scalable web applications and high-throughput microservices. Proven track record leading frontend modernization.",
    aiSummary: {
      overview: "Exceptional alignment with the Senior Full Stack role. Strong leadership in TypeScript and cloud-native architectures.",
      strengths: [
        "6 years of production-grade React & Node.js architecture experience",
        "Demonstrated ability to reduce API latency by 35% through caching & GraphQL optimization",
        "Deep familiarity with AWS serverless (Lambda, DynamoDB, ECS)"
      ],
      areasToProbe: [
        "Experience leading cross-functional teams with remote engineers",
        "Handling database migration strategies with zero downtime"
      ],
      recommendation: "Strong Shortlist — proceed directly to Technical Screen."
    },
    workHistory: [
      {
        role: "Senior Frontend & Full Stack Engineer",
        company: "Nexus Cloud Systems",
        period: "2023 - Present",
        description: "Architected modern React client portal serving 120k daily active users. Mentored 4 junior engineers and authored core UI component library."
      },
      {
        role: "Full Stack Software Engineer",
        company: "Vanguard Tech Labs",
        period: "2020 - 2023",
        description: "Implemented Node.js microservices and REST APIs. Collaborated on CI/CD pipelines deploying to Kubernetes clusters on AWS."
      }
    ]
  },
  {
    id: "cand-2",
    name: "Marcus Vance",
    email: "marcus.vance@example.com",
    phone: "+1 (555) 876-1234",
    location: "Austin, TX (Hybrid / Remote)",
    role: "Product Designer (UI/UX)",
    experience: "5 years",
    matchScore: 89,
    status: "Under Review",
    appliedDate: "2026-10-10",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    skills: ["Figma", "Design Systems", "User Research", "Wireframing", "Prototyping", "Design Tokens", "HTML/CSS"],
    education: "B.Des in Interaction Design — University of Texas at Austin (2021)",
    currentCompany: "Pinnacle Digital",
    bio: "User-centric product designer experienced in transforming complex B2B workflows into intuitive, delightful enterprise experiences.",
    aiSummary: {
      overview: "High visual craft and structured design system expertise. Strong background in SaaS dashboards and design operations.",
      strengths: [
        "Proven system designer who built component libraries for 3 multi-brand SaaS apps",
        "Direct experience conducting user interviews and usability testing with enterprise customers",
        "Pragmatic approach bridging designer-developer handoff"
      ],
      areasToProbe: [
        "Quantitative metric tracking for design impact (retention, adoption)",
        "Experience collaborating with strict product compliance requirements"
      ],
      recommendation: "Shortlist — proceed to Design Portfolio Review."
    },
    workHistory: [
      {
        role: "Lead UI/UX Designer",
        company: "Pinnacle Digital",
        period: "2022 - Present",
        description: "Created scalable Figma token library, streamlining engineering delivery time by 25%. Spearheaded accessibility (WCAG AA) revamp."
      },
      {
        role: "Product Designer",
        company: "Hyperion Interactive",
        period: "2021 - 2022",
        description: "Designed core checkout and onboarding flows that improved conversion by 14%."
      }
    ]
  },
  {
    id: "cand-3",
    name: "Elena Rostova",
    email: "elena.rostova@example.com",
    phone: "+1 (555) 432-9012",
    location: "New York, NY",
    role: "Machine Learning Engineer",
    experience: "4 years",
    matchScore: 92,
    status: "Interview Scheduled",
    appliedDate: "2026-10-07",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    skills: ["Python", "PyTorch", "Hugging Face", "LLMs", "FastAPI", "Vector DBs", "Docker", "MLOps"],
    education: "M.S. in Computer Science (AI Track) — Columbia University (2022)",
    currentCompany: "Synthetix AI",
    bio: "Applied ML engineer focused on natural language processing, LLM fine-tuning, and retrieval-augmented generation (RAG) pipelines.",
    aiSummary: {
      overview: "Strong technical pedigree in modern LLM stack and deployment optimization. Perfect background for AI copilot integrations.",
      strengths: [
        "Built RAG pipeline lowering hallucinations by 42% on domain-specific legal documents",
        "Hands-on optimization with vLLM, TensorRT-LLM, and LoRA fine-tuning",
        "Published author in NeurIPS workshop on embedding representations"
      ],
      areasToProbe: [
        "Cost optimization strategies for high-frequency model inference in production",
        "Experience with real-time streaming architectures"
      ],
      recommendation: "Strong Shortlist — fast-track to Technical Deep Dive."
    },
    workHistory: [
      {
        role: "ML Engineer (NLP)",
        company: "Synthetix AI",
        period: "2023 - Present",
        description: "Designed and scaled semantic search and RAG engine handling 4M queries per month with latency under 180ms."
      },
      {
        role: "Junior Data Scientist",
        company: "Cognitive Labs",
        period: "2022 - 2023",
        description: "Trained predictive models and automated data ingestion pipelines using Python and Airflow."
      }
    ]
  },
  {
    id: "cand-4",
    name: "Devon Reed",
    email: "devon.reed@example.com",
    phone: "+1 (555) 765-4321",
    location: "Seattle, WA (Remote)",
    role: "DevOps & Cloud Engineer",
    experience: "7 years",
    matchScore: 78,
    status: "Under Review",
    appliedDate: "2026-10-09",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    skills: ["Kubernetes", "Terraform", "AWS", "CI/CD", "Prometheus", "Golang", "Linux Security"],
    education: "B.S. in Information Systems — University of Washington (2019)",
    currentCompany: "CloudScale Infra",
    bio: "Site reliability and infrastructure engineer with deep focus on Kubernetes clustering, infrastructure-as-code, and 99.99% uptime SLAs.",
    aiSummary: {
      overview: "Solid infrastructure background with deep AWS and Terraform expertise. Slightly less focus on application observability tools.",
      strengths: [
        "Automated multi-region AWS cloud setup with Terraform modules",
        "Experienced in zero-downtime rolling releases and blue-green deployments",
        "Strong container security and vulnerability scanning background"
      ],
      areasToProbe: [
        "Budget and cloud cost governance techniques",
        "Experience collaborating directly with product engineering squads"
      ],
      recommendation: "Review — suitable for Senior Infrastructure / SRE role."
    },
    workHistory: [
      {
        role: "Staff DevOps Engineer",
        company: "CloudScale Infra",
        period: "2021 - Present",
        description: "Maintained Kubernetes clusters across 3 AWS regions. Reduced build failure rates by 30% through automated pipeline health checks."
      },
      {
        role: "Systems Administrator",
        company: "Beacon Media",
        period: "2019 - 2021",
        description: "Managed Linux server fleets and spearheaded initial cloud migration to AWS."
      }
    ]
  },
  {
    id: "cand-5",
    name: "Sophia Chen",
    email: "sophia.chen@example.com",
    phone: "+1 (555) 901-2345",
    location: "Chicago, IL",
    role: "Senior Full Stack Engineer",
    experience: "5 years",
    matchScore: 88,
    status: "Shortlisted",
    appliedDate: "2026-10-11",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Prisma", "PostgreSQL", "Redis", "Jest"],
    education: "B.S. in Software Engineering — University of Illinois Urbana-Champaign (2021)",
    currentCompany: "Kinetix Technologies",
    bio: "Full stack engineer enthusiastic about web performance, developer experience, and test-driven development.",
    aiSummary: {
      overview: "Well-rounded full stack engineer with exemplary clean-code practices and reliable delivery.",
      strengths: [
        "Extensive experience building Next.js apps with server-side rendering and edge functions",
        "Strong automated testing discipline with 85%+ code coverage standards",
        "Effective communicator with history of leading agile sprint planning"
      ],
      areasToProbe: [
        "Scale handling for large volume data ingest",
        "Depth in system design trade-offs between SQL and NoSQL"
      ],
      recommendation: "Shortlist — invite to Round 1 screening."
    },
    workHistory: [
      {
        role: "Full Stack Engineer",
        company: "Kinetix Technologies",
        period: "2022 - Present",
        description: "Delivered real-time collaboration canvas in React & WebSockets. Decreased cold start bundle sizes by 40%."
      },
      {
        role: "Associate Frontend Developer",
        company: "Orbit Creative",
        period: "2021 - 2022",
        description: "Built responsive client portals and integrated RESTful backend services."
      }
    ]
  },
  {
    id: "cand-6",
    name: "Julian Rivera",
    email: "julian.rivera@example.com",
    phone: "+1 (555) 345-6789",
    location: "Miami, FL",
    role: "Product Designer (UI/UX)",
    experience: "2 years",
    matchScore: 64,
    status: "Rejected",
    appliedDate: "2026-10-05",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    skills: ["Figma", "UI Design", "Illustrator", "Prototyping"],
    education: "B.A. in Graphic Design — Florida International University (2024)",
    currentCompany: "Freelance",
    bio: "Junior designer focused on visual aesthetics, mobile app concepts, and brand identities.",
    aiSummary: {
      overview: "Junior profile with great graphic instincts, but lacks enterprise SaaS experience required for senior expectations.",
      strengths: [
        "Eye for clean aesthetics and color harmony",
        "High enthusiasm and quick learner"
      ],
      areasToProbe: [
        "Experience working directly with backend engineers on technical constraints",
        "User testing methodology and metric-driven design decisions"
      ],
      recommendation: "Rejected for Senior role; consider keeping on file for junior/associate opportunities."
    },
    workHistory: [
      {
        role: "Junior Visual Designer",
        company: "Freelance / Studio",
        period: "2024 - Present",
        description: "Created landing pages and brand guidelines for startup clients."
      }
    ]
  },
  {
    id: "cand-7",
    name: "Tariq Al-Mansoor",
    email: "tariq.mansoor@example.com",
    phone: "+1 (555) 678-1234",
    location: "Boston, MA",
    role: "Engineering Manager",
    experience: "10 years",
    matchScore: 95,
    status: "Interview Scheduled",
    appliedDate: "2026-10-06",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
    skills: ["People Management", "Agile / Scrum", "Technical Architecture", "System Design", "Hiring & Retention", "Cloud Infrastructure"],
    education: "B.S. & M.S. in Computer Science — MIT (2016)",
    currentCompany: "Aura Health Technologies",
    bio: "Empathetic engineering leader with a decade of engineering experience and 4 years leading high-performing distributed teams of 15+ engineers.",
    aiSummary: {
      overview: "Top-tier leadership candidate. Balanced technical judgment with proven track record in talent retention and delivery velocity.",
      strengths: [
        "Scaled engineering squad from 5 to 18 while maintaining <5% annual turnover",
        "Spearheaded enterprise ISO 27001 & SOC 2 engineering compliance",
        "Strong mentorship culture producing 3 internal promotions to tech lead"
      ],
      areasToProbe: [
        "Balancing hands-on coding versus pure management time allocation",
        "Managing underperforming team members with empathy and rigor"
      ],
      recommendation: "Strong Shortlist — proceed to Executive Culture Interview."
    },
    workHistory: [
      {
        role: "Engineering Manager",
        company: "Aura Health Technologies",
        period: "2022 - Present",
        description: "Managed 2 full-stack engineering pods delivering core patient diagnostic features. Increased delivery cadence by 45%."
      },
      {
        role: "Staff Engineer / Tech Lead",
        company: "Boston Dynamics Labs",
        period: "2018 - 2022",
        description: "Lead architect for real-time telemetry pipelines and distributed sensor processing engines."
      }
    ]
  },
  {
    id: "cand-8",
    name: "Zoe Zimmerman",
    email: "zoe.zimmerman@example.com",
    phone: "+1 (555) 543-9876",
    location: "Denver, CO (Remote)",
    role: "DevOps & Cloud Engineer",
    experience: "4 years",
    matchScore: 84,
    status: "Shortlisted",
    appliedDate: "2026-10-11",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    skills: ["AWS", "GCP", "Kubernetes", "Helm", "GitLab CI", "Terraform", "Python"],
    education: "B.S. in Computer Engineering — University of Colorado Boulder (2022)",
    currentCompany: "Summit Cloud Solutions",
    bio: "DevOps engineer specialized in multi-cloud deployments, automated security pipelines, and developer tooling.",
    aiSummary: {
      overview: "Strong technical candidate with solid experience in container orchestration and multi-cloud resilience.",
      strengths: [
        "Configured robust GitLab CI/CD pipelines cutting deployment friction by 50%",
        "Proficient in both AWS and Google Cloud Platform environments",
        "Active member of Kubernetes open source community"
      ],
      areasToProbe: [
        "Experience with complex database failovers in Kubernetes",
        "Incident management and on-call rotation experience"
      ],
      recommendation: "Shortlist — proceed to Technical Screen."
    },
    workHistory: [
      {
        role: "Cloud Platform Engineer",
        company: "Summit Cloud Solutions",
        period: "2022 - Present",
        description: "Built automated Helm charts and Terraform templates across 5 client AWS accounts."
      }
    ]
  }
];

export const INITIAL_INTERVIEWS = [
  {
    id: "int-1",
    candidateId: "cand-3",
    candidateName: "Elena Rostova",
    role: "Machine Learning Engineer",
    interviewer: "Dr. David Miller (Head of AI)",
    date: "2026-10-15",
    time: "10:30 AM",
    duration: "45 mins",
    type: "Technical Deep Dive",
    meetingLink: "https://meet.screensmart.app/int-ml-rostova",
    status: "Confirmed",
    notes: "Review RAG architecture and model inference optimization techniques."
  },
  {
    id: "int-2",
    candidateId: "cand-7",
    candidateName: "Tariq Al-Mansoor",
    role: "Engineering Manager",
    interviewer: "Sarah Jenkins (VP of Engineering)",
    date: "2026-10-16",
    time: "02:00 PM",
    duration: "60 mins",
    type: "Leadership & Culture",
    meetingLink: "https://meet.screensmart.app/int-em-mansoor",
    status: "Confirmed",
    notes: "Focus on distributed team scaling and agile process governance."
  },
  {
    id: "int-3",
    candidateId: "cand-1",
    candidateName: "Aria Montgomery",
    role: "Senior Full Stack Engineer",
    interviewer: "Kevin Zhang (Principal Architect)",
    date: "2026-10-18",
    time: "11:00 AM",
    duration: "45 mins",
    type: "System Design",
    meetingLink: "https://meet.screensmart.app/int-fs-montgomery",
    status: "Pending",
    notes: "Live system design on scalable real-time notification feeds."
  },
  {
    id: "int-4",
    candidateId: "cand-5",
    candidateName: "Sophia Chen",
    role: "Senior Full Stack Engineer",
    interviewer: "Rachel Adams (Senior Recruiter)",
    date: "2026-10-19",
    time: "03:30 PM",
    duration: "30 mins",
    type: "Initial HR Screen",
    meetingLink: "https://meet.screensmart.app/int-hr-chen",
    status: "Confirmed",
    notes: "Discuss compensation expectations, notice period, and culture fit."
  }
];

export const INITIAL_SETTINGS = {
  fullName: "Rachel Adams",
  email: "rachel.adams@screensmart.io",
  roleTitle: "Lead Talent Acquisition Partner",
  department: "Global Talent & People",
  companyName: "Acme Technologies & Labs",
  timezone: "America/New_York (GMT-4)",
  emailNotifications: true,
  interviewReminders: true,
  dailySummary: true,
  autoAIEvaluation: true,
  minMatchScoreThreshold: 80
};

// Local storage helper keys
export const STORAGE_KEYS = {
  CANDIDATES: "screensmart_candidates_v1",
  INTERVIEWS: "screensmart_interviews_v1",
  SETTINGS: "screensmart_settings_v1"
};

export const getStoredCandidates = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.CANDIDATES);
    return data ? JSON.parse(data) : INITIAL_CANDIDATES;
  } catch {
    return INITIAL_CANDIDATES;
  }
};

export const saveStoredCandidates = (candidates) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CANDIDATES, JSON.stringify(candidates));
  } catch (e) {
    console.error("Failed to save candidates to localStorage", e);
  }
};

export const getStoredInterviews = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.INTERVIEWS);
    return data ? JSON.parse(data) : INITIAL_INTERVIEWS;
  } catch {
    return INITIAL_INTERVIEWS;
  }
};

export const saveStoredInterviews = (interviews) => {
  try {
    localStorage.setItem(STORAGE_KEYS.INTERVIEWS, JSON.stringify(interviews));
  } catch (e) {
    console.error("Failed to save interviews to localStorage", e);
  }
};

export const getStoredSettings = () => {
  try {
    const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    return data ? JSON.parse(data) : INITIAL_SETTINGS;
  } catch {
    return INITIAL_SETTINGS;
  }
};

export const saveStoredSettings = (settings) => {
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  } catch (e) {
    console.error("Failed to save settings to localStorage", e);
  }
};
