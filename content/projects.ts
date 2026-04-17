// export const projects = [
//   // --- Entrepreneurial Projects ---
//   {
//     slug: "goalkeeper",
//     title: "GoalKeeper",
//     description:
//       "A UPI-based micro-savings platform for the Indian market, enabling users to save with every transaction through round-ups.",
//     problem:
//       "Encouraging consistent saving habits is challenging. Small, frequent savings can build significant capital over time but are often overlooked.",
//     solution:
//       "GoalKeeper links to users' UPI accounts, automatically rounding up transactions to the nearest ₹10 and investing the difference into a user-defined savings goal.",
//     impact:
//       "Aims to democratize saving and investing for young Indians by making it effortless and integrated into daily spending habits.",
//     tech: [
//       "Next.js",
//       "Node.js (TypeScript)",
//       "Prisma",
//       "PostgreSQL",
//       "Kafka",
//       "AWS Lambda",
//       "API Gateway",
//       "Terraform",
//     ],
//     status: "MVP in progress",
//     cta: "Seeking co-builders & design partners",
//   },
//   {
//     slug: "ai-podcast-assist",
//     title: "AI Podcast Assist",
//     description:
//       "An AI agent that automates the entire podcast lifecycle, from guest research and show structuring to post-production and content repurposing.",
//     problem:
//       "Podcasting involves immense manual effort in pre-production (research, outlining) and post-production (show notes, social clips, blog posts).",
//     solution:
//       "This AI agent ingests guest information, suggests interview questions, generates a structured show outline, transcribes the episode, and creates derivative content (summaries, quotes, social media posts).",
//     impact:
//       "Reduced preparation and repurposing time by ~70% in initial pilot tests, allowing creators to focus on producing high-quality content.",
//     tech: [
//       "Next.js",
//       "Python (FastAPI)",
//       "LLMs (OpenAI/Gemini)",
//       "RAG",
//       "Vector DB",
//       "Celery",
//       "AWS",
//     ],
//     status: "Private beta",
//     cta: "Seeking 3 design partners",
//   },
//   {
//     slug: "smart-gold-savings",
//     title: "Smart Gold Savings Platform",
//     description:
//       "An aggregator for jeweller-backed gold savings schemes, providing users with reminders, tracking, and comparative analytics.",
//     problem:
//       "Managing multiple gold schemes is cumbersome, and it's hard to track real returns or get timely reminders for installments.",
//     solution:
//       "A centralized dashboard to add, manage, and monitor various gold savings schemes. The platform sends automated payment reminders and visualizes investment growth.",
//     impact:
//       "Improves transparency and user trust, helping families maximize the value of their gold savings.",
//     tech: ["React Native", "Node.js", "Express", "MongoDB", "AWS"],
//     status: "Discovery + prototype",
//     cta: "Validating market need",
//   },
//   {
//     slug: "the-third-persons",
//     title: "The Third Persons (TTP)",
//     description:
//       "A social-first e-commerce brand for the LGBTQ+ community, leveraging AI for visual creation and marketing copy.",
//     problem:
//       "Authentic and creative marketing in niche e-commerce is time-consuming and expensive for new brands.",
//     solution:
//       "Utilizing generative AI to create unique product mockups, ad creatives, and social media copy, enabling rapid experimentation and A/B testing of brand concepts.",
//     impact:
//       "Early traction on social platforms with strong Gen Z resonance, demonstrating market potential.",
//     tech: [
//       "Shopify",
//       "Generative AI (Midjourney)",
//       "LLMs (Copywriting)",
//       "Social Media APIs",
//     ],
//     status: "Live experiments",
//     cta: "Collaborations welcome",
//   },
//   {
//     slug: "family-wealth-tracker",
//     title: "Family Wealth Tracker",
//     description:
//       "An AI-assisted tool for consolidating and tracking a family's multi-generational wealth across various asset classes.",
//     problem:
//       "Families often have assets spread across real estate, stocks, mutual funds, and more, making it difficult to get a holistic view of their net worth and performance.",
//     solution:
//       "The platform uses AI to ingest statements and documents (e.g., property deeds, stock holdings), automatically categorizing and creating a unified dashboard with alerts and performance insights.",
//     impact:
//       "Helps families achieve financial clarity, improving long-term planning and decision-making.",
//     tech: [
//       "Next.js",
//       "Python",
//       "OCR",
//       "LLMs (Data Extraction)",
//       "PostgreSQL",
//       "AWS",
//     ],
//     status: "MVP planning",
//     cta: "Seeking early adopters for feedback",
//   },

