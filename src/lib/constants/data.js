export const blogCategories = [
    "All",
    "Growth",
    "Engineering",
    "Design",
    "Strategy",
    "Marketing",
];

export const blogPosts = [
    {
        slug: "scaling-startups-with-ai-powered-growth",
        title: "Scaling Startups with AI-Powered Growth Engines",
        excerpt:
            "How modern startups are leveraging artificial intelligence to automate customer acquisition and achieve 10x growth in record time.",
        category: "Growth",
        author: {
            name: "Arjun Mehta",
            role: "Growth Lead",
            avatar: "/images/avatar/avatar1.png",
        },
        date: "2026-02-10",
        readTime: "8 min read",
        image: "/images/services/marketing-growth.png",
        featured: true,
        tags: ["AI", "Growth", "Startups"],
        content: `
      <h2>The Rise of AI in Startup Growth</h2>
      <p>Artificial intelligence is no longer a luxury reserved for tech giants. Today, startups of all sizes are harnessing AI to build growth engines that compound traction at an unprecedented pace. From predictive analytics to automated outreach, the tools available are transforming how founders think about scaling.</p>
      
      <h2>Key Strategies for AI-Powered Growth</h2>
      <p>The most effective AI growth strategies combine three pillars: data-driven customer segmentation, automated lifecycle marketing, and predictive churn prevention. Together, these create a flywheel that accelerates acquisition while reducing cost per customer.</p>
      
      <h3>1. Intelligent Customer Segmentation</h3>
      <p>Machine learning models can analyze behavioral patterns across thousands of data points to identify your highest-value customer segments. This enables hyper-targeted messaging that resonates deeply with each audience cohort.</p>
      
      <h3>2. Automated Lifecycle Marketing</h3>
      <p>AI-powered workflows can trigger the right message at the right time, nurturing leads through your funnel with minimal manual intervention. The result? Higher conversion rates and a sales team that focuses only on qualified opportunities.</p>
      
      <h3>3. Predictive Analytics</h3>
      <p>By analyzing historical data, AI can forecast which customers are at risk of churning, which leads are most likely to convert, and which channels will deliver the highest ROI. This predictive power transforms decision-making from reactive to proactive.</p>
      
      <h2>Real-World Results</h2>
      <p>Startups implementing AI-powered growth engines are seeing remarkable results: 3-5x improvement in lead quality, 40% reduction in customer acquisition costs, and 2x faster time-to-revenue. The compound effect of these improvements creates an exponential growth curve that traditional methods simply cannot match.</p>
      
      <h2>Getting Started</h2>
      <p>The key to success is starting small and iterating fast. Begin with one high-impact use case — such as lead scoring or email personalization — measure the results, and expand from there. The most successful AI growth programs are built incrementally, with each iteration informed by real data.</p>
    `,
    },
    {
        slug: "building-design-systems-that-scale",
        title: "Building Design Systems That Actually Scale",
        excerpt:
            "A practical guide to creating component libraries and design tokens that grow with your product — without becoming a maintenance nightmare.",
        category: "Design",
        author: {
            name: "Priya Sharma",
            role: "Design Director",
            avatar: "/images/avatar/avatar2.png",
        },
        date: "2026-02-05",
        readTime: "12 min read",
        image: "/images/services/branding-ui-ux.png",
        featured: false,
        tags: ["Design Systems", "UI/UX", "Components"],
        content: `
      <h2>Why Design Systems Matter</h2>
      <p>A design system is more than a component library — it's the single source of truth that keeps product, engineering, and brand teams aligned as your company scales. Without one, teams drift apart, inconsistencies multiply, and every new feature takes longer to ship.</p>
      
      <h2>The Foundation: Design Tokens</h2>
      <p>Design tokens are the atomic building blocks of your system. Colors, spacing, typography, shadows — these abstract values create a consistent visual language that can be applied across platforms and products.</p>
      
      <h2>Building for Scale</h2>
      <p>The biggest mistake teams make is trying to build a comprehensive system from day one. Start with the components you use most frequently, document them thoroughly, and create a governance model that allows the system to evolve organically.</p>
    `,
    },
    {
        slug: "next-js-performance-optimization-guide",
        title: "Next.js Performance: The Complete Optimization Guide",
        excerpt:
            "From server components to edge caching, learn the techniques top engineering teams use to build blazing-fast Next.js applications.",
        category: "Engineering",
        author: {
            name: "Karthik Nair",
            role: "Staff Engineer",
            avatar: "/images/avatar/avatar3.png",
        },
        date: "2026-01-28",
        readTime: "15 min read",
        image: "/images/services/web-app-development.png",
        featured: false,
        tags: ["Next.js", "Performance", "React"],
        content: `
      <h2>Performance Is a Feature</h2>
      <p>In a world where users expect instant interactions, performance isn't just a technical concern — it's a competitive advantage. Studies show that every 100ms of latency costs 1% of revenue. For high-growth startups, that's a significant impact.</p>
      
      <h2>Server Components: The Game Changer</h2>
      <p>React Server Components fundamentally change how we think about rendering. By moving computation to the server, we can send less JavaScript to the client, resulting in faster page loads and better user experiences.</p>
      
      <h2>Edge Caching Strategies</h2>
      <p>Deploying your application to the edge brings your content closer to users. Combined with intelligent caching strategies, this can reduce Time to First Byte (TTFB) by 60-80% for global audiences.</p>
    `,
    },
    {
        slug: "gtm-strategy-for-saas-companies",
        title: "The Ultimate GTM Playbook for B2B SaaS in 2026",
        excerpt:
            "A step-by-step framework for launching and scaling your SaaS product, from initial positioning to channel strategy and pricing validation.",
        category: "Strategy",
        author: {
            name: "Sneha Reddy",
            role: "Strategy Partner",
            avatar: "/images/avatar/avatar1.png",
        },
        date: "2026-01-20",
        readTime: "10 min read",
        image: "/images/services/gtm-scaling.png",
        featured: false,
        tags: ["GTM", "SaaS", "B2B"],
        content: `
      <h2>The Modern GTM Challenge</h2>
      <p>The B2B SaaS landscape has never been more competitive. With thousands of new products launching every month, having a great product isn't enough — you need a great go-to-market strategy to cut through the noise.</p>
      
      <h2>Defining Your ICP</h2>
      <p>The foundation of any successful GTM strategy is a razor-sharp Ideal Customer Profile. This goes beyond demographics to include behavioral signals, pain points, and buying triggers that indicate high purchase intent.</p>
    `,
    },
    {
        slug: "content-marketing-compounding-returns",
        title: "Content Marketing: How to Build a Compounding Growth Engine",
        excerpt:
            "Why the best content strategies focus on compounding returns rather than viral moments, and how to build one from scratch.",
        category: "Marketing",
        author: {
            name: "Arjun Mehta",
            role: "Growth Lead",
            avatar: "/images/avatar/avatar1.png",
        },
        date: "2026-01-15",
        readTime: "7 min read",
        image: "/images/services/marketing-growth.png",
        featured: false,
        tags: ["Content", "SEO", "Marketing"],
        content: `
      <h2>The Compounding Content Model</h2>
      <p>Most content strategies fail because they chase virality instead of building foundations. The most successful B2B content programs focus on creating evergreen assets that compound traffic over months and years.</p>
      
      <h2>Pillar-Cluster Architecture</h2>
      <p>Organize your content around topic clusters anchored by comprehensive pillar pages. This approach signals topical authority to search engines while providing clear navigation paths for readers.</p>
    `,
    },
    {
        slug: "fundraising-narrative-that-converts",
        title: "Crafting a Fundraising Narrative That Converts Belief into Backing",
        excerpt:
            "How top founders structure their pitch decks and investor conversations to close rounds faster, with real examples and frameworks.",
        category: "Strategy",
        author: {
            name: "Sneha Reddy",
            role: "Strategy Partner",
            avatar: "/images/avatar/avatar2.png",
        },
        date: "2026-01-08",
        readTime: "9 min read",
        image: "/images/services/investor-support.png",
        featured: false,
        tags: ["Fundraising", "Pitch Decks", "Investors"],
        content: `
      <h2>The Anatomy of a Winning Pitch</h2>
      <p>The best pitches don't just present data — they tell a story that makes investors feel the inevitability of your success. This requires a careful blend of narrative craft and strategic positioning.</p>
      
      <h2>The Three-Act Structure</h2>
      <p>Every great fundraising narrative follows a three-act structure: the world as it is (the problem), the world as it could be (your vision), and the bridge (your product and team).</p>
    `,
    },
    {
        slug: "micro-animations-that-delight-users",
        title: "Micro-Animations That Delight: A Developer's Guide to Framer Motion",
        excerpt:
            "Master the art of subtle, purposeful animations that elevate your UI from functional to unforgettable using Framer Motion.",
        category: "Design",
        author: {
            name: "Priya Sharma",
            role: "Design Director",
            avatar: "/images/avatar/avatar2.png",
        },
        date: "2025-12-28",
        readTime: "11 min read",
        image: "/images/services/branding-ui-ux.png",
        featured: false,
        tags: ["Framer Motion", "Animations", "UI"],
        content: `
      <h2>Why Micro-Animations Matter</h2>
      <p>Micro-animations are the secret ingredient that separates good interfaces from great ones. They provide feedback, guide attention, and create a sense of polish that users feel even if they can't articulate why.</p>
      
      <h2>Principles of Great Motion Design</h2>
      <p>The best animations follow three principles: they are purposeful (serving a clear UX goal), proportional (matching the importance of the action), and performant (running at 60fps without jank).</p>
    `,
    },
    {
        slug: "react-server-components-deep-dive",
        title: "React Server Components: A Deep Dive for Production Apps",
        excerpt:
            "Everything you need to know about RSC patterns, data fetching strategies, and common pitfalls when building production-grade applications.",
        category: "Engineering",
        author: {
            name: "Karthik Nair",
            role: "Staff Engineer",
            avatar: "/images/avatar/avatar3.png",
        },
        date: "2025-12-20",
        readTime: "14 min read",
        image: "/images/services/web-app-development.png",
        featured: false,
        tags: ["React", "RSC", "Next.js"],
        content: `
      <h2>Understanding the RSC Mental Model</h2>
      <p>React Server Components represent a paradigm shift in how we build React applications. Instead of shipping all your component code to the browser, RSC allows you to keep server-only logic on the server while streaming interactive UI to the client.</p>
      
      <h2>Data Fetching Patterns</h2>
      <p>With RSC, data fetching becomes a first-class citizen of your component tree. You can fetch data directly in your components using async/await, eliminating the need for useEffect and loading states in many cases.</p>
    `,
    },
    {
        slug: "conversion-rate-optimization-playbook",
        title: "The CRO Playbook: Turning Traffic into Revenue",
        excerpt:
            "A data-driven approach to optimizing every stage of your funnel, from landing page to checkout, backed by results from 50+ experiments.",
        category: "Growth",
        author: {
            name: "Arjun Mehta",
            role: "Growth Lead",
            avatar: "/images/avatar/avatar1.png",
        },
        date: "2025-12-12",
        readTime: "10 min read",
        image: "/images/services/marketing-growth.png",
        featured: false,
        tags: ["CRO", "Conversion", "Growth"],
        content: `
      <h2>The Science of Conversion</h2>
      <p>Conversion rate optimization isn't about guessing what works — it's about building a systematic testing framework that continuously improves your funnel performance based on real user behavior data.</p>
      
      <h2>High-Impact Test Areas</h2>
      <p>Not all experiments are created equal. Focus your testing efforts on the highest-leverage areas: value proposition clarity, social proof placement, friction reduction in forms, and pricing presentation.</p>
    `,
    },
];

