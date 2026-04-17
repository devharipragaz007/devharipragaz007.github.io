import {
  Rocket,
  Code,
  Cloud,
  Database,
  BrainCircuit,
  LucideIcon,
} from "lucide-react";

interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    name: "Product & Entrepreneurship",
    icon: Rocket,
    skills: [
      {
        name: "Founding Engineer",
        description:
          "4x founding engineer experience across OneIntegral, Fitte, Zetio, and PodOS. Built from zero to paying customers with full ownership.",
      },
      {
        name: "Zero to Revenue",
        description:
          "Shipped three independent revenue-generating products while employed full-time. 10+ paying gyms on Fitte, 5 paying instructors on Zetio, 5 paying users on PodOS.",
      },
      {
        name: "Founder Collaboration",
        description:
          "Worked directly with founders as employee #3 at OneIntegral, translating ambiguous requirements into production financial automation platforms.",
      },
      {
        name: "Product Ownership",
        description:
          "Manages full product lifecycle across all three products: system design, feature prioritization, customer feedback loops, and deployment strategy.",
      },
    ],
  },
  {
    name: "Full-Stack Development",
    icon: Code,
    skills: [
      {
        name: "React & Next.js",
        description:
          "Building modern, performant web applications across SaaS products and enterprise platforms including USAA banking and Petco contact center.",
      },
      {
        name: "TypeScript & JavaScript",
        description:
          "Primary languages across 8+ years. Used in production at Petco, TCS, and all three independent products.",
      },
      {
        name: "Node.js & Express",
        description:
          "Backend services and REST APIs across financial automation, gym management, and AI workflow platforms.",
      },
      {
        name: "Angular",
        description:
          "Built custom Contact Control Panel for Petco's Amazon Connect agents. Led front-end architecture for enterprise contact center tooling.",
      },
      {
        name: "Python",
        description:
          "Lambda functions for backend orchestration across Petco's contact center platform and financial data processing pipelines at OneIntegral.",
      },
    ],
  },
  {
    name: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      {
        name: "AWS Serverless",
        description:
          "Production ownership of Lambda, DynamoDB, S3, SQS, SNS, Kinesis, Step Functions, and CloudFormation. 50+ Lambda services live at Petco.",
      },
      {
        name: "Amazon Connect",
        description:
          "Architected 100+ contact flows for voice and chat at Petco. Custom CCP, Lex integration, omnichannel routing, and SLA-based escalation.",
      },
      {
        name: "Terraform & IaC",
        description:
          "Infrastructure as code across OneIntegral and Petco. Achieved 30% reduction in deployment time and 20% decrease in infrastructure costs.",
      },
      {
        name: "Event-Driven Architecture",
        description:
          "Designed resilient event-driven systems using SQS, Kinesis, Step Functions, and Lambda for financial automation and real-time contact center workflows.",
      },
      {
        name: "CI/CD & Monitoring",
        description:
          "Managed controlled deployments via CI/CD pipelines. Delivered operational dashboards via QuickSight and Joulica achieving 99.95% uptime at Petco.",
      },
    ],
  },
  {
    name: "Data & Databases",
    icon: Database,
    skills: [
      {
        name: "DynamoDB",
        description:
          "Primary database across Petco serverless platform and OneIntegral financial automation systems. Optimized for high-volume, event-driven workloads.",
      },
      {
        name: "PostgreSQL & MySQL",
        description:
          "Used in Zetio for relational data modeling and in enterprise ERP systems at Global Software Solutions.",
      },
      {
        name: "MongoDB",
        description:
          "Used across OneIntegral's fixed asset reconciliation and lease accounting platforms for flexible financial data modeling.",
      },
      {
        name: "Neo4J",
        description:
          "Graph database experience from OneIntegral's financial automation suite for modeling complex partner and financial data relationships.",
      },
    ],
  },
  {
    name: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      {
        name: "AWS Bedrock & Claude LLM",
        description:
          "Production AI integration at Petco. Implemented Claude LLM via Bedrock for IVR and chat intent handling and response generation supporting a ~$6B revenue business.",
      },
      {
        name: "LLM Pipelines",
        description:
          "Built prompt orchestration and structured output pipelines in PodOS for guest research, topic structuring, and podcast outline generation.",
      },
      {
        name: "Amazon Lex",
        description:
          "Deployed Lex for pre-agent chatbot handling in Petco's Amazon Connect Chat, reducing live agent workload across digital support channels.",
      },
      {
        name: "Intelligent Self-Service",
        description:
          "Designed AI-powered IVR and chat self-service flows at Petco, reducing agent workload and increasing digital deflection at scale.",
      },
    ],
  },
];