//   // --- Resume / Professional Projects ---
//   {
//     slug: "amazon-connect-flow-optimization",
//     title: "Amazon Connect Flow Optimization",
//     description:
//       "Optimized Petco’s customer service experience with 50+ Amazon Connect flows integrated with AWS services.",
//     problem:
//       "Customer support workflows were slow, increasing call handling time and impacting satisfaction.",
//     solution:
//       "Implemented 50+ Amazon Connect flows and 25+ AWS Lambda functions with DynamoDB and S3 integration.",
//     impact:
//       "Reduced call handling time by 20%, processing time by 35%, and improved system uptime to 99.9%.",
//     tech: ["Angular", "AWS Lambda", "Node.js", "Python", "DynamoDB", "S3", "QuickSight"],
//     status: "In production",
//     cta: "Delivered at Petco",
//   },
//   {
//     slug: "custom-ccp-implementation",
//     title: "Custom Contact Control Panel (CCP)",
//     description:
//       "Developed a custom CCP for Amazon Connect to streamline customer support operations.",
//     problem:
//       "Default CCP lacked flexibility and slowed down customer support agents.",
//     solution:
//       "Built a custom Angular-based CCP integrated with AWS Lambda and DynamoDB for real-time data sync.",
//     impact:
//       "Reduced response time by 15%, improved agent productivity by 25%, and increased satisfaction by 20%.",
//     tech: ["Angular", "AWS Lambda", "Node.js", "Python", "DynamoDB", "S3", "QuickSight"],
//     status: "In production",
//     cta: "Delivered at Petco",
//   },
//   {
//     slug: "datatwin-tax-reconciliation",
//     title: "DataTwin - Tax Reconciliation (OneRetail)",
//     description:
//       "A tax reconciliation platform for retail organizations, automating cross-invoice and financial reconciliation.",
//     problem:
//       "Manual reconciliation was time-consuming and error-prone for retail clients.",
//     solution:
//       "Built a platform to automate reconciliation with recommendations and accuracy checks.",
//     impact:
//       "Improved financial accuracy and streamlined reconciliation workflows.",
//     tech: ["ReactJS", "Node.js", "Express", "AWS DynamoDB", "AWS Lambda", "Terraform", "QuickSight"],
//     status: "Delivered",
//     cta: "Delivered at OneIntegral Technologies",
//   },
//   {
//     slug: "datatwin-partner-performance",
//     title: "DataTwin - Partner/Sales Performance & Payouts (OneCommerce)",
//     description:
//       "A SaaS platform to manage partner commissions, sales incentives, and performance bonuses.",
//     problem:
//       "Tracking partner performance and payouts manually caused inefficiencies and disputes.",
//     solution:
//       "Automated payout calculations with real-time transparency and accuracy.",
//     impact:
//       "Reduced errors in payouts and improved partner trust.",
//     tech: ["ReactJS", "Node.js", "Express", "AWS DynamoDB", "AWS Lambda", "Terraform", "QuickSight"],
//     status: "Delivered",
//     cta: "Delivered at OneIntegral Technologies",
//   },
//   {
//     slug: "datatwin-fixed-asset-reconciliation",
//     title: "DataTwin - Fixed Asset Reconciliation (FAR)",
//     description:
//       "Streamlined fixed asset reconciliation processes with intelligent discrepancy detection.",
//     problem:
//       "Companies struggled to reconcile fixed assets with financial records, leading to compliance risks.",
//     solution:
//       "Automated reconciliation and insights with React, Node.js, and MongoDB.",
//     impact:
//       "Reduced errors and enhanced financial reporting.",
//     tech: ["ReactJS", "Node.js", "Express", "MongoDB", "AWS Lambda", "Terraform", "QuickSight"],
//     status: "Delivered",
//     cta: "Delivered at OneIntegral Technologies",
//   },
//   {
//     slug: "datatwin-lease-accounting",
//     title: "DataTwin - Lease Accounting & Management System (LAMS)",
//     description:
//       "A platform to manage lease contracts, automate lease accounting, and ensure compliance.",
//     problem:
//       "Lease management was complex and error-prone for clients with multiple contracts.",
//     solution:
//       "Developed a lease accounting system with automation and real-time insights.",
//     impact:
//       "Improved compliance and decision-making efficiency.",
//     tech: ["ReactJS", "Node.js", "Express", "MongoDB", "AWS Lambda", "Terraform", "QuickSight"],
//     status: "Delivered",
//     cta: "Delivered at OneIntegral Technologies",
//   },
//   {
//     slug: "knitpack-erp",
//     title: "Knitpack (ERP Software)",
//     description:
//       "An ERP platform for garment manufacturing businesses.",
//     problem:
//       "Manual processes slowed production and increased costs.",
//     solution:
//       "Implemented automated workflows, testing tools, and responsive UI.",
//     impact:
//       "Cut manual testing by 50%, improved engagement by 15%, reduced AWS costs by 20%.",
//     tech: ["AngularJS", "PHP (CodeIgniter)", "MySQL", "AWS"],
//     status: "Delivered",
//     cta: "Delivered at Global Software Solutions",
//   },
//   {
//     slug: "myboss-office-automation",
//     title: "MyBoss (Office Automation)",
//     description:
//       "A web-based office automation system for SMEs.",
//     problem:
//       "Routine office tasks required manual data entry, leading to inefficiency.",
//     solution:
//       "Developed AngularJS frontend + backend APIs with AWS Lambda for automation.",
//     impact:
//       "Cut response times by 30%, reduced manual data errors by 25%, improved engagement by 20%.",
//     tech: ["AngularJS", "PHP (CodeIgniter)", "MySQL", "AWS Lambda"],
//     status: "Delivered",
//     cta: "Delivered at Global Software Solutions",
//   },
// ];