export const getBlogPostBySlug = (slug) =>
    blogPosts.find((post) => post.slug === slug);

// ─── NEWS DATA ────────────────────────────────────────────────────────────────

export const newsCategories = [
    "All",
    "Company",
    "Industry",
    "Partnerships",
    "Awards",
    "Product",
];

export const newsPosts = [
    {
        slug: "snappy-tales-series-a-funding",
        title: "Snappy Tales Raises $12M Series A to Accelerate Growth Platform",
        excerpt:
            "The funding round was led by Elevation Capital, with participation from existing investors. The capital will fuel product innovation and global expansion.",
        category: "Company",
        date: "2026-02-12",
        readTime: "4 min read",
        image: "/images/services/investor-support.png",
        featured: true,
        source: "TechCrunch",
        tags: ["Funding", "Series A", "Growth"],
        content: `
      <h2>A Milestone for Snappy Tales</h2>
      <p>Snappy Tales, the full-stack digital growth studio, today announced the close of a $12 million Series A funding round led by Elevation Capital. The round also saw participation from returning investors Y Combinator and several prominent angel investors from the SaaS ecosystem.</p>
      
      <h2>Fueling the Next Phase</h2>
      <p>The capital will be deployed across three strategic priorities: expanding the product engineering team, launching an AI-powered growth analytics platform, and establishing a presence in three new international markets by Q4 2026.</p>
      
      <h2>What This Means for Clients</h2>
      <p>"This funding validates our approach of combining world-class product engineering with data-driven growth strategy," said the CEO. "Our clients will see immediate benefits through deeper analytics, faster delivery cycles, and expanded service capabilities."</p>
    `,
    },
    {
        slug: "partnership-with-google-cloud",
        title: "Snappy Tales Becomes Official Google Cloud Partner for Startups",
        excerpt:
            "The partnership gives Snappy Tales clients access to $100K in Google Cloud credits and priority technical support for cloud-native applications.",
        category: "Partnerships",
        date: "2026-02-08",
        readTime: "3 min read",
        image: "/images/services/web-app-development.png",
        featured: false,
        source: "Official Announcement",
        tags: ["Google Cloud", "Partnership", "Infrastructure"],
        content: `
      <h2>Strategic Cloud Partnership</h2>
      <p>Snappy Tales has been selected as an official Google Cloud Partner for Startups, joining a select group of technology companies recognized for their expertise in cloud-native application development.</p>
      
      <h2>Benefits for Founders</h2>
      <p>Through this partnership, Snappy Tales clients building on Google Cloud infrastructure can now access up to $100,000 in cloud credits, direct engineering support from Google, and early access to new AI/ML services.</p>
    `,
    },
    {
        slug: "top-50-fastest-growing-agencies-2026",
        title: "Snappy Tales Named in Top 50 Fastest-Growing Digital Agencies",
        excerpt:
            "Recognized by Agency Accelerator for 340% year-over-year revenue growth and exceptional client retention rates across 2025.",
        category: "Awards",
        date: "2026-01-30",
        readTime: "3 min read",
        image: "/images/services/gtm-scaling.png",
        featured: false,
        source: "Agency Accelerator",
        tags: ["Awards", "Recognition", "Growth"],
        content: `
      <h2>Industry Recognition</h2>
      <p>Snappy Tales has been named one of the Top 50 Fastest-Growing Digital Agencies by Agency Accelerator, the leading benchmarking platform for the digital services industry.</p>
      
      <h2>Key Metrics</h2>
      <p>The recognition was based on verified financials showing 340% revenue growth, a 96% client retention rate, and a Net Promoter Score of 78 — all metrics that placed Snappy Tales in the top percentile of agencies globally.</p>
    `,
    },
    {
        slug: "ai-automation-tool-launch",
        title: "Introducing SnapFlow: Our AI-Powered Workflow Automation Tool",
        excerpt:
            "SnapFlow uses LLMs to automate repetitive business workflows, saving teams an average of 15 hours per week on manual processes.",
        category: "Product",
        date: "2026-01-22",
        readTime: "5 min read",
        image: "/images/services/marketing-growth.png",
        featured: false,
        source: "Product Hunt",
        tags: ["AI", "Automation", "Product Launch"],
        content: `
      <h2>Meet SnapFlow</h2>
      <p>Today we're launching SnapFlow, an AI-powered workflow automation tool built for startup teams. SnapFlow connects to your existing tools — Slack, Notion, Linear, HubSpot — and uses large language models to automate repetitive tasks that drain your team's productivity.</p>
      
      <h2>Real Impact</h2>
      <p>In beta testing with 50 startup teams, SnapFlow automated an average of 15 hours of manual work per week per team, with zero configuration beyond connecting existing accounts.</p>
    `,
    },
    {
        slug: "india-saas-market-outlook-2026",
        title: "India's SaaS Market to Hit $50B by 2028 — What Founders Need to Know",
        excerpt:
            "A deep analysis of the booming Indian SaaS landscape, key trends, and what it means for founders building global products from India.",
        category: "Industry",
        date: "2026-01-18",
        readTime: "6 min read",
        image: "/images/services/gtm-scaling.png",
        featured: false,
        source: "Snappy Tales Research",
        tags: ["SaaS", "India", "Market Analysis"],
        content: `
      <h2>The Indian SaaS Boom</h2>
      <p>India's software-as-a-service industry is on track to reach $50 billion in annual revenue by 2028, according to a new report from NASSCOM. This represents a 4x increase from 2024 levels, driven by global demand for cost-effective, high-quality software solutions.</p>
      
      <h2>What This Means for Founders</h2>
      <p>For founders building from India, this growth creates unprecedented opportunities — but also intensifying competition. The winners will be those who combine world-class product execution with deep market understanding.</p>
    `,
    },
    {
        slug: "new-delhi-office-expansion",
        title: "Snappy Tales Opens New Delhi Innovation Hub",
        excerpt:
            "The 15,000 sq ft space will house the product engineering and design teams, with capacity for 120 team members and a dedicated client collaboration area.",
        category: "Company",
        date: "2026-01-10",
        readTime: "3 min read",
        image: "/images/services/branding-ui-ux.png",
        featured: false,
        source: "Official Announcement",
        tags: ["Office", "Expansion", "Team"],
        content: `
      <h2>Growing the Team</h2>
      <p>As part of our commitment to building a world-class delivery capability, we're excited to announce the opening of our new Innovation Hub in New Delhi's Connaught Place district.</p>
      
      <h2>Designed for Collaboration</h2>
      <p>The 15,000 square foot space features open collaboration zones, dedicated sprint rooms, a content studio, and a showcase gallery highlighting our best client work. It's designed to foster the creative energy that drives our best output.</p>
    `,
    },
];

