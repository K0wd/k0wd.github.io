const portfolioData = {
    personal: {
        name: "Kim E. Bandeleon",
        firstName: "Kim",
        lastName: "Bandeleon",
        title: "QA & AI Management Specialist",
        headline: "Quality engineering powered by AI.",
        subheadline: "Specialized in test automation, AI-driven pipelines, and QA strategy.",
        valueProp: "I help engineering teams ship faster, catch more bugs, and build confidence in every release — so you can focus on building great products.",
        location: "Marilao, Bulacan, Philippines",
        email: "consult@testwithkim.com",
        phone: "+63 917 XXX XXXX",
        bio: "Hi! I'm Kim, a Senior QA & AI Management Specialist with 15+ years of experience across 15+ companies. I build AI-augmented test pipelines, design automation frameworks, and lead quality strategy for teams shipping production software daily. Currently at AtMail and consulting independently.",
        bio2: "I combine deep QA expertise with hands-on AI tooling — from building Claude agent harnesses to deploying autonomous test platforms. I use AI agents for pipeline monitoring and spend most of my time on AI management, orchestrating intelligent systems that keep releases on track.",
        availability: "Available for new projects"
    },

    social: [
        { name: "Email", url: "#contact", icon: "email" },
        { name: "GitHub", url: "https://github.com/k0wd", icon: "github" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/kim-bandeleon", icon: "linkedin" }
    ],

    heroStats: [
        { number: "15+", label: "Years Experience" },
        { number: "15+", label: "Companies Served" },
        { number: "30+", label: "Products QA'ed" }
    ],

    aboutStats: [
        { number: "15+", label: "Years Experience", icon: "briefcase", color: "#6366f1" },
        { number: "30+", label: "Products QA'ed", icon: "headphones", color: "#14b8a6" },
        { number: "3+", label: "AI Products Deployed", icon: "cpu", color: "#f43f5e" },
        { number: "10+", label: "AI Agents On Hand", icon: "bot", color: "#f59e0b" }
    ],

    services: [
        {
            name: "Test Automation",
            icon: "code",
            tagline: "Reliable, maintainable test suites that catch regressions before your users do.",
            items: ["Playwright & Selenium", "API Testing", "CI/CD Integration", "Cross-browser Testing", "Mobile Testing (Appium)"]
        },
        {
            name: "AI Test Pipelines",
            icon: "cpu",
            tagline: "AI-powered pipelines that generate tests from tickets and post results automatically.",
            items: ["Ticket-to-Test Automation", "AI Gherkin Authoring", "Claude Agent Harnesses", "Autonomous Test Execution", "Results Integration"]
        },
        {
            name: "QA Consulting",
            icon: "strategy",
            tagline: "End-to-end quality strategy tailored to your team's size, stack, and release cadence.",
            items: ["Test Planning", "Framework Selection", "Team Mentoring", "Process Optimization", "Risk Assessment"]
        },
        {
            name: "AI Agent Management",
            icon: "bot",
            tagline: "Build, audit, and manage AI agent ecosystems for development teams.",
            items: ["Agent Design & Authoring", "Skill & Rule Libraries", "Marketplace Curation", "Performance Auditing", "Deployment Automation"]
        }
    ],

    coreSkills: [
        { name: "Test Automation", level: 97 },
        { name: "AI Pipeline Design", level: 90 },
        { name: "QA Strategy", level: 95 },
        { name: "Playwright / Selenium", level: 96 },
        { name: "CI/CD Integration", level: 92 },
        { name: "Python / TypeScript", level: 93 },
        { name: "Leadership & Mentoring", level: 88 }
    ],

    traits: [
        "Methodical", "Detail-Oriented", "Fast Learner", "Proactive",
        "Collaborative", "Results-Driven", "Adaptable", "Reliable"
    ],

    tools: [
        { name: "Playwright", icon: "playwright", color: "#2EAD33" },
        { name: "Selenium", icon: "selenium", color: "#43B02A" },
        { name: "Python", icon: "python", color: "#3776AB" },
        { name: "Claude AI", icon: "claude", color: "#D4A574" },
        { name: "GitHub", icon: "github", color: "#181717" },
        { name: "Jira", icon: "jira", color: "#0052CC" },
        { name: "Azure DevOps", icon: "azure", color: "#0078D4" },
        { name: "VS Code", icon: "vscode", color: "#007ACC" },
        { name: "Docker", icon: "docker", color: "#2496ED" },
        { name: "Cypress", icon: "cypress", color: "#17202C" }
    ],

    experience: [
        {
            date: "2023 — Present",
            role: "Senior Quality Engineer",
            company: "AtMail",
            bullets: [
                "Lead QA strategy and automation for enterprise email platform",
                "Built AI-powered test pipeline (TestAgent) deployed across clients",
                "Designed Claude agent harness and marketplace for team tooling",
                "Reduced manual regression testing by 70% with Playwright suite"
            ]
        },
        {
            date: "2024 — 2025",
            role: "Automation Engineer",
            company: "Cualia",
            bullets: [
                "Built Playwright test automation for healthcare platform",
                "Automated patient-flow and compliance-critical test scenarios",
                "Integrated test suite into CI/CD with Python tooling",
                "Ensured HIPAA-adjacent data handling in test environments"
            ]
        },
        {
            date: "2023 — 2024",
            role: "Automation Engineer",
            company: "Markets.com",
            bullets: [
                "Architected Cypress test suite for trading platform",
                "Implemented API testing framework for financial endpoints",
                "Integrated test automation into CI/CD pipeline",
                "Mentored junior engineers on test best practices"
            ]
        },
        {
            date: "2022 — 2023",
            role: "Automation Engineer",
            company: "The Plate",
            bullets: [
                "Built Playwright-based end-to-end test framework from scratch",
                "Established test automation standards and coding guidelines",
                "Automated critical user journeys reducing release time by 40%",
                "Introduced BDD with Gherkin for stakeholder-readable tests"
            ]
        },
        {
            date: "2021",
            role: "Automation Engineer",
            company: "Finastra",
            bullets: [
                "Automated regression tests for banking software using Selenium and Java",
                "Executed API testing for financial transaction endpoints",
                "Collaborated with cross-functional teams across time zones",
                "Contributed to quality gates within enterprise release pipeline"
            ]
        },
        {
            date: "2020 — 2025",
            role: "Automation Engineer",
            company: "AJTickets",
            bullets: [
                "Maintained and expanded Selenium C# test suite",
                "Deployed TestAgent AI platform for automated test generation",
                "Managed Azure DevOps test pipelines across environments",
                "Achieved 85% automated coverage on critical purchase flows"
            ]
        },
        {
            date: "2020",
            role: "Test Engineer",
            company: "Success Lion",
            bullets: [
                "Performed manual and automated testing for web applications",
                "Wrote and maintained test cases and bug reports",
                "Contributed to regression and smoke test suites",
                "Coordinated defect triage with development team"
            ]
        },
        {
            date: "2019 — 2024",
            role: "Automation Engineer",
            company: "SolarPlus",
            bullets: [
                "Built Robot Framework test suites for solar energy platform",
                "Automated mobile testing with Appium for field-service apps",
                "Integrated Python-based test automation into CI pipelines",
                "Maintained cross-platform test coverage across web and mobile"
            ]
        },
        {
            date: "2018",
            role: "Test Engineer",
            company: "Loan Market AU",
            bullets: [
                "Executed test plans for mortgage processing platform",
                "Performed manual and exploratory testing across loan workflows",
                "Documented defects and tracked resolution through to production",
                "Supported UAT coordination with business stakeholders"
            ]
        },
        {
            date: "2017 — 2018",
            role: "Automation Engineer",
            company: "YesCourse",
            bullets: [
                "Built Selenium test suites for e-learning platform",
                "Automated user registration and course enrollment flows",
                "Integrated test automation with Python scripting",
                "Reduced manual regression testing effort by 50%"
            ]
        },
        {
            date: "2017 — 2018",
            role: "Automation Engineer",
            company: "AnalyticsFire",
            bullets: [
                "Developed Selenium Java test automation for analytics dashboards",
                "Automated data pipeline validation and reporting workflows",
                "Collaborated with data engineering on test data management",
                "Maintained test environment configurations across staging and prod"
            ]
        },
        {
            date: "2014 — 2019",
            role: "Product Owner",
            company: "Nokia",
            bullets: [
                "Owned product backlog for internal QA tooling platform",
                "Coordinated between 3 dev teams and stakeholders across 4 countries",
                "Drove adoption of automated testing reducing QA cycle by 50%",
                "Led SAFe Agile transformation for QA organization"
            ]
        },
        {
            date: "2017 — 2018",
            role: "Customer Support",
            company: "BuyersDirect",
            bullets: [
                "Provided quality assurance for customer-facing support flows",
                "Identified and reported product defects from support tickets",
                "Contributed to internal knowledge base and process documentation",
                "Collaborated with QA team on bug triage and prioritization"
            ]
        },
        {
            date: "2017 — 2018",
            role: "Customer Support",
            company: "JustWines",
            bullets: [
                "Performed manual testing and issue tracking for e-commerce platform",
                "Reported and tracked defects through resolution lifecycle",
                "Supported quality control processes for order fulfillment",
                "Maintained test documentation and process guides"
            ]
        },
        {
            date: "2013 — 2014",
            role: "Customer Support",
            company: "AskMeFast",
            bullets: [
                "Conducted user testing and quality assurance for Q&A platform",
                "Identified usability issues and reported bugs to development",
                "Supported content moderation and platform stability",
                "First professional role — built foundation in software quality"
            ]
        }
    ],

    projects: [
        {
            name: "TestAgent Platform",
            tagline: "AI-powered test pipeline — ticket to results, fully automated",
            description: "Built an autonomous test platform that reads tickets, generates test plans, writes and executes Playwright tests, and posts results back to the tracker. Deployed across 3 client environments.",
            tags: ["Python", "Playwright", "AI", "Claude"],
            badge: "3 Clients",
            badgeColor: "#14b8a6",
            icon: "cpu",
            iconBg: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            demo: "demo-testagent.html"
        },
        {
            name: "AI Agent Marketplace",
            tagline: "Browse, cart, and deploy AI agents into any project",
            description: "A local catalog of Claude agents, skills, and rules. Add to cart, pick a deploy path, check out. Harness bundles provision entire QA roles in one click.",
            tags: ["Python", "HTTP Server", "CLI"],
            badge: "200+ Items",
            badgeColor: "#6366f1",
            icon: "store",
            iconBg: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
            demo: "demo-marketplace.html"
        },
        {
            name: "AI Reviewer",
            tagline: "Audit and improve every AI rule shaping Claude",
            description: "Scans 200+ items across global and per-project scopes. Review agent definitions, chat with Claude about improvements, and refine your AI harness.",
            tags: ["Python", "Web UI", "Claude"],
            badge: "206 Items",
            badgeColor: "#f59e0b",
            icon: "scan",
            iconBg: "linear-gradient(135deg, #f59e0b 0%, #f97316 100%)",
            demo: "demo-reviewer.html"
        }
    ],

    testimonials: [
        {
            quote: "Kim transformed our QA process. His AI test pipeline caught bugs we'd been missing for months. The team ships with genuine confidence now.",
            name: "Dmitri Volkov",
            role: "Engineering Manager, Markets.com",
            rating: 5
        },
        {
            quote: "Methodical, fast, and deeply technical. Kim built our entire automation framework from scratch and mentored the team to maintain it independently.",
            name: "Sarah Mitchell",
            role: "CTO, The Plate",
            rating: 5
        },
        {
            quote: "His Claude agent marketplace is a game-changer for how we deploy AI tooling. What used to take hours of manual setup now happens in one click.",
            name: "Jayson Hawes",
            role: "Lead Developer, PowerSlice LLC",
            rating: 5
        }
    ],

    whyHireMe: [
        { title: "Deep Expertise", description: "15+ years in QA across fintech, e-commerce, telecom, and SaaS.", icon: "award" },
        { title: "AI-First Approach", description: "I build AI pipelines that automate the boring parts of testing.", icon: "zap" },
        { title: "Clear Communication", description: "Prompt updates, detailed reports — no surprises.", icon: "message" },
        { title: "Timezone Flexible", description: "Available across multiple time zones for async and sync work.", icon: "globe" },
        { title: "Results-Driven", description: "Your quality goals are my top priority. Every engagement has measurable outcomes.", icon: "target" }
    ],

    education: [
        {
            institution: "University of the East",
            degree: "Bachelor of Science in Computer Engineering",
            date: "2009 — 2014",
            logoImage: "UE-3d-seal-sm.png"
        }
    ],

    availabilityOptions: [
        "Full-Time", "Part-Time", "Freelance Projects", "Consulting"
    ],

    languages: [
        { name: "English", level: "Fluent", percent: 95 },
        { name: "Filipino", level: "Native", percent: 100 }
    ],

    certifications: [
        { title: "ISTQB CTFL", abbr: "ISTQB", color: "#2563eb", icon: "shield" },
        { title: "AI Test Engineer", abbr: "AI", color: "#7c3aed", icon: "cpu" },
        { title: "Claude Max User", abbr: "C", color: "#d97706", icon: "zap" },
        { title: "SAFe", abbr: "SAFe", color: "#0d9488", icon: "layers" },
        { title: "Lean Six Sigma", abbr: "6s", color: "#ca8a04", icon: "sigma" },
        { title: "KnowBe4 Security", abbr: "K4", color: "#dc2626", icon: "lock" }
    ],

    companyLogos: [
        { name: "AtMail" }, { name: "Nokia" }, { name: "Markets.com" },
        { name: "Finastra" }, { name: "AJTickets" }, { name: "Cualia" },
        { name: "SolarPlus" }, { name: "The Plate" }, { name: "YesCourse" }
    ]
};