export const projects = [
  // --- Entrepreneurial Products ---
  {
    slug: "fitte-gym-erp",
    title: "Fitte | Gym ERP",
    description:
      "Full-stack gym management SaaS used by paying fitness centers to run memberships, payments, and operations.",
    problem:
      "Fitness centers managed members, payments, and reporting through spreadsheets and disconnected tools, creating operational overhead and billing errors.",
    solution:
      "Built and deployed a full-stack gym management platform with Node.js and AWS serverless infrastructure. Automated member onboarding, subscription tracking, and recurring billing logic.",
    impact:
      "10+ paying fitness centers using the platform. Iterating on live customer feedback from active gym operators.",
    tech: ["Node.js", "AWS Lambda", "DynamoDB", "S3", "Next.js", "TypeScript"],
    status: "Live - paying customers",
    cta: "10+ paying gyms onboarded",
  },
  {
    slug: "zetio-instructor-ops",
    title: "Zetio | Instructor Operations Platform",
    description:
      "Operations system for instructors running paid live batch-based online classes, replacing WhatsApp, Google Forms, and manual payment tracking.",
    problem:
      "Independent instructors running paid online batches managed everything through WhatsApp groups, manual payment follow-ups, and spreadsheets. Reminders were missed, payments were late, and students fell through the cracks.",
    solution:
      "Built a full-stack platform handling batch creation, student enrollment with OTP auth, payment collection, and automated cron-based reminders. Designed to run an entire paid live batch end-to-end without operational chaos.",
    impact:
      "5 paying instructors using the platform. Active revenue. Replaced manual workflows with structured, automated operations.",
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "AWS S3",
      "Vercel",
      "OTP Auth",
      "Cron Jobs",
    ],
    status: "Live - paying customers",
    cta: "5 paying instructors onboarded",
  },
  {
    slug: "podos-ai-podcast-assistant",
    title: "PodOS | AI Podcast Research Assistant",
    description:
      "AI-powered podcast research and workflow assistant automating guest research, topic structuring, and content generation for creators.",
    problem:
      "Podcast preparation involves hours of manual research per episode. Guest profiling, question generation, and show structuring are done by hand with no systematic tooling.",
    solution:
      "Built LLM-based research pipelines with prompt orchestration and structured output generation. Full-stack architecture on React, Node.js, and AWS serverless with Bedrock integration for guest analysis and outline generation.",
    impact:
      "5 paying users. Active revenue. Iterating on creator feedback to expand workflow coverage.",
    tech: [
      "React",
      "Node.js",
      "AWS Bedrock",
      "Claude LLM",
      "AWS Lambda",
      "DynamoDB",
      "Next.js",
      "TypeScript",
    ],
    status: "Live - paying customers",
    cta: "5 paying creators onboarded",
  },

  // --- Professional / Enterprise Projects ---
  {
    slug: "amazon-connect-platform",
    title: "AWS Serverless Contact Center Platform",
    description:
      "Production-grade contact center platform for Petco, powering voice and chat support across 100+ Amazon Connect flows with AI-driven self-service.",
    problem:
      "Petco's customer support operations relied on manual routing and agent-heavy workflows, leading to high handling times and limited scalability across IVR and chat channels.",
    solution:
      "Architected and owned an AWS serverless platform with 100+ Amazon Connect flows, 50+ Lambda services, Amazon Lex, and Claude LLM via Bedrock for intent handling and response generation. Deployed Amazon Connect Chat on Petco.com via CloudFront for digital self-service.",
    impact:
      "Reduced average call handling time by 25%, decreased manual ticket errors by 90%, accelerated case resolution by 35%, and achieved 99.95% system uptime supporting a ~$6B revenue business.",
    tech: [
      "Amazon Connect",
      "AWS Lambda",
      "AWS Bedrock",
      "Claude LLM",
      "Amazon Lex",
      "DynamoDB",
      "S3",
      "SNS",
      "Kinesis",
      "CloudFront",
      "CloudFormation",
      "Salesforce",
      "Node.js",
      "Python",
    ],
    status: "In production",
    cta: "Delivered at Petco",
  },
  {
    slug: "amazon-connect-chat-ui",
    title: "Amazon Connect Chat - Petco.com",
    description:
      "Real-time web-based customer support chat deployed on Petco.com, built on Amazon Connect with a custom Angular agent interface and full backend orchestration.",
    problem:
      "Petco lacked a scalable digital chat channel. Customers had no real-time web support option, pushing all volume to voice and increasing live agent load.",
    solution:
      "Architected and deployed Amazon Connect Chat on Petco.com. Designed 100+ Connect flows for chat routing, escalation, and SLA-based prioritization. Built 35+ Lambda functions for backend orchestration and integrated Amazon Lex for pre-agent chatbot handling. Developed Salesforce auto-case creation via Lambda and a custom Angular CCP for chat agents. Delivered QuickSight and Joulica dashboards for real-time performance monitoring.",
    impact:
      "Reduced live agent workload significantly, cut manual ticket errors by 90%, accelerated case resolution by 35%, achieved 99.95% uptime, improved handling efficiency by 25%, and reduced operational overhead by 30%.",
    tech: [
      "Amazon Connect",
      "Amazon Lex",
      "AWS Lambda",
      "DynamoDB",
      "S3",
      "SNS",
      "Kinesis",
      "CloudFormation",
      "Angular",
      "Salesforce",
      "QuickSight",
      "Joulica",
      "Node.js",
      "Python",
    ],
    status: "In production",
    cta: "Delivered at Petco",
  },
  {
    slug: "usaa-banking-platform",
    title: "UI Platform - USAA (Fortune 500 U.S. Banking Client)",
    description:
      "Customer-facing banking platform for USAA built with React and TypeScript, supporting high-volume financial transactions and account management at scale.",
    problem:
      "The existing frontend architecture had performance bottlenecks, low test coverage, and reliability gaps across critical banking modules used by hundreds of thousands of users.",
    solution:
      "Led front-end architecture using React and TypeScript. Built and integrated REST APIs powering real-time account dashboards and transaction workflows. Established unit testing standards with Jest and React Testing Library. Integrated AWS Lambda backend services for scalable processing during peak transaction cycles.",
    impact:
      "Boosted user engagement by 20%, reduced bounce rate by 15%, cut data retrieval latency by 50%, reduced software bugs by 30%, reduced infrastructure costs by 40%, and reduced server downtime by 40%.",
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "REST APIs",
      "AWS Lambda",
      "Jest",
      "React Testing Library",
    ],
    status: "Delivered",
    cta: "Delivered at TCS",
  },
  {
    slug: "datatwin-tax-reconciliation",
    title: "DataTwin - Tax Reconciliation (OneRetail)",
    description:
      "Automated tax reconciliation platform for retail organizations, handling cross-invoice and financial transaction matching at scale.",
    problem:
      "Manual reconciliation was error-prone and time-consuming for enterprise retail clients managing high volumes of invoices and tax records.",
    solution:
      "Built full-stack platform with React, Node.js, and DynamoDB. Automated reconciliation pipelines using AWS Lambda, SQS, and Step Functions with audit-ready reporting via QuickSight.",
    impact:
      "Improved reconciliation accuracy, eliminated manual bottlenecks, and delivered audit-ready financial reporting for enterprise clients.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "AWS DynamoDB",
      "AWS Lambda",
      "SQS",
      "Step Functions",
      "Terraform",
      "QuickSight",
    ],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "datatwin-partner-payouts",
    title: "DataTwin - Partner Performance & Payouts (OneCommerce)",
    description:
      "SaaS platform automating partner commission calculations, sales incentives, and performance bonus payouts.",
    problem:
      "Tracking partner performance and computing payouts manually created disputes, errors, and lack of transparency across partner networks.",
    solution:
      "Built automated payout engine with real-time visibility using React, Node.js, DynamoDB, Lambda, and Step Functions. Delivered financial dashboards via QuickSight.",
    impact:
      "Eliminated payout errors, improved partner trust, and gave finance teams real-time accuracy across all commission structures.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "AWS DynamoDB",
      "AWS Lambda",
      "SQS",
      "Step Functions",
      "Terraform",
      "QuickSight",
    ],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "datatwin-fixed-asset-reconciliation",
    title: "DataTwin - Fixed Asset Reconciliation (FAR)",
    description:
      "Automated fixed asset reconciliation platform with intelligent discrepancy detection and financial reporting.",
    problem:
      "Companies struggled to reconcile physical assets with financial records, creating compliance risks and audit gaps.",
    solution:
      "Built full-stack reconciliation tool using React, Node.js, and MongoDB with Lambda-based automation and QuickSight dashboards for financial insights.",
    impact:
      "Reduced reconciliation errors, improved compliance posture, and accelerated financial close cycles for enterprise clients.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS Lambda",
      "SQS",
      "Step Functions",
      "Terraform",
      "QuickSight",
    ],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "datatwin-lease-accounting",
    title: "DataTwin - Lease Accounting & Management System (LAMS)",
    description:
      "Lease contract management platform automating accounting calculations and ensuring compliance across complex multi-contract portfolios.",
    problem:
      "Clients managing multiple lease contracts faced compliance risk and manual calculation errors under evolving lease accounting standards.",
    solution:
      "Developed lease accounting system with React, Node.js, MongoDB, and Lambda. Automated reconciliation, calculations, and real-time reporting via QuickSight.",
    impact:
      "Improved compliance readiness, automated complex accounting workflows, and gave clients real-time decision-making visibility.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS Lambda",
      "SQS",
      "Step Functions",
      "Terraform",
      "QuickSight",
    ],
    status: "Delivered",
    cta: "Delivered at OneIntegral Technologies",
  },
  {
    slug: "knitpack-erp",
    title: "Knitpack (ERP Software)",
    description:
      "ERP platform for garment manufacturing businesses, automating production workflows and improving delivery efficiency.",
    problem:
      "Manual processes in garment manufacturing slowed production cycles, inflated costs, and made tracking difficult.",
    solution:
      "Built full-stack ERP with AngularJS, PHP, and MySQL. Automated key workflows, added performance monitoring, and integrated AWS for scalable infrastructure.",
    impact:
      "Cut manual testing effort by 50%, improved user engagement by 15%, and reduced AWS infrastructure costs by 20%.",
    tech: ["AngularJS", "PHP (CodeIgniter)", "MySQL", "AWS"],
    status: "Delivered",
    cta: "Delivered at Global Software Solutions",
  },
  {
    slug: "myboss-office-automation",
    title: "MyBoss (Office Automation)",
    description:
      "Web-based office automation system for SMEs, reducing manual data entry and improving operational response times.",
    problem:
      "Routine office tasks required manual entry, creating inefficiency and data errors across day-to-day SME operations.",
    solution:
      "Developed AngularJS frontend with PHP backend APIs and AWS Lambda for automated data processing tasks.",
    impact:
      "Cut response times by 30%, reduced manual data errors by 25%, and improved user engagement by 20%.",
    tech: ["AngularJS", "PHP (CodeIgniter)", "MySQL", "AWS Lambda"],
    status: "Delivered",
    cta: "Delivered at Global Software Solutions",
  },
];
