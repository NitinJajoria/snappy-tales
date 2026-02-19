export interface CaseStudyMetric {
    label: string;
    value: string;
    change: string;
    icon?: string;
}

export interface CaseStudyChallenge {
    title: string;
    description: string;
    icon?: string;
}

export interface CaseStudySolution {
    title: string;
    description: string;
    details?: string[];
}

export interface CaseStudy {
    slug: string;
    title: string;
    client: string;
    industry: string;
    category: 'Digital Marketing' | 'Web & Martech' | 'Branding';
    excerpt: string;
    featuredImage: string;
    heroImage: string;
    images: string[];
    tags: string[];

    // About section
    about: {
        description: string;
        industry: string;
        goals: string[];
    };

    // Challenges section
    challenges: CaseStudyChallenge[];

    // Solution section
    solution: {
        overview: string;
        approach: CaseStudySolution[];
        technologies?: string[];
    };

    // ROI/Results section
    roi: {
        title: string;
        subtitle: string;
        primaryMetric: string;
        primaryMetricValue: string;
        description: string;
        result: string;
        caseStudyLabel: string;
    };

    // Detailed results
    results: {
        metrics: CaseStudyMetric[];
        description: string;
        highlights: string[];
    };

    // Campaign performance
    campaignPerformance?: {
        tableData: Array<{
            metric: string;
            before: string;
            after: string;
            change: string;
        }>;
    };

    // Road ahead
    roadAhead: {
        title: string;
        initiatives: Array<{
            title: string;
            description: string;
            icon?: string;
        }>;
    };
}

