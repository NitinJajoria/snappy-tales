"use client";

import React, { useEffect, useRef, useState, type CSSProperties } from "react";
import Button from "../ui/Button";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import {
	ChevronDown,
	X,
	Rocket,
	Cloud,
	Database,
	Newspaper,
	Handshake,
	ArrowUpRight,
	Globe,
	CreditCard,
	MessageSquareQuote,
	BriefcaseBusiness,
	Smartphone,
	Layers,
	BarChart4,
	Zap,
	Store,
	Factory,
	Bot,
	PieChart,
	FileVideo,
	BookOpenCheck,
	Target,
	Kanban,
	HeartPulse,
	GraduationCap,
	Leaf,
	Truck,
	Plane,
	ShieldCheck,
} from "lucide-react";
import { Outfit } from "next/font/google";
import Link from "next/link";
import { useTheme } from "next-themes";
import { ThemeToggle } from "../theme-toggle";

const outfit = Outfit({
	weight: ["400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
});

type NavItemChild = {
	label: string;
	description: string;
	icon: React.ElementType;
	href: string;
};

type RichContent = {
	type: "card" | "image-card";
	title: string;
	description: string;
	image?: string;
	ctaLabel?: string;
	ctaLink?: string;
	bgColor?: string;
};

type NavItem = {
	label: string;
	href: string;
	hasDropdown?: boolean;
	columnLayout?: "single" | "columns"; // How to layout the items
	items?: NavItemChild[]; // Flattened list for the column layout
	richContent?: RichContent; // Featured content on the right
};

const NAV_ITEMS: NavItem[] = [
	{ label: "Agencies", href: "/agencies" }, // Usually logo handles home, but requested to update hover items. Keeping logic flexible.
	{
		label: "Services",
		href: "/services",
		hasDropdown: true,
		columnLayout: "columns",
		items: [
			{
				label: "Website & App Dev",
				description: "High-performance web & mobile apps",
				icon: Smartphone,
				href: "/services/website-app-development",
			},
			{
				label: "Branding & UI/UX",
				description: "Identity and experience design",
				icon: Layers,
				href: "/services/branding-ui-ux-design",
			},
			{
				label: "Marketing & Growth",
				description: "Performance marketing & SEO",
				icon: BarChart4,
				href: "/services/marketing-growth",
			},
			{
				label: "GTM & Scaling",
				description: "Strategic market entry plans",
				icon: Zap,
				href: "/services/gtm-scaling-strategy",
			},
			{
				label: "Investor Support",
				description: "Fundraising & pitch decks",
				icon: Handshake,
				href: "/services/accelerator-investor-connect",
			},
		],
		richContent: {
			type: "image-card",
			title: "Launch Your Vision",
			description:
				"From concept to market leader, we provide the technical and strategic edge you need.",
			ctaLabel: "Get a Quote",
			ctaLink: "/contact",
			image:
				"https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
		},
	},
	{
		label: "Industries",
		href: "/industries",
		hasDropdown: true,
		columnLayout: "columns",
		items: [
			{
				label: "Fintech",
				description: "Payment & banking revolution",
				icon: CreditCard,
				href: "/industries/fintech",
			},
			{
				label: "Education",
				description: "Digital learning platforms",
				icon: GraduationCap,
				href: "/industries/education",
			},
			{
				label: "Healthcare",
				description: "Patient-centric health tech",
				icon: HeartPulse,
				href: "/industries/healthcare",
			},
			{
				label: "Agriculture",
				description: "Smart precision farming",
				icon: Leaf,
				href: "/industries/agriculture",
			},
			{
				label: "Energy",
				description: "Smart grids & renewables",
				icon: Zap,
				href: "/industries/energy",
			},
			{
				label: "Logistics",
				description: "Transportation optimization",
				icon: Truck,
				href: "/industries/transportation",
			},
			{
				label: "Retail",
				description: "Modern commerce experiences",
				icon: Store,
				href: "/industries/retail",
			},
			{
				label: "Travel",
				description: "Personalized travel tech",
				icon: Plane,
				href: "/industries/travel",
			},
			{
				label: "Insurance",
				description: "Smart claims & automation",
				icon: ShieldCheck,
				href: "/industries/insurance",
			},
		],
		richContent: {
			type: "image-card",
			title: "Industry X.0",
			description:
				"Convergence of multiple industries and cross-pollination of ideas.",
			image: "/images/industries/industry-img3.jpg",
			ctaLabel: "All Industries",
			ctaLink: "/industries",
		},
	},
	{
		label: "Tools",
		href: "/tools",
		hasDropdown: true,
		columnLayout: "single",
		items: [
			{
				label: "CRM Solutions",
				description: "Manage sales & leads",
				icon: Database,
				href: "/tools/crm",
			},
			{
				label: "AI Automation",
				description: "Smart workflow tools",
				icon: Bot,
				href: "/tools/ai-automation",
			},
			{
				label: "Analytics Hub",
				description: "Real-time data insights",
				icon: PieChart,
				href: "/tools/analytics",
			},
		],
	},
	{
		label: "Resources",
		href: "/resources",
		hasDropdown: true,
		columnLayout: "single",
		items: [
			{
				label: "Success Blog",
				description: "Tips for digital growth",
				icon: Newspaper,
				href: "/resources/blog",
			},
			// {
			// 	label: "Video Tutorials",
			// 	description: "Visual guides & webinars",
			// 	icon: FileVideo,
			// 	href: "/resources/videos",
			// },
			{
				label: "Deep Dives",
				description: "Ebooks & whitepapers",
				icon: BookOpenCheck,
				href: "/resources/ebooks",
			},
			{
				label: "Latest News",
				description: "Company & industry news",
				icon: Globe,
				href: "/resources/news",
			},
		],
		richContent: {
			type: "image-card",
			title: "Mastering Growth",
			description:
				"Download our latest guide on scaling your startup to 7 figures.",
			ctaLabel: "Access Guide",
			ctaLink: "/resources/ebooks/scaling-guide",
			image:
				"https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&w=800&q=80",
		},
	},
	{
		label: "Pricing",
		href: "/pricing",
		hasDropdown: true,
		columnLayout: "single",
		items: [
			{
				label: "Standard Plans",
				description: "Transparent fixed pricing",
				icon: CreditCard,
				href: "/pricing/our-pricing",
			},
			{
				label: "Engagement Models",
				description: "Scale with your needs",
				icon: BriefcaseBusiness,
				href: "/pricing/engagement-models",
			},
		],
		richContent: {
			type: "image-card",
			title: "On-Demand Experts",
			description:
				"Scale your team instantly with our certified developers and designers.",
			ctaLabel: "Hire Talent",
			ctaLink: "/services/team-augmentation",
			image:
				"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
		},
	},
	{
		label: "Impact",
		href: "/client-work",
		hasDropdown: true,
		columnLayout: "single",
		items: [
			{
				label: "Case Studies",
				description: "Proven track record",
				icon: Target,
				href: "/client-work/case-studies",
			},
			{
				label: "Portfolio",
				description: "Our best creations",
				icon: Kanban,
				href: "/client-work/portfolio",
			},
			{
				label: "Testimonials",
				description: "5-star client reviews",
				icon: MessageSquareQuote,
				href: "/client-work/testimonials",
			},
		],
		richContent: {
			type: "card",
			title: "Trusted by Leaders",
			description: "Join 100+ businesses that scaled with Snappy Tales.",
			ctaLabel: "See Results",
			ctaLink: "/client-work/testimonials",
			bgColor: "bg-yellow-50 dark:bg-yellow-900/10",
		},
	},
];

const Logo: React.FC = () => {
	const svgRef = useRef<SVGSVGElement | null>(null);
	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (!mounted) return;
		if (!svgRef.current) return;

		const paths = svgRef.current.querySelectorAll("path");
		const tl = gsap.timeline({ repeat: -1, repeatDelay: 2, delay: 0.5 });

		tl.fromTo(
			paths,
			{ opacity: 0, scale: 0.5, transformOrigin: "center" },
			{
				opacity: 1,
				scale: 1,
				duration: 0.7,
				stagger: 0.15,
				ease: "back.out(2)",
			},
		).to(paths, {
			opacity: 0,
			scale: 0.5,
			duration: 0.5,
			stagger: 0.1,
			delay: 2,
			ease: "back.in(1.5)",
		});

		return () => {
			tl.kill();
		};
	}, [mounted]);

	const fillColor = mounted && resolvedTheme === "dark" ? "#ffffff" : "#0a0a0a";

	return (
		<div className="flex items-center gap-3">
			<svg
				ref={svgRef}
				width="32"
				height="32"
				viewBox="0 0 32 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				style={{ overflow: "visible" }}
			>
				<path
					d="M4 8C4 5.79086 5.79086 4 8 4H12C14.2091 4 16 5.79086 16 8V12C16 14.2091 14.2091 16 12 16H8C5.79086 16 4 14.2091 4 12V8Z"
					fill={fillColor}
				/>
				<path
					d="M20 4H24C26.2091 4 28 5.79086 28 8V12C28 14.2091 26.2091 16 24 16H20C17.7909 16 16 14.2091 16 12V8C16 5.79086 17.7909 4 20 4Z"
					fill="#F4C906"
				/>
				<path
					d="M4 20C4 17.7909 5.79086 16 8 16H12C14.2091 16 16 17.7909 16 20V24C16 26.2091 14.2091 28 12 28H8C5.79086 28 4 26.2091 4 24V20Z"
					fill="#F4C906"
				/>
			</svg>
			<span className="text-xl font-black tracking-tight text-black dark:text-white">SNAPPY TALES</span>
		</div>
	);
};

