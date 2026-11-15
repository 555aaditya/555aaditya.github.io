// Everything the page says lives here. Edit this file, not App.tsx.

export const profile = {
  name: "Aaditya Sinha",
  title: "Software engineer. Backend, data and infrastructure.",
  location: "Chandigarh, India",
  about:
    "I build backend systems, data pipelines and the cloud infrastructure under them. At OakNorth I'm a forward deployed engineer in the People team, owning four internal products end to end, from React to FastAPI to Terraform on AWS. Outside work I contribute to open source and build Svetra.",
  email: "555aaditya@proton.me",
};

export const links = [
  { label: "GitHub", href: "https://github.com/555aaditya" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/555aaditya/" },
  { label: "X", href: "https://x.com/555aaditya" },
  { label: "LeetCode", href: "https://leetcode.com/u/555aaditya/" },
  { label: "Kaggle", href: "https://www.kaggle.com/aaditya555" },
  { label: "GitHub (work)", href: "https://github.com/aaditya-sinha-oaknorth" },
];

export const experience = [
  {
    company: "OakNorth Bank",
    roles: [
      { title: "GenAI Analyst", period: "Jul 2026 – now" },
      { title: "GenAI Analyst Intern", period: "Jul 2025 – Jun 2026" },
    ],
    summary:
      "Forward deployed engineer embedded in the People team. I build and run the bank's internal People tools: four products in production behind one SSO login on private AWS infrastructure.",
    points: [
      "Built Stride, the bank-wide performance review platform (FastAPI, React), going from first deploy to a live mid-year cycle in 7 weeks.",
      "Enforced role and reporting-line access across 111 endpoints, pinned by a 190-case permission-matrix test.",
      "Built Census, a serverless office attendance pipeline on S3 and Athena, with an MCP server so Claude can query it.",
      "Designed an append-only, bitemporal Postgres store for HR analytics in Atlas, with PII tokenised and every read of personal data audited.",
      "Own the Terraform for the People AWS accounts: ECS Fargate, Aurora Postgres, private access over Zscaler ZPA, Entra ID to Auth0 SSO.",
    ],
  },
  {
    company: "Accenture",
    roles: [{ title: "Data Analytics and Visualization Intern", period: "Dec 2024 – Feb 2025" }],
    summary:
      "Turned client requirements into analysis of raw sales data with Python and SQL, and presented recommendations.",
    points: [],
  },
];

export const projects = [
  {
    name: "Svetra",
    year: "2026",
    blurb:
      "Compiles a small svetra.yaml into locked-down Postgres, row-level security and types for Supabase, and generates tests that prove the access rules hold. Released on crates.io and npm.",
    stack: ["Rust", "Postgres", "Supabase", "MCP"],
    links: [
      { label: "site", href: "https://555aaditya.github.io/Svetra/" },
      { label: "code", href: "https://github.com/555aaditya/Svetra" },
    ],
  },
  {
    name: "Language Model Engine",
    year: "2026",
    blurb:
      "A Llama-style decoder written from first principles: BPE tokenizer, GQA and RoPE, tiled flash attention with its own backward pass, KV cache, int8 and int4 quantisation. 371 tests.",
    stack: ["Python", "PyTorch"],
    links: [{ label: "code", href: "https://github.com/555aaditya/Language-Model" }],
  },
  {
    name: "Optimised Fuel Route API",
    year: "2026",
    blurb:
      "Returns the cheapest fuel stops for a truck on any US route, using one routing call and a grid spatial index over 6,967 stations.",
    stack: ["Python", "Django", "OSRM"],
    links: [{ label: "code", href: "https://github.com/555aaditya/Optimised-Fuel-Route-API" }],
  },
  {
    name: "Stock Backtesting Pipeline",
    year: "2026",
    blurb:
      "Event-driven backtester for Indian markets: 9 strategies, Black-76 pricing with Greeks, an NSE transaction cost model and a Flask dashboard.",
    stack: ["Python", "Flask", "SQLite"],
    links: [{ label: "code", href: "https://github.com/555aaditya/Stock-Backtesting-Pipeline" }],
  },
  {
    name: "JamRoom",
    year: "2025",
    blurb: "Shared listening rooms with synced Spotify playback over WebSockets.",
    stack: ["Flask", "Socket.IO", "MongoDB", "Spotify API"],
    links: [{ label: "code", href: "https://github.com/555aaditya/JamRoom" }],
  },
  {
    name: "Gaze Detection",
    year: "2025",
    blurb:
      "Exam proctoring that tracks head pose and pupils with dlib and spots phones with YOLO.",
    stack: ["Python", "OpenCV", "YOLO"],
    links: [{ label: "code", href: "https://github.com/555aaditya/Gaze-Detection" }],
  },
  {
    name: "Twitter ETL",
    year: "2025",
    blurb: "Airflow pipeline on EC2 that pulls tweets, cleans them with Pandas and lands them in S3.",
    stack: ["Airflow", "Python", "AWS"],
    links: [{ label: "code", href: "https://github.com/555aaditya/Twitter-ETL" }],
  },
];

// Merged PR counts, 2026-11-16. Includes four PRs that landed through a maintainer's PR.
export const openSource = {
  summary: "90 merged pull requests across 10 projects, in Rust, C++, Python, TypeScript and Go.",
  repos: [
    { repo: "LadybugDB/ladybug", what: "Embedded graph database", merged: 16 },
    { repo: "feldera/feldera", what: "Incremental SQL engine", merged: 15 },
    { repo: "warmbly/warmbly", what: "Email outreach platform", merged: 15 },
    { repo: "ruvnet/ruflo", what: "Agent harness and MCP server", merged: 13 },
    { repo: "morluto/rea", what: "Reverse-engineering agents", merged: 8 },
    { repo: "pocoproject/poco", what: "POCO C++ Libraries", merged: 6 },
    { repo: "sqlfluff/sqlfluff", what: "SQL linter and formatter", merged: 6 },
    { repo: "openclaw/openclaw", what: "Self-hosted AI assistant", merged: 5 },
    { repo: "useopendesk/opendesk", what: "Support inbox and live chat", merged: 4 },
    { repo: "narwhals-dev/narwhals", what: "Dataframe compatibility layer", merged: 2 },
  ],
};

export const writing = [
  {
    title:
      "Checking Row-Level Security Against Its Specification: Spec-Derived Access Tests and a Mutation Study",
    status: "In preparation",
  },
];

export const achievements = [
  "LeetCode Knight. Contest rating 2,104 (peak 2,206), top 1.55%.",
  "Rank 49 in Biweekly Contest 191, all 4 problems solved.",
  "410 problems solved, 84 of them hard. Longest daily streak 101 days.",
];

export const education = [
  { school: "Chandigarh University", degree: "B.E. Computer Science", period: "2022 – 2026" },
];
