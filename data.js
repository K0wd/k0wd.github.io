// Portfolio Data - Easy to update and extend
// Simply add new items to the arrays below

const portfolioData = {
    // Personal Information
    personal: {
        name: "Kim E. Bandeleon",
        title: "Quality and Automation Engineer",
        location: "Marilao, Bulacan",
        email: "kbandeleon@gmail.com",
        phone: "09778264301",
        description: "I'm a Quality and Automation Engineer living in Marilao, Bulacan, currently working at AtMail."
    },

    // Social Links
    social: [
        {
            name: "Email",
            url: "mailto:kbandeleon@gmail.com",
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
        // Add more projects here...
    ],

    // Work Experience - Add your work history here
    work: [
        {
            company: "AtMail",
            role: "Senior Quality Engineer",
            date: "2023 — Present",
            url: "https://atmail.com",
            logo: null,
            skills: ["Test Automation", "Selenium", "Python", "Test Strategy"]
        },
        {
            company: "Nokia",
            role: "Product Owner",
            date: "2019 — 2024",
            url: "https://nokia.com",
            logo: null,
            skills: ["Test Automation", "Product Management", "Agile", "Scrum"]
        },
        {
            company: "Markets.com",
            role: "Automation Engineer",
            date: "2023 — 2024",
            url: "https://markets.com",
            logo: null,
            skills: ["Test Automation", "Cypress", "JavaScript", "API Testing"]
        },
        {
            company: "The Plate",
            role: "Automation Engineer",
            date: "2022 — 2023",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Playwright", "TypeScript", "Git"]
        },
        {
            company: "Finastra",
            role: "Automation Engineer",
            date: "2021",
            url: "https://finastra.com",
            logo: null,
            skills: ["Test Automation", "Selenium", "Java", "API Testing"]
        },
        {
            company: "SolarPlus",
            role: "Automation Engineer",
            date: "2019 — 2024",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Robot Framework", "Python", "Appium"]
        },
        {
            company: "AJTickets",
            role: "Automation Engineer",
            date: "2020 — 2025",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Selenium", "C#", "Test Cases"]
        },
        {
            company: "Cualia",
            role: "Automation Engineer",
            date: "2024 — 2025",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Playwright", "Python", "Healthcare Testing"]
        },
        {
            company: "Success Lion",
            role: "Test Engineer",
            date: "2020",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Manual Testing", "Test Cases", "Bug Tracking"]
        },
        {
            company: "Loan Market AU",
            role: "Test Engineer",
            date: "2018",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Test Planning", "Manual Testing", "Test Cases"]
        },
        {
            company: "YesCourse",
            role: "Automation Engineer",
            date: "2017 — 2018",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Selenium", "Python", "Web Testing"]
        },
        {
            company: "AnalyticsFire",
            role: "Automation Engineer",
            date: "2017 — 2018",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Selenium", "Java", "Data Testing"]
        },
        {
            company: "BuyersDirect",
            role: "Customer Support",
            date: "2017 — 2018",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Customer Support", "Quality Assurance", "Bug Reporting"]
        },
        {
            company: "JustWines",
            role: "Customer Support",
            date: "2017 — 2018",
            url: "#",
            logo: null,
            skills: ["Test Automation", "Manual Testing", "Issue Tracking", "Quality Control"]
        },
        {
            company: "AskMeFast",
            role: "Customer Support",
            date: "2013 — 2014",
            url: "#",
            logo: null,
            skills: ["Test Automation", "User Testing", "Quality Assurance", "Support"]
        }
    ],

    // Education
    education: [
        {
            institution: "University of the East",
            degree: "Bachelor of Science Major in Computer Engineering",
            date: "2009 — 2014",
            url: "#"
        },
        {
            institution: "St. Benedict School",
            degree: "Secondary Education",
            date: "2006 — 2009",
            url: "#"
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

    // Certifications
    certifications: [
        {
            title: "ISTQB CTFL",
            description: "Certified Tester Foundation Level",
            date: "2018",
            url: "#",
            issuer: "ISTQB"
        },
        {
            title: "SAFe Practitioner",
            description: "Scaled Agile Framework",
            date: "2019",
            url: "#",
            issuer: "Scaled Agile"
        },
        {
            title: "Lean Six Sigma Orange Belt",
            description: "Process Improvement",
            date: "2018",
            url: "#",
            issuer: "Six Sigma"
        }
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