const Navbar: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [hoveredNav, setHoveredNav] = useState<string | null>(null);
	const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const mobileMenuRef = useRef<HTMLDivElement | null>(null);
	const pathname = usePathname();

	const { resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	// Close mobile menu on route change
	useEffect(() => {
		setMenuOpen(false);
	}, [pathname]);

	// Lock body scroll when mobile menu is open
	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [menuOpen]);

	const handleMouseEnter = (label: string | null) => {
		if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
		setHoveredNav(label);
	};

	const handleMouseLeave = () => {
		hoverTimeoutRef.current = setTimeout(() => {
			setHoveredNav(null);
		}, 100);
	};

	const handleCalendly = () => {
		window.open("https://calendly.com", "_blank");
	};

	// Unified glass style - EXACT same properties for navbar and dropdown
	const glassStyle: CSSProperties = {
		backgroundColor:
			mounted && resolvedTheme === "dark"
				? "rgba(10, 10, 10, 0.7)"
				: "rgba(255, 255, 255, 0.7)",
		backdropFilter: "blur(12px)",
		WebkitBackdropFilter: "blur(12px)",
	};

	return (
		<>
			<nav
				className="sticky top-0 z-50 transition-all duration-300 bg-white dark:bg-black"
				onMouseLeave={handleMouseLeave}
			>
				{/* Unified Container for Navbar + Dropdown */}
				<div className="overflow-hidden" style={glassStyle}>
					{/* Main Navbar */}
					<div className="max-w-[1400px] mx-auto px-6 h-[80px] flex items-center justify-between">
						{/* Logo */}
						<Link href="/" className="flex-shrink-0">
							<Logo />
						</Link>

						{/* Desktop Nav */}
						<div className="hidden lg:flex items-center gap-8">
							{NAV_ITEMS.map((item) => (
								<div
									key={item.label}
									onMouseEnter={() =>
										item.hasDropdown && handleMouseEnter(item.label)
									}
									className="relative"
								>
									<Link
										href={item.href}
										className={`
                      flex items-center gap-1.5 py-2 text-sm font-semibold transition-all
                      text-black dark:text-white
                      hover:text-[#F4C906]
                      ${hoveredNav === item.label ? "text-[#F4C906]" : ""}
                    `}
									>
										{item.label}
										{item.hasDropdown && (
											<ChevronDown
												size={16}
												className={`transition-transform ${hoveredNav === item.label ? "rotate-180" : ""
													}`}
											/>
										)}
									</Link>
								</div>
							))}
						</div>

						{/* CTA & Theme Toggle */}
						<div className="flex items-center gap-4">
							<ThemeToggle />
							<div className="hidden lg:block">
								<Button
									onClick={handleCalendly}
									className="px-6 py-2.5 text-sm"
								>
									Book a Strategy Call
								</Button>
							</div>
							{/* Mobile Toggle */}
							<button
								onClick={() => setMenuOpen(!menuOpen)}
								className="lg:hidden flex flex-col justify-center gap-1.5 w-8 h-8 z-50"
							>
								<span
									className={`h-0.5 w-full bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
								/>
								<span
									className={`h-0.5 w-full bg-current transition-all ${menuOpen ? "opacity-0" : ""}`}
								/>
								<span
									className={`h-0.5 w-full bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
								/>
							</button>
						</div>
					</div>
				</div>
			</nav>

			<div
				className={`fixed inset-0 z-40 transition-all duration-300 pointer-events-none ${hoveredNav ? "opacity-100" : "opacity-0"
					}`}
				style={{
					backdropFilter: hoveredNav ? "blur(8px)" : "blur(0px)",
					WebkitBackdropFilter: hoveredNav ? "blur(8px)" : "blur(0px)",
					backgroundColor: hoveredNav
						? "rgba(0, 0, 0, 0.2)"
						: "rgba(0, 0, 0, 0)",
				}}
			/>

			{hoveredNav && (
				<div
					className={`fixed left-0 right-0 top-[80px] z-40 transition-all duration-300 ${hoveredNav ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
					onMouseEnter={() => handleMouseEnter(hoveredNav)}
					onMouseLeave={handleMouseLeave}
					style={glassStyle}
				>
					{NAV_ITEMS.filter((item) => item.label === hoveredNav).map((item) => {
						const FirstIcon = item.items?.[0]?.icon;
						return (
							<div key={item.label}>
								<div className="max-w-[1400px] mx-auto px-6 py-12">
									<div className="grid grid-cols-12 gap-12">
										<div
											className={`${item.richContent ? "col-span-8" : "col-span-12"}`}
										>
											<div className="flex items-center gap-2 mb-8 text-xs font-bold uppercase tracking-widest text-[#F4C906]">
												{FirstIcon && <FirstIcon size={16} />}
												Explore {item.label}
											</div>
											<div
												className={`grid ${item.columnLayout === "columns" ? "grid-cols-2 gap-x-12" : "grid-cols-3 gap-x-8"} gap-y-6`}
											>
												{item.items?.map((sub) => (
													<Link
														key={sub.label}
														href={sub.href}
														className="group flex gap-4 p-3 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-200"
													>
														<div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 group-hover:bg-[#F4C906] group-hover:text-black group-hover:rotate-6 group-hover:scale-110">
															<sub.icon size={24} strokeWidth={1.5} />
														</div>
														<div>
															<h4 className="font-bold text-base mb-1 group-hover:text-[#F4C906] transition-colors">
																{sub.label}
															</h4>
															<p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-[200px]">
																{sub.description}
															</p>
														</div>
													</Link>
												))}
											</div>
										</div>
										{item.richContent && (
											<div className="col-span-4 pl-8 border-l border-gray-100 dark:border-white/10">
												<div
													className={`${item.richContent.bgColor || "bg-gray-50 dark:bg-white/5"} relative h-full rounded-2xl overflow-hidden p-8 flex flex-col justify-end group cursor-pointer`}
												>
													{item.richContent.image && (
														<div className="absolute inset-0 z-0">
															<img
																src={item.richContent.image}
																alt={item.richContent.title}
																className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
														</div>
													)}
													<div className="relative z-10">
														<h3
															className={`text-2xl font-bold mb-3 ${item.richContent.image ? "text-white" : ""}`}
														>
															{item.richContent.title}
														</h3>
														<p
															className={`text-sm mb-6 leading-relaxed ${item.richContent.image ? "text-gray-200" : "opacity-70"}`}
														>
															{item.richContent.description}
														</p>
														{item.richContent.ctaLabel && (
															<Link
																href={item.richContent.ctaLink || "#"}
																className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide ${item.richContent.image ? "text-[#F4C906]" : "text-black dark:text-white"} hover:gap-3 transition-all`}
															>
																{item.richContent.ctaLabel}
																<ArrowUpRight size={16} />
															</Link>
														)}
													</div>
												</div>
											</div>
										)}
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}

			{/* Mobile Menu Overlay */}
			{menuOpen && (
				<div
					ref={mobileMenuRef}
					className="lg:hidden fixed inset-0 z-[100] bg-white dark:bg-[#0a0a0a] overflow-y-auto"
				>
					<div className="p-6">
						<div className="flex items-center justify-between mb-8">
							<Link href="/">
								<Logo />
							</Link>
							<button
								onClick={() => setMenuOpen(false)}
								className="p-2 bg-gray-100 dark:bg-white/10 rounded-full"
							>
								<X size={24} />
							</button>
						</div>

						<div className="space-y-6">
							{NAV_ITEMS.map((item) => (
								<div
									key={item.label}
									className="border-b border-gray-100 dark:border-white/5 pb-6 last:border-0"
								>
									<div className="text-xl font-bold mb-4 flex items-center gap-3 text-gray-400">
										{item.label}
										{item.hasDropdown && <ChevronDown size={18} />}
									</div>
									<div className="pl-4 space-y-4">
										{item.items?.map((sub) => (
											<Link
												key={sub.label}
												href={sub.href}
												onClick={() => setMenuOpen(false)}
												className="flex items-center gap-4 group"
											>
												<div className="p-2 bg-gray-50 dark:bg-white/5 rounded-lg text-gray-400 group-hover:text-[#F4C906] transition-colors">
													<sub.icon size={18} />
												</div>
												<span className="text-lg font-medium">{sub.label}</span>
											</Link>
										))}
									</div>
								</div>
							))}
						</div>

						<div className="mt-8 pt-8 border-t border-gray-100 dark:border-white/10">
							<Button className="w-full justify-center py-4 text-lg">
								Book a Strategy Call
							</Button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Navbar;