// Sample case studies data
export const caseStudies: CaseStudy[] = [
    {
        slug: 'ecommerce-marketplace-transformation',
        title: 'E-commerce Marketplace',
        client: 'Global Retail Inc',
        industry: 'E-Commerce',
        category: 'Web & Martech',
        excerpt: 'Improved ROAS by 573% for a leading e-commerce marketplace through strategic digital transformation and optimized customer acquisition.',
        featuredImage: '/MacBookCapital.png',
        heroImage: '/MacBookCapital.png',
        images: ['/MacBookCapital.png', '/project2.png'],
        tags: ['E-Commerce', 'UI/UX Design', 'Branding', 'Figma'],

        about: {
            description: 'A leading e-commerce marketplace connecting buyers and sellers across multiple categories. With millions of monthly visitors, the client needed to optimize their digital advertising strategy to improve profitability while scaling customer acquisition.',
            industry: 'E-Commerce & Retail',
            goals: [
                'Reduce cost per acquisition (CPA)',
                'Improve return on ad spend (ROAS)',
                'Increase conversion rate',
                'Scale traffic without compromising profitability'
            ]
        },

        challenges: [
            {
                title: 'Low return on ad spend (ROAS) from existing campaigns',
                description: 'Previous ROAS of 0.87% was unsustainable for growth',
                icon: '📉'
            },
            {
                title: 'Poor audience targeting leading to wasted ad budget',
                description: 'Generic targeting resulted in low-intent traffic and poor conversion',
                icon: '🎯'
            },
            {
                title: 'Inefficient campaign structure across multiple platforms',
                description: 'Fragmented approach without unified strategy',
                icon: '🔧'
            },
            {
                title: 'Lack of proper conversion tracking and attribution',
                description: 'Unable to identify which channels drove actual revenue',
                icon: '📊'
            }
        ],

        solution: {
            overview: 'A comprehensive digital advertising transformation approach combining data-driven insights with platform optimization.',
            approach: [
                {
                    title: 'Advanced Audience Analytics',
                    description: 'Conducted deep audience research to identify high-value segments based on customer behavior and purchase patterns.',
                    details: [
                        'Customer journey mapping',
                        'Behavioral segmentation',
                        'Lookalike audience creation'
                    ]
                },
                {
                    title: 'Custom Lookalike Audiences',
                    description: 'Built data-driven lookalike audiences targeting high-intent buyers across platforms.',
                },
                {
                    title: 'Campaign Restructuring',
                    description: 'Redesigned campaign architecture with proper segmentation and scalable structure.',
                },
                {
                    title: 'Enhanced Tracking',
                    description: 'Implemented enhanced tracking and attribution across all touchpoints.',
                },
                {
                    title: 'Mobile-First Strategy',
                    description: 'Optimized campaigns for mobile-first experience and conversion.',
                },
                {
                    title: 'Dynamic Creative Testing',
                    description: 'Set up systematic A/B testing for creative assets and messaging.',
                }
            ],
            technologies: ['Google Ads', 'Meta Ads', 'Google Analytics 4', 'Tag Manager', 'Looker Studio']
        },

        roi: {
            title: 'E-commerce Marketplace',
            subtitle: 'Improved ROAS by 573%',
            primaryMetric: '↑ 80% CPR REDUCTION',
            primaryMetricValue: '80%',
            description: 'Our client, a leading e-commerce marketplace connecting buyers and sellers across multiple categories. With millions of monthly visitors, the client needed to optimize their digital advertising strategy to improve profitability while scaling customer acquisition.',
            result: "Launched with strategic targeting aimed at engaging high-intent buyers.",
            caseStudyLabel: 'Client'
        },

        results: {
            metrics: [
                { label: 'Revenue Growth', value: '342%', change: '+289%' },
                { label: 'ROAS Increase', value: '573%', change: '+486%' },
                { label: 'Conversion Rate', value: '4.85%', change: '+320%' },
                { label: 'Cost Per Acquisition', value: '-62%', change: 'Decreased' }
            ],
            description: 'Exceptional performance improvements across all key metrics',
            highlights: [
                'Scaled monthly ad spend from $5,000 to $135,000 while maintaining profitability',
                'Generated 5.85x return on every dollar spent',
                'Reduced customer acquisition cost by 62%',
                'Increased overall revenue by 342%'
            ]
        },

        campaignPerformance: {
            tableData: [
                { metric: 'Total Ad Spend', before: '$125,000', after: '$135,000', change: '+8%' },
                { metric: 'Total Revenue', before: '$148,750', after: '$789,750', change: '+430%' },
                { metric: 'ROAS', before: '0.87x', after: '5.85x', change: '+573%' },
                { metric: 'Conversions', before: '1,650', after: '4,648', change: '+182%' },
                { metric: 'Cost Per Acquisition', before: '$75.76', after: '$29.05', change: '-62%' },
                { metric: 'Click Through Rate', before: '1.2%', after: '3.8%', change: '+217%' }
            ]
        },

        roadAhead: {
            title: 'The Road Ahead',
            initiatives: [
                {
                    title: 'International Expansion',
                    description: 'Expanding successful strategies to new markets and regions.',
                    icon: '🌍'
                },
                {
                    title: 'Advanced Retargeting',
                    description: 'Implementing AI-powered retargeting to re-engage customer segments.',
                    icon: '🔄'
                },
                {
                    title: 'AI-Powered Optimization',
                    description: 'Leveraging machine learning for predictive bidding and creative optimization.',
                    icon: '🤖'
                }
            ]
        }
    },
    {
        slug: 'saas-product-launch-campaign',
        title: 'SaaS Product Launch',
        client: 'TechFlow Solutions',
        industry: 'B2B SaaS',
        category: 'Digital Marketing',
        excerpt: '50+ more registrations and 3x ROI on business partner program for a global tech leader launching premium SaaS platform.',
        featuredImage: '/project2.png',
        heroImage: '/project2.png',
        images: ['/project2.png', '/MacBookSafety.png'],
        tags: ['SaaS', 'Lead Generation', 'B2B Marketing', 'Content Strategy'],

        about: {
            description: 'A global technology leader building a reputation for innovation across software, hardware, and services needed to launch their new premium SaaS platform to enterprise customers.',
            industry: 'B2B Technology & SaaS',
            goals: [
                'Generate qualified enterprise leads',
                'Build brand awareness in target market',
                'Achieve 3x ROI on partner program',
                'Establish thought leadership'
            ]
        },

        challenges: [
            {
                title: 'Highly competitive SaaS market with established players',
                description: 'Needed to differentiate from well-funded competitors',
                icon: '⚔️'
            },
            {
                title: 'Long B2B sales cycles requiring sustained engagement',
                description: 'Average 6-9 month sales cycle for enterprise deals',
                icon: '⏱️'
            },
            {
                title: 'Limited brand recognition in enterprise segment',
                description: 'Known for consumer products but not enterprise solutions',
                icon: '🏢'
            },
            {
                title: 'Complex product requiring education and nurturing',
                description: 'Technical product needing multi-touch attribution',
                icon: '🎓'
            }
        ],

        solution: {
            overview: 'A comprehensive B2B marketing approach combining content marketing, strategic partnerships, and targeted advertising to build awareness and generate qualified leads.',
            approach: [
                {
                    title: 'Audience Research & Segmentation',
                    description: 'Identified and profiled target decision-makers across enterprise segments.',
                },
                {
                    title: 'Thought Leadership Campaign',
                    description: 'Developed content-driven campaigns establishing industry expertise.',
                },
                {
                    title: 'Partner Enablement Program',
                    description: 'Built co-marketing initiatives with strategic technology partners.',
                },
                {
                    title: 'Account-Based Marketing',
                    description: 'Targeted high-value accounts with personalized campaigns.',
                },
                {
                    title: 'Marketing Automation',
                    description: 'Implemented lead nurturing workflows for sustained engagement.',
                },
                {
                    title: 'Performance Tracking',
                    description: 'Set up comprehensive attribution and ROI measurement.',
                }
            ],
            technologies: ['LinkedIn Ads', 'HubSpot', 'Google Ads', 'Salesforce', 'Marketo']
        },

        roi: {
            title: 'Global Tech Leader',
            subtitle: '50+ More Registrations, 3x ROI on Business Partner Program',
            primaryMetric: '↑ 80% CPR REDUCTION',
            primaryMetricValue: '80%',
            description: 'Our client, a global technology leader, built a reputation for innovation across software, hardware, and services. Our premium SaaS platform campaign combines high performance with modern B2B marketing strategies.',
            result: 'Launched targeting high-intent enterprise buyers with aim of building sustainable pipeline.',
            caseStudyLabel: 'Agency'
        },

        results: {
            metrics: [
                { label: 'Lead Growth', value: '285%', change: '+185%' },
                { label: 'Partner ROI', value: '3x', change: '+200%' },
                { label: 'Registration Increase', value: '50+', change: 'Per month' },
                { label: 'Cost Per Lead', value: '-58%', change: 'Decreased' }
            ],
            description: 'Strong performance across lead generation and partner initiatives',
            highlights: [
                'Generated 50+ qualified enterprise registrations per month',
                'Achieved 3x ROI on business partner program',
                'Reduced cost per lead by 58%',
                'Built pipeline of $2.4M in qualified opportunities'
            ]
        },

        roadAhead: {
            title: 'The Road Ahead',
            initiatives: [
                {
                    title: 'Global Market Expansion',
                    description: 'Scaling successful strategies to EMEA and APAC regions.',
                    icon: '🌏'
                },
                {
                    title: 'Channel Partner Growth',
                    description: 'Expanding partner ecosystem for indirect revenue streams.',
                    icon: '🤝'
                },
                {
                    title: 'Marketing Automation Enhancement',
                    description: 'Advanced personalization and AI-driven nurturing.',
                    icon: '⚡'
                }
            ]
        }
    },
    {
        slug: 'digital-agency-website-redesign',
        title: 'Digital Agency Rebrand',
        client: 'Creative Minds Agency',
        industry: 'Marketing & Advertising',
        category: 'Web & Martech',
        excerpt: 'Complete website redesign and rebrand for a digital agency resulting in 156% increase in quality leads and 220% improvement in engagement.',
        featuredImage: '/MacBookSafety.png',
        heroImage: '/MacBookSafety.png',
        images: ['/MacBookSafety.png', '/project4.png'],
        tags: ['Web Design', 'UI/UX', 'Branding', 'WordPress', 'SEO'],

        about: {
            description: 'An established digital marketing agency needed a complete website overhaul to better reflect their creative capabilities and attract high-value clients in a competitive market.',
            industry: 'Marketing & Creative Services',
            goals: [
                'Modernize brand identity and website',
                'Increase inbound lead quality',
                'Improve user engagement and time on site',
                'Showcase portfolio and capabilities effectively'
            ]
        },

        challenges: [
            {
                title: 'Outdated website failing to showcase creative expertise',
                description: 'Old design did not reflect the agency\'s premium positioning',
                icon: '🎨'
            },
            {
                title: 'High bounce rate and low engagement metrics',
                description: 'Average session duration under 45 seconds',
                icon: '⚠️'
            },
            {
                title: 'Poor mobile experience affecting lead generation',
                description: '65% of traffic on mobile with 78% bounce rate',
                icon: '📱'
            },
            {
                title: 'Unclear value proposition and service positioning',
                description: 'Visitors struggled to understand service offerings',
                icon: '💡'
            }
        ],

        solution: {
            overview: 'A complete digital transformation including brand refresh, UX-driven website redesign, and performance optimization.',
            approach: [
                {
                    title: 'Brand Strategy Workshop',
                    description: 'Refined positioning, messaging, and visual identity to align with target market.',
                },
                {
                    title: 'User Experience Research',
                    description: 'Conducted user interviews and competitive analysis to inform design decisions.',
                },
                {
                    title: 'Modern Web Design',
                    description: 'Created stunning, mobile-first design with premium aesthetics and smooth animations.',
                },
                {
                    title: 'Portfolio Showcasing',
                    description: 'Designed interactive case study layouts highlighting work quality.',
                },
                {
                    title: 'Performance Optimization',
                    description: 'Implemented technical SEO and speed optimizations for better rankings.',
                },
                {
                    title: 'Conversion Optimization',
                    description: 'Strategic CTAs and lead capture forms throughout the journey.',
                }
            ],
            technologies: ['Next.js', 'React', 'Tailwind CSS', 'GSAP', 'Vercel']
        },

        roi: {
            title: 'Creative Minds Agency',
            subtitle: '156% Increase in Quality Leads',
            primaryMetric: '↑ 220% ENGAGEMENT',
            primaryMetricValue: '220%',
            description: 'A forward-thinking digital agency needed to showcase their creative excellence through a website that matched their capabilities. The new platform combines stunning design with conversion optimization.',
            result: 'Launched with focus on attracting high-value clients and showcasing portfolio excellence.',
            caseStudyLabel: 'Agency'
        },

        results: {
            metrics: [
                { label: 'Quality Leads', value: '156%', change: '+100%' },
                { label: 'Engagement Rate', value: '220%', change: '+120%' },
                { label: 'Time on Site', value: '3m 42s', change: '+380%' },
                { label: 'Bounce Rate', value: '-64%', change: 'Decreased' }
            ],
            description: 'Dramatic improvements in user engagement and lead quality',
            highlights: [
                'Increased average session duration from 45s to 3m 42s',
                '156% increase in qualified lead submissions',
                'Reduced bounce rate from 78% to 28%',
                'Improved Core Web Vitals to top 10% of websites'
            ]
        },

        roadAhead: {
            title: 'The Road Ahead',
            initiatives: [
                {
                    title: 'Content Marketing Hub',
                    description: 'Building robust blog and resources section for thought leadership.',
                    icon: '📚'
                },
                {
                    title: 'Client Portal',
                    description: 'Developing secure client area for project collaboration.',
                    icon: '🔐'
                },
                {
                    title: 'Interactive Tools',
                    description: 'Creating calculators and assessments for lead generation.',
                    icon: '🛠️'
                }
            ]
        }
    },
    {
        slug: 'tech-startup-brand-identity',
        title: 'Tech Startup Branding',
        client: 'InnovateTech AI',
        industry: 'Artificial Intelligence',
        category: 'Branding',
        excerpt: 'Complete brand identity and go-to-market strategy for an AI startup, achieving successful Series A fundraise and strong market presence.',
        featuredImage: '/project4.png',
        heroImage: '/project4.png',
        images: ['/project4.png', '/MacBookCapital.png'],
        tags: ['Branding', 'Identity Design', 'Startup', 'AI', 'UI/UX'],

        about: {
            description: 'An AI-powered analytics startup preparing for Series A needed to establish a strong brand identity and market positioning to attract investors and early customers.',
            industry: 'Artificial Intelligence & Analytics',
            goals: [
                'Create distinctive brand identity in crowded AI market',
                'Support Series A fundraising efforts',
                'Attract early enterprise customers',
                'Build credibility and trust with stakeholders'
            ]
        },

        challenges: [
            {
                title: 'Highly saturated AI/ML market with limited differentiation',
                description: 'Needed to stand out among hundreds of AI startups',
                icon: '🤖'
            },
            {
                title: 'No existing brand identity or positioning',
                description: 'Starting from scratch with tight Series A timeline',
                icon: '⏰'
            },
            {
                title: 'Complex technical product requiring clear communication',
                description: 'Needed to make AI accessible to non-technical stakeholders',
                icon: '🧠'
            },
            {
                title: 'Need to appeal to both investors and enterprise buyers',
                description: 'Different audiences with varying priorities',
                icon: '🎯'
            }
        ],

        solution: {
            overview: 'A comprehensive brand strategy and identity system designed to position the startup as a credible, innovative leader in AI analytics.',
            approach: [
                {
                    title: 'Market Positioning Workshop',
                    description: 'Defined unique value proposition and competitive positioning in AI landscape.',
                },
                {
                    title: 'Brand Identity System',
                    description: 'Created modern visual identity including logo, colors, typography, and design system.',
                },
                {
                    title: 'Messaging Framework',
                    description: 'Developed clear, compelling messaging for technical and non-technical audiences.',
                },
                {
                    title: 'Pitch Deck Design',
                    description: 'Designed investor pitch materials aligned with brand identity.',
                },
                {
                    title: 'Website & Product UI',
                    description: 'Built marketing website and contributed to product interface design.',
                },
                {
                    title: 'Brand Guidelines',
                    description: 'Comprehensive brand book ensuring consistency across all touchpoints.',
                }
            ],
            technologies: ['Figma', 'Adobe Creative Suite', 'Next.js', 'Framer']
        },

        roi: {
            title: 'InnovateTech AI',
            subtitle: 'Successful $12M Series A & Strong Market Entry',
            primaryMetric: '↑ $12M RAISED',
            primaryMetricValue: '$12M',
            description: 'An AI-powered analytics startup needed to establish credibility and market presence to attract investors and enterprise customers. Our branding work helped position them as a serious player in the competitive AI landscape.',
            result: 'Successfully closed Series A round and secured first enterprise contracts.',
            caseStudyLabel: 'Startup'
        },

        results: {
            metrics: [
                { label: 'Series A Raised', value: '$12M', change: 'Successful' },
                { label: 'Enterprise Contracts', value: '8', change: 'First 6 months' },
                { label: 'Brand Recognition', value: '340%', change: 'Increase' },
                { label: 'Website Traffic', value: '425%', change: '+325%' }
            ],
            description: 'Strong brand foundation supporting business growth',
            highlights: [
                'Successfully closed $12M Series A with top-tier VCs',
                'Secured 8 enterprise contracts in first 6 months',
                'Featured in TechCrunch, VentureBeat, and Forbes',
                'Built recognizable brand in competitive AI market'
            ]
        },

        roadAhead: {
            title: 'The Road Ahead',
            initiatives: [
                {
                    title: 'Product Expansion',
                    description: 'Extending brand system to new product lines and features.',
                    icon: '🚀'
                },
                {
                    title: 'Thought Leadership',
                    description: 'Building content strategy to establish market leadership.',
                    icon: '💭'
                },
                {
                    title: 'Global Scaling',
                    description: 'Adapting brand for international markets and regions.',
                    icon: '🌐'
                }
            ]
        }
    }
];

// Helper functions
export function getAllCaseStudies(): CaseStudy[] {
    return caseStudies;
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
    return caseStudies.find(cs => cs.slug === slug);
}

export function getCaseStudiesByCategory(category: CaseStudy['category'] | 'All'): CaseStudy[] {
    if (category === 'All') {
        return caseStudies;
    }
    return caseStudies.filter(cs => cs.category === category);
}

export function getFeaturedCaseStudies(limit: number = 3): CaseStudy[] {
    return caseStudies.slice(0, limit);
}

export const categories = ['All', 'Digital Marketing', 'Web & Martech', 'Branding'] as const;
export type CategoryType = typeof categories[number];
