type Link = {
    name: string,
    link: string,
    ariaLabel: string,
}

type FooterLink = {
    name: string,
    link: string
    lists: Link[],
    ariaLabel: string
}

export const Links: FooterLink[] = [
    {
        name: "Integrations",
        link: "#",
        lists: [
            {
                name: "Windows Everywhere Integration",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Mac Everywhere Integration",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Chrome Extension (Firefox, Safari, Edge)",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Google Docs",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Microsoft Office",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Desktop App (Scrivener)",
                link: "#",
                ariaLabel: ""
            },
        ],
        ariaLabel: ""
    },
    {
        name: "Features",
        link: "#",
        lists: [
            {
                name: "All Features",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Grammar Checker",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Plagiarism Checker",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "For Teams",
                link: "#",
                ariaLabel: ""
            },
        ],
        ariaLabel: ""
    },
    {
        name: "Learn More",
        link: "#",
        lists: [
            {
                name: "Pricing",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Blog",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Grammar guide",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "ProWritingAid API",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Grammar Checker Component",
                link: "#",
                ariaLabel: ""
            },
        ],
        ariaLabel: ""
    },
    {
        name: "Company",
        link: "#",
        lists: [
            {
                name: "About Us",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Careers & Culture",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Affiliates",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Terms of Service",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Privacy Policy",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Cookie Policy",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "GDPR",
                link: "#",
                ariaLabel: ""
            },
            {
                name: "Sitemap",
                link: "#",
                ariaLabel: ""
            },
        ],
        ariaLabel: ""
    },
]