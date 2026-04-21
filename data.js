// Portfolio Data - Easy to update and extend
// Simply add new items to the arrays below

const portfolioData = {
    // Personal Information
    personal: {
        name: "Kim E. Bandeleon",
        title: "Quality and Automation Engineer",
        location: "Marilao, Bulacan",
        email: "Kim E. Bandeleon",
        phone: "09778264301",
        description: "I'm a Quality and Automation Engineer living in Marilao, Bulacan, currently working at AtMail."
    },

    // Social Links
    social: [
        {
            name: "Email",
            url: "mailto:consult@testwithkim.com",
            icon: "email"
        },
        {
            name: "GitHub",
            url: "https://github.com/k0wd",
            icon: "github"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/kim-bandeleon",
            icon: "linkedin"
        }
    ],

    // Projects - Add your projects here
    projects: [
        {
            title: "AI Test Framework",
            description: "AI-powered test generation and execution pipeline that automates end-to-end QA workflows from ticket to results.",
            url: "#testgenerator",
            external: false
        },
        {
            title: "Test Automation Framework",
            description: "Built a comprehensive test automation framework using Selenium and Python for web application testing.",
            url: "#",
            external: false
        },
        {
            title: "CI/CD Integration",
            description: "Integrated automated testing into CI/CD pipelines, reducing manual testing time by 60%.",
            url: "#",
            external: false
        }
    ],

    // Work Experience - Add your work history here
    // logoColor: brand-inspired background color for the initial avatar
    work: [
        {
            company: "AtMail",
            role: "Senior Quality Engineer",
            date: "2023 — Present",
            url: "https://atmail.com",
            logoColor: "#4f5b6e",
            logoText: "at",
            skills: ["Test Automation", "Selenium", "Python", "Test Strategy"]
        },
        {
            company: "Nokia",
            role: "Product Owner",
            date: "2014 — 2019",
            url: "https://nokia.com",
            logoColor: "#0066ff",
            skills: ["Test Automation", "Product Management", "Agile", "Scrum"]
        },
        {
            company: "Markets.com",
            role: "Automation Engineer",
            date: "2023 — 2024",
            url: "https://markets.com",
            logoColor: "#1a1a3e",
            logoGradient: "linear-gradient(135deg, #1a1a3e 0%, #2d1b69 100%)",
            skills: ["Test Automation", "Cypress", "JavaScript", "API Testing"]
        },
        {
            company: "The Plate",
            role: "Automation Engineer",
            date: "2022 — 2023",
            url: "#",
            logoColor: "#8a8a1a",
            logoText: "tp",
            logoRound: true,
            skills: ["Test Automation", "Playwright", "TypeScript", "Git"]
        },
        {
            company: "Finastra",
            role: "Automation Engineer",
            date: "2021",
            url: "https://finastra.com",
            logoColor: "#6d28d9",
            skills: ["Test Automation", "Selenium", "Java", "API Testing"]
        },
        {
            company: "SolarPlus",
            role: "Automation Engineer",
            date: "2019 — 2024",
            url: "#",
            logoColor: "#ea580c",
            skills: ["Test Automation", "Robot Framework", "Python", "Appium"]
        },
        {
            company: "AJTickets",
            role: "Automation Engineer",
            date: "2020 — 2025",
            url: "#",
            logoColor: "#dc2626",
            skills: ["Test Automation", "Selenium", "C#", "Test Cases"]
        },
        {
            company: "Cualia",
            role: "Automation Engineer",
            date: "2024 — 2025",
            url: "#",
            logoColor: "#0891b2",
            skills: ["Test Automation", "Playwright", "Python", "Healthcare Testing"]
        },
        {
            company: "Success Lion",
            role: "Test Engineer",
            date: "2020",
            url: "#",
            logoColor: "#ca8a04",
            skills: ["Test Automation", "Manual Testing", "Test Cases", "Bug Tracking"]
        },
        {
            company: "Loan Market AU",
            role: "Test Engineer",
            date: "2018",
            url: "#",
            logoColor: "#0d9488",
            skills: ["Test Automation", "Test Planning", "Manual Testing", "Test Cases"]
        },
        {
            company: "YesCourse",
            role: "Automation Engineer",
            date: "2017 — 2018",
            url: "#",
            logoColor: "#16a34a",
            skills: ["Test Automation", "Selenium", "Python", "Web Testing"]
        },
        {
            company: "AnalyticsFire",
            role: "Automation Engineer",
            date: "2017 — 2018",
            url: "#",
            logoColor: "#e11d48",
            skills: ["Test Automation", "Selenium", "Java", "Data Testing"]
        },
        {
            company: "BuyersDirect",
            role: "Customer Support",
            date: "2017 — 2018",
            url: "#",
            logoColor: "#2563eb",
            skills: ["Test Automation", "Customer Support", "Quality Assurance", "Bug Reporting"]
        },
        {
            company: "JustWines",
            role: "Customer Support",
            date: "2017 — 2018",
            url: "#",
            logoColor: "#9333ea",
            skills: ["Test Automation", "Manual Testing", "Issue Tracking", "Quality Control"]
        },
        {
            company: "AskMeFast",
            role: "Customer Support",
            date: "2013 — 2014",
            url: "#",
            logoColor: "#0284c7",
            skills: ["Test Automation", "User Testing", "Quality Assurance", "Support"]
        }
    ],

    // Education
    education: [
        {
            institution: "University of the East",
            degree: "BS Computer Engineering",
            date: "2009 — 2014",
            url: "#",
            logoImage: "UE-3d-seal.png"
        }
    ],

    // Skills - Organized by category
    skills: [
        {
            category: "Testing Frameworks",
            items: [
                "Selenium WebDriver",
                "Robot Framework",
                "Cypress",
                "Playwright",
                "Appium"
            ]
        },
        {
            category: "Programming Languages",
            items: [
                "Python",
                "Java",
                "C#",
                "R",
                "JavaScript"
            ]
        },
        {
            category: "Testing & Quality",
            items: [
                "Manual Testing",
                "Automated Testing",
                "Test Case Design",
                "Test Planning & Strategy",
                "Agile Methodologies"
            ]
        },
        {
            category: "Tools & Technologies",
            items: [
                "CI/CD",
                "Git",
                "JIRA",
                "AI & Prompt Engineering",
                "API Testing"
            ]
        }
    ],

    // Certifications - displayed as compact horizontal tiles
    certifications: [
        { title: "ISTQB CTFL", abbr: "ISTQB", color: "#2563eb", icon: "shield", row: 1 },
        { title: "AI Test Engineer", abbr: "AI", color: "#7c3aed", icon: "cpu", row: 1 },
        { title: "Claude Max User", abbr: "C", color: "#d97706", icon: "zap", row: 1 },
        { title: "SAFe", abbr: "SAFe", color: "#0d9488", icon: "layers", row: 2 },
        { title: "Lean Six Sigma", abbr: "6σ", color: "#ca8a04", icon: "sigma", row: 2 },
        { title: "KnowBe4 Security", abbr: "K4", color: "#dc2626", icon: "lock", row: 2 }
    ],

    // TestGenerator Pipeline Steps
    // TestGenerator Pipeline Steps
    // status: "pass" = green, "fail" = red, "idle" = gray (no run yet)
    testGeneratorSteps: [
        { step: 1, title: "Verify Jira Auth", status: "pass" },
        { step: 2, title: "Find Ticket", status: "pass" },
        { step: 3, title: "Review Ticket", status: "pass" },
        { step: 4, title: "Review Code", status: "pass" },
        { step: 5, title: "Draft Test Plan", status: "pass" },
        { step: 6, title: "Write Gherkin Steps", status: "pass" },
        { step: 7, title: "Write Automated Tests", status: "fail" },
        { step: 8, title: "Execute Tests", status: "idle" },
        { step: 9, title: "Determine Results", status: "idle" },
        { step: 10, title: "Post Results", status: "idle" },
        { step: 11, title: "Transition Ticket", status: "idle" }
    ],

    // Trainings & Workshops
    trainings: [
        {
            title: "Sustaining Innovations in TECH",
            description: "Technology, Education, Community and Human Development",
            date: "April 2019",
            location: "FEU - 6th Technofest"
        },
        {
            title: "Automation of Everyday Life",
            description: "University of the East - Caloocan Tech Talk",
            date: "March 2019",
            location: "UE Caloocan"
        }
    ]
};
