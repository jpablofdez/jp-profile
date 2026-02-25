export const journey = [
  {
    period: "2022 - 2025",
    role: "Cloud Software Engineer - DevOps",
    company: "Equifax",
    summary:
      "Built secure FedRAMP-aligned GCP infrastructure, automated CI/CD with Terraform + Jenkins, and drove 99.9% uptime in critical services.",
    impact: [
      "Reduced manual operations by 40% through event-driven automation.",
      "Implemented 140+ IAM service improvements and lowered handling time by 15%.",
      "Expanded enterprise security adoption with Auth0 framework integrations.",
    ],
  },
  {
    period: "2017 - 2022",
    role: "IT Business Intelligence Developer",
    company: "Equifax",
    summary:
      "Delivered data products and modernization programs across analytics, finance, and operations domains.",
    impact: [
      "Migrated ETL flows from Informatica to Pentaho and reduced processing time by 30%.",
      "Supported Oracle to PostgreSQL migration on GCP for improved cost/performance.",
      "Developed BI dashboards and ML prototypes for stronger decision-making.",
    ],
  },
  {
    period: "2015 - 2017",
    role: "Workday Application Developer",
    company: "Equifax",
    summary:
      "Supported global Workday rollout in Costa Rica, integrating HR and Payroll workflows for 1500+ employees.",
    impact: [
      "Built Workday Studio integrations, reports, and calculated fields.",
      "Connected new Workday processes to legacy HR systems.",
    ],
  },
  {
    period: "2011 - 2015",
    role: "Application Developer",
    company: "Equifax Iberia",
    summary:
      "Built Java EE applications for credit information services used by major financial organizations.",
    impact: [
      "Optimized Oracle queries to improve enterprise response times.",
      "Delivered secure and maintainable web architecture with Hibernate and Struts.",
    ],
  },
  {
    period: "2010 - 2011",
    role: "Java Developer - Lafise Bank",
    company: "Novacomp",
    summary:
      "Engineered and supported web banking applications integrated with DB2 on AS/400.",
    impact: [
      "Implemented multi-factor authentication with tokens and certificates.",
      "Improved banking security compliance through hardened login patterns.",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Cloud and Infrastructure",
    items: "GCP, AWS, Kubernetes, Terraform, Docker, Compute Engine, GKE",
  },
  {
    title: "Automation and Delivery",
    items: "Jenkins, GitHub, Maven, Cloud Functions, Pub/Sub, CI/CD design",
  },
  {
    title: "Programming",
    items: "Java, Python, Node.js, Spring Boot, .NET MVC",
  },
  {
    title: "Data and BI",
    items:
      "BigQuery, Looker Studio, Pentaho, Tableau, PostgreSQL, Oracle, Jupyter",
  },
  {
    title: "Security and IAM",
    items: "Okta, Auth0, ServiceNow, Active Directory, Access Management",
  },
] as const;

export const certifications = [
  "Google Cloud Professional DevOps Engineer (2024)",
  "Texas Tech University - Machine Learning (2023)",
  "TEC - Machine Learning for Enterprises (2021)",
  "TEC - Data Science Specialization (2021)",
] as const;

export const focusAreas = [
  "GCP Platform Engineering",
  "Okta Identity Security",
  "DevOps Automation",
] as const;

export const portfolioPlaceholders = [
  {
    title: "Cloud Reliability Blueprint",
    description:
      "Future case study: end-to-end reliability engineering model with SLOs, incident patterns, and postmortem strategy.",
  },
  {
    title: "Identity Automation Framework",
    description:
      "Future case study: enterprise IAM automation architecture across Okta, Auth0, and ticketing workflows.",
  },
  {
    title: "Analytics Modernization Program",
    description:
      "Future case study: ETL modernization, data quality controls, and business KPI acceleration on GCP.",
  },
] as const;

export const digitalTwinContext = `
Name: Juan Pablo Fernandez Delgado
Location: Escazu, Costa Rica
Primary Roles: Cloud Software Engineer, DevOps Engineer, Site Reliability Engineer
Summary: System Engineer with 15+ years of experience in cloud infrastructure, automation, identity management, scalability, reliability, and performance.

Work Experience:
- Equifax (2022 - 2025), Cloud Software Engineer - DevOps
  - Built secure FedRAMP-aligned GCP infrastructure.
  - Reduced manual operations by 40% using Cloud Functions, Pub/Sub, and BigQuery workflows.
  - Implemented 140+ IAM and service workflow improvements; reduced handling time by 15%.
  - Built CI/CD pipelines with Jenkins, Terraform, and GitHub.
  - Led incident response with 99.9% uptime.
  - Implemented Auth0 integrations and improved security adoption.
- Equifax (2017 - 2022), IT Business Intelligence Developer
  - Built internal business tools for operations and leadership visibility.
  - Migrated ETL from Informatica to Pentaho with 30% processing improvement.
  - Supported Oracle to PostgreSQL migration on GCP.
  - Built Tableau dashboards and ML models in Python/Jupyter.
- Equifax (2015 - 2017), Workday Application Developer
  - Supported global Workday implementation in Costa Rica for 1500+ employees.
  - Built Workday integrations, reports, calculated fields, and HR/Payroll flows.
- Equifax Iberia (2011 - 2015), Application Developer
  - Developed Java EE enterprise apps using Hibernate, Struts, Tiles, and Maven.
  - Optimized Oracle performance and delivered solutions for financial institutions.
- Novacomp (2010 - 2011), Java Developer - Lafise Bank
  - Built web banking applications with Java and DB2 on AS/400.
  - Implemented MFA patterns with tokens and certificates.

Core Skills:
- Cloud: GCP, AWS, Kubernetes, Terraform, Docker
- CI/CD: Jenkins, GitHub, Maven
- Programming: Java, Python, Node.js, Spring Boot, .NET
- Data/BI: BigQuery, Looker Studio, Pentaho, Tableau, PostgreSQL, Oracle
- Security/IAM: Okta, Auth0, ServiceNow, Active Directory

Certifications:
- Google Cloud Professional DevOps Engineer (2024)
- Texas Tech University - Machine Learning (2023)
- TEC - Machine Learning for Enterprises (2021)
- TEC - Data Science Specialization (2021)

Education:
- Master’s in Database Technologies, CENFOTEC University (2017)
- Bachelor in Systems Engineering, Fidelitas University (2011)

Languages:
- Spanish (Native)
- English (Advanced)
`;
