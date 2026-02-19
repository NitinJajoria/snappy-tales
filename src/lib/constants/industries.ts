export interface SimpleSection {
    title: string;
    description: string;
}

export interface OfferingSection {
    text: string;
    highlighted: boolean;
}

export interface Industry {
    slug: string;
    title: string;
    tagline: string;
    heroImage: string;
    intro: string;

    sections: {
        a: SimpleSection;
        b: OfferingSection[];
        c?: SimpleSection;
        d: SimpleSection;
    };

    faqs: { question: string; answer: string }[];
}

export const INDUSTRIES: Industry[] = [
    {
        slug: "travel",
        title: "Travel",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/travel-bg.jpg",
        intro: "Travel",
        sections: {
            a: {
                title:
                    "Revitalising travel, tourism & hospitality with hyper personalization & custom journey design",
                description:
                    "“Digital” in travel and tourism sector, has shifted from a “tour operator” first approach to a profoundly personal “traveler centric” approach. The power of choice – from deciding places to go, when to go – to designing the journey, customizing food & stay; the power is back in the hands of travelers. Tailormade tours are becoming the norm and businesses offering leisure travel services – are experiencing brutal competition to gain attention of modern day travelers and market share.\n\nTour operators, roadways, railways, airlines, hotels and ground transport service providers have got to stay on top of their game, embrace digital collaboration with multiple businesses. Most importantly stay aware of how technological advancements is changing the face of leisure travel locally and globally.\n\nFor example, Campervan holidays and experiences (a new category of leisure travel in India), right from its initial market entry stages – is coming in with a high degree of digital-social integration and infotainment, ready for today’s Insta-hyper generation. What took over a decade for traditional hotel businesses to implement, today’s new travel products and services – are coming in fully loaded with.",
            },
            b: [
                {
                    text: "Online travel planning & booking app development",
                    highlighted: true,
                },
                {
                    text: "Traveler profiling based on consumer interaction with varied lifestyle brands",
                    highlighted: false,
                },
                {
                    text: "Customization of journeys and destination experiences",
                    highlighted: false,
                },
                {
                    text: "Booking process simplification & operational efficiency",
                    highlighted: false,
                },
                {
                    text: "Dynamic inventory management, demand-supply based pricing",
                    highlighted: false,
                },
                {
                    text: "Smart payment enablement and technology integrations",
                    highlighted: false,
                },
                {
                    text: "Cloud & edge development, web/mobile application development",
                    highlighted: true,
                },
                {
                    text: "Data mining, predictive analytics & AI aided systems development",
                    highlighted: true,
                },
                {
                    text: "Integrated online platform development & GDS integrations",
                    highlighted: false,
                },
                {
                    text: "Marketing process automation system development",
                    highlighted: false,
                },
                {
                    text: "Smart vehicle console and mobile app integrations",
                    highlighted: false,
                },
                { text: "Digital infrastructure consultation", highlighted: true },
            ],
            c: {
                title: "More trends on today’s travel consumer:",
                description:
                    "Travel & tourism globally contributed more than 8 trillions\nThe travel and tourism business is a $1.2 trillion industry\nFrom 2009 to 2017, US cruise passengers grew from 10.4 million to 12.4 million – helping drive industry revenue growth from $12 billion to $18 billion\nFrom 2009 to 2017, US hotel gross bookings grew from $116 billion to $185 billion\nUS Airline revenue jumped from $155 billion to $222 billion in 2018\n83% Americans prefer booking their vacation transport online\n88% Americans prefer booking hotels online\nCruise industry revenue worldwide – $35Bn\nGlobal hotel industry total retail value $570Bn\nNumber of international tourist arrivals worldwide – 1,323 Mn\nPercentage of Americans who would consider tour to India – 7%",
            },
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How do you develop a travel app?",
                answer:
                    "Integrate with Global Distribution Systems (GDS), prioritize high-quality imagery, and add offline itinerary access. We build immersive travel experiences.",
            },
            {
                question: "How much does it cost to build a travel app?",
                answer:
                    "Cost depends on the number of booking APIs enabled, real-time pricing complexity, and language/currency support.",
            },
            {
                question: "What are the top trends in travelTech?",
                answer:
                    "Contactless travel, AI travel assistants, sustainable tourism focus, and 'work from anywhere' travel packages.",
            },
            {
                question: "What features are essential in a travel app?",
                answer:
                    "Flight/hotel booking, dynamic itineraries, local maps, reviews/ratings, and secure mobile wallets.",
            },
        ],
    },

    {
        slug: "retail",
        title: "Retail",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/retail-bg.png",
        intro: "Retail",
        sections: {
            a: {
                title: "Omnichannel digital retail experience intensified at the edge",
                description:
                    "Modern day retail experience is about creating business to consumer interactions closest to the source of need. Smart sensing of recurring livelihood needs, detection of inventory depletion, scheduling orders and managing predictable tasks can personalize and simplify the retail experience for today’s consumer.\n\nModern day “bricks and clicks” businesses can benefit hugely from “consumer context sensing” tech & predictive analysis capabilities to deliver a personalized retail experience and scale that beyond physical barriers. Integrating intelligence into everyday retail operations for efficiency, bringing dynamic pricing (varying based on fluctuating demand) & hyperlocal offers delivered at the point of sale, maintaining a healthy supply-chain balance and meaningfully digitizing processes from supply to demand end, is changing the future for many retail businesses.",
            },
            b: [
                {
                    text: "Omni-channel retail digital transformation",
                    highlighted: true,
                },
                {
                    text: "AI/ML powered dynamic pricing by location, market and time",
                    highlighted: true,
                },
                {
                    text: "Retail process automation for operational efficiency",
                    highlighted: false,
                },
                {
                    text: "Dynamic inventory management, demand-supply based pricing",
                    highlighted: false,
                },
                {
                    text: "Smart payment enablement and technology integrations",
                    highlighted: false,
                },
                {
                    text: "Smart beacon technology development for personalized in-store experiences",
                    highlighted: false,
                },
                {
                    text: "Data mining, predictive analytics & AI solutions development",
                    highlighted: true,
                },
                {
                    text: "Integrated platform development & blockchain implementation",
                    highlighted: false,
                },
                {
                    text: "Digital marketing & advertising with re-targeting",
                    highlighted: false,
                },
                {
                    text: "Cloud & edge development, web & mobile application development",
                    highlighted: true,
                },
                {
                    text: "Sales & Marketing Automation system development",
                    highlighted: false,
                },
                {
                    text: "Security & Digital infrastructure consultation",
                    highlighted: false,
                },
            ],
            c: {
                title: "More trends on today’s retail consumer:",
                description:
                    "75% of US retailers already use Beacon technology\n83% of retail decision makers and 74% of store associates agree shoppers will have better experiences when associates are equipped with technology (Global Shopper Study, Zebra Technologies, 2018)\n70% of consumers say a company’s understanding of their individual needs influences their loyalty, and 69% say the same of personalized customer care (Salesforce, 2017)\n79% of consumers feel brands must actively demonstrate that they understand and care about them (Wunderman, 2018)\nPersonalization influences 38% of all digital revenue (Salesforce & Publicis Sapient, 2018)\nAmong U.S. consumers, 50% like personalized communications and 16% like them a lot; only 20% dislike them. 58% say they will sign up for personalized offers (McKinsey, 2018)\n62% of retailers report that the use of information and analytics is creating a competitive advantage (IBM, 2018)\n55% of shoppers say retail experiences are disconnected across channels (Zebra Technologies, 2018)\n50% of companies are implementing planning and forecasting technologies, with an additional 32% increase in investments expected (Zebra Technologies, 2018)\nTesting automation to ensure product & service quality exceeds buyer expectations",
            },
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How can I develop an eCommerce app?",
                answer:
                    "Focus on speed, mobile UX, and secure checkouts. We build high-conversion storefronts that integrate seamlessly with your inventory and CRM.",
            },
            {
                question: "How much does it cost to build an eCommerce app?",
                answer:
                    "Cost is influenced by product catalog size, payment gateway integrations, and personalized recommendation features.",
            },
            {
                question: "What are the top retailTech trends?",
                answer:
                    "Social commerce, augmented reality (AR) try-ons, hyper-personalization, and unified omnichannel experiences.",
            },
            {
                question: "What features are essential in a retail app?",
                answer:
                    "Fast search, secure payments, order tracking, personalized offers, and a seamless return process.",
            },
        ],
    },

    {
        slug: "transportation",
        title: "Transportation / Logistics",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/Transportation-bg.png",
        intro: "Transport",
        sections: {
            a: {
                title:
                    "Last mile delivery services, peer to peer ride sharing, electric bike rentals & high speed public transport infrastructure have opened our society to fractional ownership of connected, shared, autonomous, electrified vehicles – redefining domestic movement & logistics.",
                description:
                    "Transportation and logistics businesses of today are one of industries thriving on high location-awareness, context-awareness and as the nature of this industry involves movement of people and things from one location to another, modern day businesses in this industry need robust IT infrastructure and a digital suite of systems i.e., mobile & web applications / platforms to run their operations efficiently. Leveraging AI/ML & Edge technologies to gather data and perform predictive analytics can give your business a unique advantage, making it future ready.\n\nRight incorporation of cloud mobility, AI & analytics enables logistic providers to deliver transportation services faster, empowers teams to make quick & intelligent decisions on the fly, improves agility of your business operations, reduces operational costs (by saving time in decision making) and enhances overall experience of all the participants on the value chain (not just the customers but employees & partners too).\n\nCompetition in mobility and logistics (for mobilizing people and things) have leaped to an all new level this decade. To stay relevant for today’s movement needs and stay on top of trends in this industry, enterprises need to utilize people, technology and automobiles at peak efficiency. Companies need augmented intelligence to dynamically find the best routes / modes (road, rail, sea, air), connectivity infrastructure (ports, stations) and in addition, process realtime information on external factors such as weather, construction work / blocked routes, public transport availability etc to make informed decisions and lower risks. Advanced AI and predictive analysis abilities can give businesses opportunities to minimize risks and maximize profitability.",
            },
            b: [
                {
                    text: "Dockless e-scooter sharing app development",
                    highlighted: true,
                },
                { text: "Fleet Management Software", highlighted: false },
                { text: "Logistics process automation services", highlighted: true },
                {
                    text: "Enterprise Transportation Management Solution",
                    highlighted: false,
                },
                { text: "AI/ML enabled dynamic price engine", highlighted: true },
                { text: "Realtime movement tracking", highlighted: false },
                {
                    text: "Predictive analytics and risk forecasting",
                    highlighted: false,
                },
                { text: "Predictive demand forecasts", highlighted: false },
                {
                    text: "Online peer to peer, shared transportation platforms",
                    highlighted: false,
                },
                {
                    text: "Online bike/car rental services platforms",
                    highlighted: false,
                },
                {
                    text: "Smart vehicle console and mobile app integrations",
                    highlighted: false,
                },
                { text: "Warehouse and cargo management", highlighted: false },
                { text: "Freight management solutions", highlighted: false },
                { text: "Custom software development", highlighted: false },
            ],
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How do you develop logistics apps?",
                answer:
                    "Focus on real-time GPS tracking, route optimization algorithms, and carrier-driver communication. We build robust platforms for complex supply chains.",
            },
            {
                question: "How much does it cost to build a logistics app?",
                answer:
                    "Cost depends on the number of integrations (GPS, ERP, Warehouse), real-time data requirements, and mobile app complexity.",
            },
            {
                question: "What are the top transportation & logistics trends?",
                answer:
                    "Autonomous vehicles, last-mile delivery drones, green logistics, and AI for demand forecasting.",
            },
            {
                question: "What features are essential in a logistics app?",
                answer:
                    "Live tracking, delivery confirmation (ePOD), route history, warehouse management, and analytics reporting.",
            },
        ],
    },

    {
        slug: "energy",
        title: "Energy",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/energy-bg.png",
        intro: "Energy",
        sections: {
            a: {
                title:
                    "Smart self-governing grids for local energy generation from waste at source is building the new circular economy. Smart homes and connected buildings are driving sustainable behaviors through data & insights.",
                description:
                    "Consumer demands have shifted towards green efficient energy with high reliability and safety. New innovative technologies are being discovered that enables individuals to self-generate energy for personal use. Energy sector is going through a radical shift – relooking at how energy is generated, distributed and consumed. Codewave enables energy enterprises adopt cloud/edge, AI/ML, data analytics, process automation, & other advanced digital transformation solutions to navigate through unknowns / challenges associated with these transitions in the energy sector as well as explore new emerging opportunities.\n\nConvergence of industries and advancement of digital technologies open possibilities for highly tailored energy enterprise solutions architected and engineered to efficiently integrate existing physical infrastructure with digital infrastructure. Design thinking led digital transformation enhances operational efficiency of entire value network, from energy generation and transmission/distribution to consumption.",
            },
            b: [
                {
                    text: "Energy data monitoring & analytics in realtime",
                    highlighted: true,
                },
                {
                    text: "IoT sensing tech & realtime integrated data collection systems",
                    highlighted: false,
                },
                {
                    text: "Power generation management systems & efficiency reporting",
                    highlighted: false,
                },
                {
                    text: "Live data visualizations & decision support dashboards",
                    highlighted: false,
                },
                {
                    text: "Wind & solar farm/asset remote monitoring and workflow automation",
                    highlighted: false,
                },
                {
                    text: "Waste to energy process automation & workflow simplification",
                    highlighted: true,
                },
                {
                    text: "Circular economy development platforms & blockchain development",
                    highlighted: false,
                },
                {
                    text: "Renewable energy generation efficiency tracking & improvizations",
                    highlighted: false,
                },
                {
                    text: "Live power supply management software solutions",
                    highlighted: true,
                },
                {
                    text: "App development for energy consumption tracking, pattern analysis & insights",
                    highlighted: true,
                },
                {
                    text: "Sustainable local energy generation & consumption apps",
                    highlighted: false,
                },
                {
                    text: "Large scale power distribution management software",
                    highlighted: false,
                },
            ],
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How to develop an energy & utilities app?",
                answer:
                    "Integrate with smart meters and grid infrastructure. We focus on real-time data processing and high-availability systems.",
            },
            {
                question: "How much does it cost to build an energy analytics app?",
                answer:
                    "Factors include the scale of data ingestion, complexity of predictive algorithms, and integration with industrial IoT systems.",
            },
            {
                question: "What are the top energyTech trends?",
                answer:
                    "Decentralized energy grids, smart home automation, energy storage management, and AI for predictive maintenance.",
            },
            {
                question: "What features are essential in an energy app?",
                answer:
                    "Real-time usage charts, anomaly detection, outage alerts, billing integration, and sustainability tracking.",
            },
        ],
    },

    {
        slug: "agriculture",
        title: "Agriculture",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/Agricultrue-bg.jpg",
        intro: "Agriculture",
        sections: {
            a: {
                title:
                    "Smart precision farming for better crop health & predictability of income. Enabling farmers, Agricultural organizations digitize processes and intelligently supply to meet demand variations.",
                description:
                    "Cognitive computing is fuelling innovation across the agricultural sector, on-field and off-field. Codewave enables agricultural enterprises harness data & analytics to choose the right crop to grow at the right farm at the right time – for best utilizing season’s climatic conditions and soil fertility, for maximizing crop health and nutritional value, minimizing rejections at the retail end and delivering high consumer impact.\n\nOur web & mobile app development services for agriculture enterprises starts with understanding the organization’s goals and pain points you are trying to address. After proper comprehension of the problem our team of digital transformation services consultants identify the right solutions and articulate a roadmap for the development of the same in alignment with your vision and overall strategy. Exploitation of data, AI & ML on the edge/cloud infrastructure enable you to remotely manage crops and machinery health which in-turn increases net farm yield, improves machine life and boosts your enterprise net revenue.",
            },
            b: [
                {
                    text: "AI/ML solutions development for crop health/disease early detection",
                    highlighted: true,
                },
                {
                    text: "Crop growth monitoring systems design & development",
                    highlighted: false,
                },
                {
                    text: "Farm management systems & data analytics",
                    highlighted: false,
                },
                {
                    text: "Farming and irrigation – robotic automation solutions",
                    highlighted: true,
                },
                {
                    text: "Farm-to-Table blockchain solutions development for traceability",
                    highlighted: true,
                },
                { text: "Seed-to-Sale management solutions", highlighted: false },
                { text: "Livestock management software solutions", highlighted: false },
                {
                    text: "Analytics Solutions for Smart Precision Farming",
                    highlighted: false,
                },
                {
                    text: "Agri Machinery Health Monitoring Solutions",
                    highlighted: false,
                },
                {
                    text: "Enterprise solutions for workforce management",
                    highlighted: false,
                },
            ],
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How do you develop agricultural apps?",
                answer:
                    "Focus on data visualisations from IoT devices, mapping (GIS), and offline capabilities for remote areas. We build systems that turn field data into actionable insights.",
            },
            {
                question: "How much does it cost to build an agri app?",
                answer:
                    "Cost depends on IoT hardware integration, data processing complexity, and the scale of the supply chain features.",
            },
            {
                question: "What are the top agriTech trends?",
                answer:
                    "Precision farming, drone-based monitoring, sensor-based automation, and blockchain for supply chain transparency.",
            },
            {
                question: "What features are essential in an agriTech app?",
                answer:
                    "Real-time monitoring, weather forecasts, inventory management, supply chain tracking, and predictive analytics.",
            },
        ],
    },

    {
        slug: "education",
        title: "Education",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/Education-bg.jpg",
        intro: "Education",
        sections: {
            a: {
                title:
                    "Personalized online self-learning & social-learning with dynamic adaptive self-assessments are taking education beyond the classroom.",
                description:
                    "Our approach towards solving problems for Education industry starts with identifying needs of your business ecosystem & all of its market participants – learners, parents, teachers, influencers, institutions, online course providers, content creators, mass media publishing / broadcast partners, education boards, universities, placement cells, training service providers etc.\n\nTechnology has transformed businesses in this industry to bring ‘Learner-centricity’ in its operations. Opportunities to learn arise outside the classrooms, which the learner today isn’t aware of and doesn’t have access to look up information at moments of high need to see an answer or hear an explanation. Learning outside classrooms can be simplified and made engaging with technology as much as learning inside classrooms. This is a unique opportunity for businesses to disrupt.\n\nAI/ML can accelerate self learning, by bringing relevant educational content closer to the learner’s real world experience, dynamically assessing the impact of that content on the learner and progressing accordingly. As self learning becomes mainstream, educational institutions and instructors could transform their roles to becoming personal transformational coaches.",
            },
            b: [
                {
                    text: "Digitization of course content & question banks",
                    highlighted: false,
                },
                {
                    text: "E-learning app development with video tutorials & adaptive/practice tests",
                    highlighted: true,
                },
                {
                    text: "Digital transformation services with web, mobile & tablet apps",
                    highlighted: true,
                },
                {
                    text: "Online mock exams & learner’s progress reports",
                    highlighted: false,
                },
                {
                    text: "School management systems, teacher-student interaction apps",
                    highlighted: false,
                },
                {
                    text: "Custom software development for educational institutions",
                    highlighted: true,
                },
                {
                    text: "Board & competitive exam preparation apps",
                    highlighted: false,
                },
                {
                    text: "Psychometric tests & assessments for social-emotional wellness",
                    highlighted: false,
                },
                {
                    text: "AI app development for adaptive learning & content personalization",
                    highlighted: true,
                },
                {
                    text: "Social learning enablement, peer to peer knowledge sharing platforms",
                    highlighted: false,
                },
                {
                    text: "Large scale Edu content production & distribution management tools",
                    highlighted: false,
                },
                {
                    text: "Education to employability mapping applications",
                    highlighted: false,
                },
                {
                    text: "Learner to mentor connect social platforms",
                    highlighted: false,
                },
            ],
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How can I develop an eLearning app?",
                answer:
                    "Start with defining your target audience and core features (video lessons, quizzes, progress tracking). We help build scalable platforms that support rich media and interactive learning.",
            },
            {
                question: "How much does it cost to develop an eLearning app?",
                answer:
                    "Costs vary based on features like video streaming, gamification, and LMS integrations. We offer scalable development paths for startups and enterprises.",
            },
            {
                question: "What are the top eLearning trends?",
                answer:
                    "Key trends include micro-learning, AI-driven personal tutors, virtual reality classrooms, and mobile-first learning experiences.",
            },
            {
                question: "What features are essential in an eLearning app?",
                answer:
                    "Must-have features include video conferencing, content repositories, interactive quizzes, progress analytics, and seamless mobile access.",
            },
        ],
    },

    {
        slug: "healthcare",
        title: "Healthcare",
        tagline:
            "Right tech for right care. Maximizing patient centricity, developing AI assisted diagnosis, prognosis & predictions.",
        heroImage: "/images/industries/healthcare-bg.jpg",
        intro: "Healthcare",
        sections: {
            a: {
                title:
                    "Right tech for right care. Maximizing patient centricity, developing AI assisted diagnosis, prognosis & predictions.",
                description:
                    "Modern day healthcare consumers seek personalized attention & preventive / curative care easily accessible online at moments of high need. Codewave helps healthcare service providers devise an integrated Data & AI strategy to provide holistic, personalized care to patients, meeting moments of high need with deep care. This could involve highly dynamic cross-industry collaboration among various multi-specialty hospitals, clinics, doctors, diagnostic companies, pharma companies, health insurance providers etc enabled by a connected suite of web & mobile platforms, applications and AI aided systems.\n\nPersonalized healthcare and privacy protection of patient’s health data are two major goals of healthcare entities at the moment. Data-driven insights assist doctors in accurately predicting the chances of an illness, diagnose / detect symptoms early and accordingly plan effective and personalized treatment. Healthcare consortiums and private blockchain solutions improve security of health record management and maintain integrity of patient data. Blockchain enabled operations also open possibilities for effective collaboration between industries, government and businesses to access patient information, become context aware & maximize value delivered to the patient in realtime.",
            },
            b: [
                {
                    text: "Patient profiling, big data analysis, doctor insights",
                    highlighted: true,
                },
                {
                    text: "Patient – doctor engagement platform, online consulting",
                    highlighted: false,
                },
                {
                    text: "Custom prognostic, diagnostic software applications",
                    highlighted: false,
                },
                {
                    text: "Machine Learning for disease recognition (from scans)",
                    highlighted: true,
                },
                {
                    text: "IoT for sensing data of patient under observation & cloud analytics",
                    highlighted: false,
                },
                {
                    text: "Predictive modelling & analysis of patterns in health data",
                    highlighted: false,
                },
                {
                    text: "Integration with Google’s AI/ML for detecting known diseases",
                    highlighted: false,
                },
                {
                    text: "Hospital portals and websites for easy patient access",
                    highlighted: false,
                },
                {
                    text: "Blockchain enabled platform development for cross-industry collaboration for patient care",
                    highlighted: true,
                },
            ],
            c: {
                title: "More trends on today’s healthcare tech:",
                description:
                    "Worldwide revenue of wearable medical devices is estimated to be anywhere from $30–90 billion by the year 2025\n84% of healthcare organizations are already using cloud technologies\nGlobal medical robotics market is expected to reach $20 billion by 2023\nHealthcare data is expected to experience a CAGR of over 36% through the year 2025\nAccording to a McKinsey report, more than 79% of digital consumers search for doctors and hospitals rating and reviews online. 75% monitor daily health through smart devices and wearables. More than 70% order prescriptions/drugs online and checks for health information online.\nIndian healthcare market to be valued at $372Bn by 2022",
            },
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How do you build a healthcare mobile app?",
                answer:
                    "Prioritize HIPAA compliance, data security, and interoperability. We build user-friendly apps that connect patients and providers securely.",
            },
            {
                question: "How much does it cost to build a healthcare app?",
                answer:
                    "Cost is influenced by data security requirements, integration with medical records (EHR), and advanced features like telemedicine or AI diagnostics.",
            },
            {
                question: "What are the top healthTech trends?",
                answer:
                    "Telehealth, wearable device integration, AI for diagnostics, and personalized medicine are leading the industry's transformation.",
            },
            {
                question: "What features are essential in a healthcare app?",
                answer:
                    "Secure messaging, appointment scheduling, access to medical records, prescription management, and telemedicine capabilities are vital.",
            },
        ],
    },

    {
        slug: "insurance",
        title: "Insurance",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/Insurance-bg.jpg",
        intro: "Insurance",
        sections: {
            a: {
                title:
                    "Personalized insurance policies for today’s information hyper generation; AI is enabling ‘smart liability profiling’ of consumers with data collected from sources like health sensors, automobile sensors / telematics systems, smart home sensors informing high levels of personalization.",
                description:
                    "Digital savvy millennial consumers prefer simple, personalised policies, transparent processes and services that are just clicks away – accessible from the convenience of their smart phones and manageable with virtual assistance than requiring physical movement or manual work. Semi automated claims & settlement processing using Blockchain, for example – could bring in radical transparency and faster help to genuine victims / survivors in need of help. This requires traditional insurance companies to transition from being a policy-centric business to a customer-centric, digital-first business.\n\nResearch shows that about 23% of consumers struggle to clearly understand insurance policies and as a result they lack trust on the insurance provider / agent / broker because of hidden agenda / intent / focus on making an immediate sale, than creating value. Also, 47% of insurance holders feel frustrated with the paperwork, 39% find the policies not completely addressing their needs, 35% have faced issues during claim processing.\n\nMore data you can have of the modern day consumer – by gathering the right behavioral signals can help insurance policy providers to deeply personalize the insurance cover and the premium tailored to meet the needs of that individual. AI powered intelligent sensing technologies and predictive analytics capabilities when integrated with the legacy business intelligence systems in the right way could potentially address some of the most pressing pain-points of insurance holders and providers.",
            },
            b: [
                {
                    text: "Personalised policy management & administration software development",
                    highlighted: true,
                },
                {
                    text: "Digitization of insurance policy issuance and claims processes",
                    highlighted: false,
                },
                {
                    text: "AI/ML led digitization of claims and settlements",
                    highlighted: true,
                },
                {
                    text: "Digitized, secure processes to automate legal & regulatory compliances",
                    highlighted: false,
                },
                {
                    text: "Automation of fraud detection & prevention solutions (blockchain)",
                    highlighted: true,
                },
                {
                    text: "Integrated telematics based insurance software system development",
                    highlighted: false,
                },
                {
                    text: "Exposure management software for insurance companies",
                    highlighted: false,
                },
                {
                    text: "Insurance applications for agents / brokers / policy sellers",
                    highlighted: false,
                },
                {
                    text: "Peer-to-peer insurance app development services",
                    highlighted: true,
                },
                {
                    text: "Data analytics for insurance companies / providers",
                    highlighted: true,
                },
                { text: "End-to-end insurance services software", highlighted: false },
            ],
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How do you develop an insurance app?",
                answer:
                    "Focus on streamlining the claims process and policy transparency. We build secure portals that simplify complex insurance workflows.",
            },
            {
                question: "How much does it cost to build an insurance app?",
                answer:
                    "Cost is impacted by automation complexity (AI claims), security standards, and integration with legacy policy systems.",
            },
            {
                question: "What are the top trends in insurance industry?",
                answer:
                    "Usage-based insurance, AI-driven underwriting, mobile-first claims filing, and peer-to-peer insurance models.",
            },
            {
                question: "What features are essential in insurance apps?",
                answer:
                    "Instant quotes, digital policy access, photo-based claims filing, secure documents, and 24/7 support chat.",
            },
        ],
    },

    {
        slug: "finance",
        title: "Finance",
        tagline:
            "Hyper-connected industries dynamically converging to meet human needs",
        heroImage: "/images/industries/FInance-bg.png",
        intro: "Finance",
        sections: {
            a: {
                title:
                    "Payment revolution by tech firms accelerating tech integration by banks, made money a digital experience. Virtual wallets, savings, spends & transfers changed how people experience money – not just as “passive cash” but “active flow”.",
                description:
                    "Modern day consumer, is making save & spend decisions dynamically on the move, from the convenience of their mobile phones – not at specific times of the year and in specific ways. Banking, personal finance, lending & credit, long term investments, payments & transfers have all undergone a huge transformation from the last two decades – starting from money becoming a virtual experience.\n\nDigitization (web & mobile applications development services) has opened & broadened credit access in places where basic livelihood infrastructure was missing, starting with Digital identity, digital verifications & credit checks/scoring.\n\nCloud & edge technologies have opened possibilities for businesses in the finance / banking space, to create innovative customer journeys & experiences for modern day consumers.",
            },
            b: [
                {
                    text: "Digital transformation of core banking functions",
                    highlighted: true,
                },
                { text: "ePassbook development", highlighted: false },
                {
                    text: "Mobile app development for personal finance management",
                    highlighted: true,
                },
                {
                    text: "Design thinking led digitization of lending processes and workflows",
                    highlighted: true,
                },
                {
                    text: "Online lending platforms with scalability, security & speed",
                    highlighted: false,
                },
                {
                    text: "Online peer to peer lending platforms with scalability, security & speed",
                    highlighted: false,
                },
                {
                    text: "Blockchain development for transparency in transactions",
                    highlighted: true,
                },
                {
                    text: "Online personal finance management tools & advisory",
                    highlighted: false,
                },
                {
                    text: "Online financial advisory & recommendation engines",
                    highlighted: false,
                },
                {
                    text: "Online identity verification systems, fraud detection systems",
                    highlighted: false,
                },
                {
                    text: "Cloud analytics of big data & insights on spend behavior",
                    highlighted: true,
                },
                {
                    text: "Custom software development for financial institutions",
                    highlighted: false,
                },
                {
                    text: "Integration of government workflows & partner services",
                    highlighted: false,
                },
                {
                    text: "Algorithmic credit scoring system development & loan personalization",
                    highlighted: false,
                },
                {
                    text: "Social lending enablement, peer to peer lending platforms",
                    highlighted: false,
                },
                {
                    text: "Automated investment portfolio risk diversification systems",
                    highlighted: false,
                },
                {
                    text: "Corporate finance management software solutions",
                    highlighted: false,
                },
            ],
            d: {
                title:
                    "Today, your digital strategy could involve participation and integration of multiple industries and cross-pollination of ideas and offerings.",
                description:
                    "There’s high levels of integration, collaboration and interoperability made possible with technologies like Blockchain. Also, fluctuation in demand for one industry could impact others. For example, rising demand for food delivery at the door, increased the demand for 2-wheeler transport to solve the ‘last-mile-connectivity’ problem and the demand for fractional ownership of bikes.\n\nMulti-industry collaborations or cross-domain integrations are becoming the new norm, to thrive in today’s ‘Intelligence first’ era, businesses need to embrace this change and exploit advanced digital technologies to participate in consistently delivering maximum consumer value.",
            },
        },
        faqs: [
            {
                question: "How do you build a banking & finance app?",
                answer:
                    "Developing a banking app requires a focus on security, compliance (KYC/AML), and seamless user experience. We use bank-grade encryption and robust backend architectures to ensure reliability.",
            },
            {
                question: "How much does it cost to build a banking app?",
                answer:
                    "The cost depends on the complexity of features like real-time transactions, third-party integrations, and regulatory requirements. We provide tailored quotes after a detailed discovery session.",
            },
            {
                question: "What are the top fintech trends?",
                answer:
                    "Current trends include AI-driven personalization, blockchain for secure transactions, open banking APIs, and mobile-first financial services.",
            },
            {
                question: "What features are essential in a fintech app?",
                answer:
                    "Essential features include multi-factor authentication, real-time notifications, transaction history, secure payment gateways, and intuitive dashboards.",
            },
        ],
    },
];

export const getIndustryBySlug = (slug: string) =>
    INDUSTRIES.find((ind) => ind.slug === slug);
