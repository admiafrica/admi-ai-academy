export interface LearningPath {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  duration: string;
  level: string;
  nextIntake: string;
  price: string;
  modules: Module[];
  tools: Tool[];
  outcomes: string[];
  projects: string[];
  targetAudience: string[];
}

export interface Module {
  week: string;
  title: string;
  topics: string[];
}

export interface Tool {
  name: string;
  category: string;
}

export const learningPaths: LearningPath[] = [
  {
    id: "1",
    slug: "ai-for-creatives",
    title: "AI for Creative Professionals",
    tagline: "Transform your creative workflow with AI-powered tools",
    description: "Master the latest AI tools for design, video production, music creation, and content development. Learn to integrate AI into your creative workflow while maintaining your artistic vision.",
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    nextIntake: "May 2026",
    price: "KES 75,000",
    modules: [
      {
        week: "Weeks 1-2",
        title: "AI Foundations for Creatives",
        topics: [
          "Understanding AI, ML, and generative AI",
          "Prompt engineering fundamentals",
          "Ethical AI use in creative industries",
          "AI tool landscape overview"
        ]
      },
      {
        week: "Weeks 3-5",
        title: "AI for Visual Design",
        topics: [
          "Midjourney v6 advanced techniques & style references",
          "DALL-E 3 and Stable Diffusion XL workflows",
          "AI-assisted photo editing with Adobe Firefly & Photoshop AI",
          "Creating brand assets with Canva AI",
          "Consistent character generation & brand guidelines"
        ]
      },
      {
        week: "Weeks 6-8",
        title: "AI for Video & Motion",
        topics: [
          "Runway Gen-3 & Pika Labs for video generation",
          "AI video editing with Descript & Premiere Pro AI",
          "Motion tracking and VFX with AI tools",
          "Text-to-video and image-to-video workflows",
          "AI-powered color grading and restoration"
        ]
      },
      {
        week: "Weeks 9-10",
        title: "AI for Audio & Music",
        topics: [
          "ElevenLabs voice synthesis",
          "Suno and music generation",
          "Audio cleanup with AI",
          "Podcast production automation"
        ]
      },
      {
        week: "Weeks 11-12",
        title: "Portfolio Project & Integration",
        topics: [
          "Building a complete AI-assisted creative project",
          "Integration with existing creative tools",
          "Client presentation strategies",
          "Portfolio showcase"
        ]
      }
    ],
    tools: [
      { name: "ChatGPT & Claude", category: "Text AI" },
      { name: "Midjourney v6", category: "Image Generation" },
      { name: "DALL-E 3", category: "Image Generation" },
      { name: "Stable Diffusion XL", category: "Image Generation" },
      { name: "Runway Gen-3", category: "Video AI" },
      { name: "Pika Labs", category: "Video AI" },
      { name: "Descript", category: "Video & Audio Editing" },
      { name: "ElevenLabs", category: "Voice AI" },
      { name: "Adobe Firefly", category: "Creative Suite Integration" },
      { name: "Canva AI", category: "Design" }
    ],
    outcomes: [
      "Generate professional-quality images and graphics using AI",
      "Create and edit video content with AI-assisted workflows",
      "Produce voice-overs and music using AI tools",
      "Integrate AI into your existing creative software suite",
      "Maintain creative control while leveraging AI capabilities",
      "Build a portfolio of AI-enhanced creative work"
    ],
    projects: [
      "AI-generated brand identity package",
      "Short film with AI-assisted VFX",
      "Music video with AI-generated visuals",
      "Podcast series with AI voice cloning"
    ],
    targetAudience: [
      "Graphic designers",
      "Video producers",
      "Photographers",
      "Music producers",
      "Content creators",
      "Creative directors"
    ]
  },
  {
    id: "2",
    slug: "ai-for-marketing",
    title: "AI for Marketing Excellence",
    tagline: "Supercharge your marketing with AI-powered strategies",
    description: "Learn to leverage AI for content creation, campaign optimization, customer insights, and marketing automation. Master the tools that are transforming digital marketing.",
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    nextIntake: "May 2026",
    price: "KES 65,000",
    modules: [
      {
        week: "Weeks 1-2",
        title: "AI in Modern Marketing",
        topics: [
          "AI marketing landscape",
          "Data-driven decision making",
          "Marketing automation fundamentals",
          "AI ethics in marketing"
        ]
      },
      {
        week: "Weeks 3-4",
        title: "AI Content Creation",
        topics: [
          "ChatGPT for copywriting",
          "Content strategy with AI",
          "SEO optimization with AI tools",
          "Multi-channel content generation"
        ]
      },
      {
        week: "Weeks 5-6",
        title: "AI for Social Media & Ads",
        topics: [
          "Social media content at scale",
          "AI-powered ad creation",
          "A/B testing with AI",
          "Influencer identification and outreach"
        ]
      },
      {
        week: "Weeks 7-8",
        title: "Customer Insights & Personalization",
        topics: [
          "Predictive analytics",
          "Customer segmentation with AI",
          "Personalized marketing campaigns",
          "Chatbot implementation"
        ]
      },
      {
        week: "Weeks 9-10",
        title: "Campaign Project & Measurement",
        topics: [
          "Building a complete AI-powered campaign",
          "ROI measurement and attribution",
          "Reporting and dashboards",
          "Future-proofing your marketing stack"
        ]
      }
    ],
    tools: [
      { name: "ChatGPT & Claude", category: "Content Creation" },
      { name: "Jasper AI", category: "Marketing Copy" },
      { name: "Copy.ai", category: "Content Generation" },
      { name: "Semrush AI", category: "SEO & Content" },
      { name: "ChatSpot", category: "Conversational Marketing" },
      { name: "Writesonic", category: "Content Generation" },
      { name: "Surfer SEO", category: "SEOional Marketing" },
      { name: "Phrasee", category: "Email Marketing" },
      { name: "Persado", category: "Message Optimization" }
    ],
    outcomes: [
      "Create high-converting marketing copy with AI",
      "Build and optimize multi-channel campaigns",
      "Implement AI-powered chatbots and automation",
      "Analyze customer data for actionable insights",
      "Personalize customer journeys at scale",
      "Measure and optimize marketing ROI"
    ],
    projects: [
      "Complete product launch campaign",
      "Multi-channel content calendar (30 days)",
      "AI chatbot for customer engagement",
      "Personalized email nurture sequence"
    ],
    targetAudience: [
      "Digital marketers",
      "Content marketers",
      "Social media managers",
      "Brand managers",
      "Marketing consultants",
      "Small business owners"
    ]
  },
  {
    id: "3",
    slug: "ai-for-business-intelligence",
    title: "AI for Business Intelligence",
    tagline: "Turn data into decisions with AI-powered analytics",
    description: "Master AI-powered data analysis, predictive modeling, and business intelligence tools. Learn to extract insights from data and drive strategic business decisions.",
    duration: "12 weeks",
    level: "Intermediate",
    nextIntake: "September 2026",
    price: "KES 85,000",
    modules: [
      {
        week: "Weeks 1-2",
        title: "AI & Data Science Foundations",
        topics: [
          "Machine learning basics",
          "Data preparation and cleaning",
          "Statistical analysis fundamentals",
          "BI tools overview"
        ]
      },
      {
        week: "Weeks 3-5",
        title: "AI-Powered Analytics",
        topics: [
          "Predictive analytics with AI",
          "Time series forecasting",
          "Anomaly detection",
          "Natural language querying of data"
        ]
      },
      {
        week: "Weeks 6-8",
        title: "Business Intelligence Tools",
        topics: [
          "Power BI with AI features",
          "Tableau AI capabilities",
          "Google Analytics 4 AI insights",
          "Custom dashboard creation"
        ]
      },
      {
        week: "Weeks 9-10",
        title: "Advanced AI Applications",
        topics: [
          "Customer churn prediction",
          "Demand forecasting",
          "Price optimization",
          "Risk assessment models"
        ]
      },
      {
        week: "Weeks 11-12",
        title: "Capstone Project",
        topics: [
          "Building an end-to-end BI solution",
          "Presenting insights to stakeholders",
          "Implementation strategy",
          "Continuous improvement frameworks"
        ]
      }
    ],
    tools: [
      { name: "Python & with Copilot", category: "Business Intelligence" },
      { name: "Tableau AI", category: "Data Visualization" },
      { name: "Google Analytics 4", category: "Web Analytics" },
      { name: "Looker Studio", category: "Reporting" },
      { name: "Julius AI", category: "Data Analysis" },
      { name: "DataRobot", category: "Predictive Analytics" },
      { name: "ChatGPT Advanced Data Analysis", category: "Data Analysis" },
      { name: "Claude with Artifacts", category: "Data Visualization" },
      { name: "ChatGPT Code Interpreter", category: "Data Analysis" }
    ],
    outcomes: [
      "Analyze large datasets efficiently with AI",
      "Build predictive models for business forecasting",
      "Create interactive dashboards and reports",
      "Implement automated reporting systems",
      "Identify business trends and opportunities",
      "Communicate data insights to stakeholders"
    ],
    projects: [
      "Sales forecasting model",
      "Customer segmentation analysis",
      "Executive dashboard with AI insights",
      "Churn prediction and retention strategy"
    ],
    targetAudience: [
      "Business analysts",
      "Data analysts",
      "Product managers",
      "Operations managers",
      "Financial analysts",
      "Strategic planners"
    ]
  }
];

export function getPathBySlug(slug: string): LearningPath | undefined {
  return learningPaths.find(path => path.slug === slug);
}

export function getAllSlugs(): string[] {
  return learningPaths.map(path => path.slug);
}