export const getNewsPostBySlug = (slug) =>
    newsPosts.find((post) => post.slug === slug);

// ─── EBOOKS DATA ──────────────────────────────────────────────────────────────

export const ebookCategories = [
    "All",
    "Growth",
    "Engineering",
    "Design",
    "Strategy",
    "Fundraising",
];

export const ebooks = [
    {
        slug: "ultimate-startup-scaling-playbook",
        title: "The Ultimate Startup Scaling Playbook",
        excerpt:
            "A 60-page guide covering everything from product-market fit to Series A, with frameworks, templates, and real founder interviews.",
        category: "Growth",
        author: {
            name: "Snappy Tales Team",
            role: "Research & Strategy",
            avatar: "/images/avatar/avatar1.png",
        },
        date: "2026-02-01",
        pages: "60 pages",
        image: "/images/services/gtm-scaling.png",
        featured: true,
        downloadUrl: "#",
        tags: ["Scaling", "PMF", "Series A"],
        content: `
      <h2>About This E-Book</h2>
      <p>Scaling a startup is one of the hardest challenges in business. This comprehensive guide distills lessons from hundreds of successful startups into actionable frameworks you can apply today.</p>
      
      <h2>What's Inside</h2>
      <p>Across 60 pages, you'll find frameworks for validating product-market fit, building your first growth engine, hiring your leadership team, and navigating the fundraising landscape from seed to Series A.</p>
      
      <h3>Chapter 1: Validating Product-Market Fit</h3>
      <p>Before you can scale, you need to be sure you're building something people want. This chapter covers quantitative and qualitative methods for measuring PMF, including the Sean Ellis test, retention cohort analysis, and customer interview frameworks.</p>
      
      <h3>Chapter 2: Building Your Growth Engine</h3>
      <p>Once you have PMF, the next challenge is systematic growth. We cover the three engines of growth (viral, sticky, and paid), how to identify which one fits your business, and how to build repeatable processes around it.</p>
      
      <h3>Chapter 3: The Fundraising Roadmap</h3>
      <p>Raising capital is a full-time job. This chapter provides a week-by-week timeline for running a successful fundraise, from building your target list to closing the round.</p>
    `,
    },
    {
        slug: "design-systems-handbook",
        title: "Design Systems Handbook: From Zero to Production",
        excerpt:
            "How to build, document, and govern a design system that scales across teams and products — with Figma templates included.",
        category: "Design",
        author: {
            name: "Priya Sharma",
            role: "Design Director",
            avatar: "/images/avatar/avatar2.png",
        },
        date: "2026-01-25",
        pages: "45 pages",
        image: "/images/services/branding-ui-ux.png",
        featured: false,
        downloadUrl: "#",
        tags: ["Design Systems", "Figma", "Components"],
        content: `
      <h2>About This E-Book</h2>
      <p>A design system is the most powerful tool for shipping consistent, high-quality products at scale. This handbook walks you through every step of building one, from your first tokens to a fully governed component library.</p>
      
      <h2>What's Inside</h2>
      <p>Practical guidance on token architecture, component API design, documentation strategies, and governance models. Includes downloadable Figma templates for each chapter.</p>
    `,
    },
    {
        slug: "nextjs-production-architecture",
        title: "Next.js Production Architecture: Patterns & Best Practices",
        excerpt:
            "A technical deep dive into building high-performance, maintainable Next.js applications at scale with real-world architecture patterns.",
        category: "Engineering",
        author: {
            name: "Karthik Nair",
            role: "Staff Engineer",
            avatar: "/images/avatar/avatar3.png",
        },
        date: "2026-01-15",
        pages: "55 pages",
        image: "/images/services/web-app-development.png",
        featured: false,
        downloadUrl: "#",
        tags: ["Next.js", "Architecture", "Performance"],
        content: `
      <h2>About This E-Book</h2>
      <p>Building a Next.js application that works in development is easy. Building one that performs at scale in production is an entirely different challenge. This guide covers the architecture patterns, performance techniques, and operational practices used by top engineering teams.</p>
      
      <h2>What's Inside</h2>
      <p>Server component strategy, data fetching patterns, caching layers, edge deployment, monitoring and observability, and CI/CD pipeline design — all with code examples from real production applications.</p>
    `,
    },
    {
        slug: "gtm-strategy-framework",
        title: "The GTM Strategy Framework for B2B SaaS",
        excerpt:
            "A step-by-step framework for launching your product, building pipeline, and achieving repeatable revenue — used by 100+ SaaS companies.",
        category: "Strategy",
        author: {
            name: "Sneha Reddy",
            role: "Strategy Partner",
            avatar: "/images/avatar/avatar1.png",
        },
        date: "2026-01-05",
        pages: "40 pages",
        image: "/images/services/gtm-scaling.png",
        featured: false,
        downloadUrl: "#",
        tags: ["GTM", "SaaS", "Revenue"],
        content: `
      <h2>About This E-Book</h2>
      <p>Going to market in B2B SaaS requires more than a great product. This framework provides a structured approach to defining your ICP, crafting your value proposition, selecting channels, and building the revenue engine that scales.</p>
      
      <h2>What's Inside</h2>
      <p>ICP definition worksheets, messaging architecture templates, channel selection matrix, pricing experimentation playbook, and a 90-day launch plan template.</p>
    `,
    },
    {
        slug: "pitch-deck-masterclass",
        title: "Pitch Deck Masterclass: The Founder's Guide to Fundraising",
        excerpt:
            "Deconstructing 20 successful pitch decks to reveal the narrative patterns, data presentation strategies, and design principles that win investor conviction.",
        category: "Fundraising",
        author: {
            name: "Sneha Reddy",
            role: "Strategy Partner",
            avatar: "/images/avatar/avatar2.png",
        },
        date: "2025-12-20",
        pages: "50 pages",
        image: "/images/services/investor-support.png",
        featured: false,
        downloadUrl: "#",
        tags: ["Pitch Decks", "Fundraising", "Investors"],
        content: `
      <h2>About This E-Book</h2>
      <p>Your pitch deck is often the first impression investors have of your company. This masterclass deconstructs 20 successful pitch decks — from seed to Series C — revealing the storytelling techniques, data visualization strategies, and design principles that earn conviction.</p>
      
      <h2>What's Inside</h2>
      <p>Slide-by-slide breakdowns of winning decks, the psychology of investor decision-making, common mistakes to avoid, and downloadable templates you can customize for your own raise.</p>
    `,
    },
    {
        slug: "full-stack-growth-marketing",
        title: "Full-Stack Growth Marketing: From Acquisition to Retention",
        excerpt:
            "A comprehensive guide to building growth systems that compound — covering paid media, content, lifecycle, and analytics.",
        category: "Growth",
        author: {
            name: "Arjun Mehta",
            role: "Growth Lead",
            avatar: "/images/avatar/avatar1.png",
        },
        date: "2025-12-10",
        pages: "48 pages",
        image: "/images/services/marketing-growth.png",
        featured: false,
        downloadUrl: "#",
        tags: ["Growth", "Marketing", "Retention"],
        content: `
      <h2>About This E-Book</h2>
      <p>Growth marketing is no longer just about acquisition. The most successful growth programs optimize the entire customer lifecycle — from first touch to loyal advocate. This guide shows you how to build a full-stack growth system.</p>
      
      <h2>What's Inside</h2>
      <p>Acquisition channel strategies, content marketing blueprints, email lifecycle sequences, retention frameworks, and analytics dashboards — all designed to create compounding growth.</p>
    `,
    },
];

export const getEbookBySlug = (slug) =>
    ebooks.find((ebook) => ebook.slug === slug);
