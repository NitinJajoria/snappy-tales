import IndustryDetailContent from "@/Components/Industries/IndustryDetailContent";
import { getIndustryBySlug, INDUSTRIES } from "@/lib/constants/industries";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateStaticParams() {
    return INDUSTRIES.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        return {
            title: "Industry not found | Snappy Tales",
        };
    }

    return {
        title: `${industry.title} | Snappy Tales`,
        description: industry.tagline,
    };
}

const IndustryPage = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}) => {
    const { slug } = await params;
    const industry = getIndustryBySlug(slug);

    if (!industry) {
        notFound();
    }

    return <IndustryDetailContent industry={industry} />;
};

export default IndustryPage;
