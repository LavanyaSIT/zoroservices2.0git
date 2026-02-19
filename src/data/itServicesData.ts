export type ServiceItem = {
  title: string;
  description: string;
  features: string[];
};

export type ServiceCategory = {
  slug: string;
  title: string;
  desc: string;
  items: ServiceItem[];
};

export const IT_SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "website-web-application-services",
    title: "Website & Web Application Services",
    desc: "Scalable, secure, and high-performance web solutions tailored to modern business needs.",
    items: [
      {
        title: "Website Design & Development",
        description: "Modern, responsive, and SEO-optimized websites built for growth.",
        features: [
          "UI/UX Design",
          "Responsive Development",
          "SEO-Friendly Architecture",
          "Performance Optimization",
          "CMS Integration",
        ],
      },
      {
        title: "Web Application Development",
        description: "Secure and scalable web applications for business operations.",
        features: [
          "Custom Web App Development",
          "API Integration",
          "Authentication & Authorization",
          "Scalable Architecture",
          "Performance Optimization",
        ],
      },
      {
        title: "E-Commerce Platform Development",
        description: "Conversion-focused and secure e-commerce platforms.",
        features: [
          "Custom Storefront Development",
          "Payment Gateway Integration",
          "Order & Inventory Management",
          "Security & Compliance",
          "Performance Optimization",
        ],
      },
      {
        title: "SaaS Application Development",
        description: "Cloud-native SaaS platforms engineered for scale.",
        features: [
          "Multi-Tenant Architecture",
          "Subscription & Billing Systems",
          "Cloud-Native Design",
          "Security & Compliance",
          "CI/CD Pipelines",
        ],
      },
    ],
  },

  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    desc: "High-performance mobile applications for Android, iOS, and cross-platform environments.",
    items: [
      {
        title: "Android App Development",
        description: "Scalable Android applications with superior performance.",
        features: [
          "Native Android Development",
          "API Integration",
          "Performance Optimization",
          "Play Store Deployment",
          "App Security",
        ],
      },
      {
        title: "iOS App Development",
        description: "Premium iOS applications for Apple devices.",
        features: [
          "Native iOS Development",
          "App Store Deployment",
          "Performance Optimization",
          "Security Best Practices",
          "API Integration",
        ],
      },
      {
        title: "Cross-Platform App Development",
        description: "Single codebase apps for iOS and Android.",
        features: [
          "Cross-Platform Architecture",
          "Reusable Components",
          "API Integration",
          "Performance Optimization",
          "App Store Deployment",
        ],
      },
    ],
  },

  {
    slug: "ai-automation-solutions",
    title: "AI & Automation Solutions",
    desc: "Intelligent systems that automate processes and enable data-driven decisions.",
    items: [
      {
        title: "Chatbot Development",
        description: "Conversational AI for customer engagement.",
        features: [
          "Natural Language Processing",
          "Omnichannel Deployment",
          "CRM Integration",
          "Analytics & Insights",
          "Custom Training",
        ],
      },
      {
        title: "Workflow Automation & RPA",
        description: "Automated workflows for operational efficiency.",
        features: [
          "Process Automation",
          "Bot Development",
          "System Integration",
          "Monitoring & Optimization",
          "Compliance Handling",
        ],
      },
      {
        title: "Recommendation Engine Development",
        description: "Personalized recommendation systems.",
        features: [
          "Data Modeling",
          "Behavioral Analysis",
          "Algorithm Design",
          "Real-Time Processing",
          "Scalable Deployment",
        ],
      },
      {
        title: "Machine Learning Solutions",
        description: "Predictive and intelligent ML systems.",
        features: [
          "Predictive Modeling",
          "Model Training",
          "Data Engineering",
          "Deployment & Monitoring",
          "Optimization",
        ],
      },
      {
        title: "Computer Vision Solutions",
        description: "Visual intelligence for automation.",
        features: [
          "Image Recognition",
          "Object Detection",
          "Video Analytics",
          "Model Training",
          "Edge Deployment",
        ],
      },
      {
        title: "AIoT Solutions",
        description: "AI-powered IoT intelligence.",
        features: [
          "IoT Integration",
          "AI Analytics",
          "Real-Time Monitoring",
          "Edge Computing",
          "Scalable Architecture",
        ],
      },
    ],
  },

  {
    slug: "custom-enterprise-software",
    title: "Custom Enterprise Software",
    desc: "Enterprise-grade software solutions built for complex business needs.",
    items: [
      {
        title: "Custom Software Development",
        description: "Tailored enterprise software solutions.",
        features: [
          "Requirement Analysis",
          "Custom Architecture",
          "Enterprise Integration",
          "Security Implementation",
          "Scalable Development",
        ],
      },
      {
        title: "CRM Systems",
        description: "Customer relationship management platforms.",
        features: [
          "Customer Data Management",
          "Sales Automation",
          "Reporting & Analytics",
          "Integration",
          "Customization",
        ],
      },
      {
        title: "IT Staff Augmentation",
        description: "Flexible access to skilled IT professionals.",
        features: [
          "Dedicated Development Teams",
          "Frontend & Backend Developers",
          "Full-Stack Engineers",
          "Mobile App Developers",
          "Cloud & DevOps Engineers",
        ],
      },
      {
        title: "ERP Systems",
        description: "Integrated enterprise resource planning systems.",
        features: [
          "Finance Management",
          "Supply Chain",
          "Reporting",
          "System Integration",
          "Security",
        ],
      },
      {
        title: "HRMS Platforms",
        description: "Human resource management systems.",
        features: [
          "Employee Management",
          "Payroll Processing",
          "Performance Tracking",
          "Compliance",
          "Reporting",
        ],
      },
      {
        title: "Inventory & Asset Management Systems",
        description: "Track and manage enterprise assets.",
        features: [
          "Asset Tracking",
          "Inventory Control",
          "Reporting",
          "Integration",
          "Scalability",
        ],
      },
    ],
  },

  {
    slug: "cloud-infrastructure-services",
    title: "Cloud & Infrastructure Services",
    desc: "Secure, scalable, and cost-optimized cloud solutions.",
    items: [
      {
        title: "Cloud Migration",
        description: "Seamless migration to the cloud.",
        features: [
          "Assessment & Planning",
          "Data Migration",
          "Application Migration",
          "Security Configuration",
          "Post-Migration Support",
        ],
      },
      {
        title: "Cloud Architecture Setup",
        description: "Robust cloud architecture design.",
        features: [
          "Architecture Design",
          "Security & Governance",
          "Scalability Planning",
          "Cost Optimization",
          "Monitoring",
        ],
      },
      {
        title: "Application Integrations",
        description: "Seamless system integrations.",
        features: [
          "API Integration",
          "Middleware Development",
          "Data Synchronization",
          "Security",
          "Monitoring",
        ],
      },
      {
        title: "Infrastructure Optimization",
        description: "Optimize infrastructure performance and cost.",
        features: [
          "Performance Tuning",
          "Cost Optimization",
          "Monitoring",
          "Security Enhancements",
          "Scalability",
        ],
      },
      {
        title: "Unified Communications (UCaaS)",
        description: "Cloud-based communication platforms.",
        features: [
          "VoIP Solutions",
          "Video Conferencing",
          "Collaboration Tools",
          "Security",
          "Scalability",
        ],
      },
    ],
  },

  {
    slug: "cybersecurity-solutions",
    title: "Cybersecurity Solutions",
    desc: "Comprehensive security strategies to protect digital assets.",
    items: [
      {
        title: "Security Audits",
        description: "Comprehensive security assessments.",
        features: [
          "Security Assessment",
          "Compliance Review",
          "Risk Analysis",
          "Reporting",
          "Recommendations",
        ],
      },
      {
        title: "Vulnerability Assessment",
        description: "Identify and mitigate vulnerabilities.",
        features: [
          "Vulnerability Scanning",
          "Penetration Testing",
          "Risk Analysis",
          "Reporting",
          "Mitigation Planning",
        ],
      },
      {
        title: "Threat Monitoring",
        description: "24/7 threat detection and response.",
        features: [
          "SOC Monitoring",
          "Incident Response",
          "Log Analysis",
          "Threat Intelligence",
          "Reporting",
        ],
      },
      {
        title: "Data Protection & Compliance",
        description: "Protect sensitive data and ensure compliance.",
        features: [
          "Data Encryption",
          "Access Control",
          "Compliance Management",
          "Monitoring",
          "Audit Support",
        ],
      },
    ],
  },
];
