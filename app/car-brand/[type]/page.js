import dynamic from "next/dynamic";
const Banner = dynamic(() => import('@/components/Banner/Banner'));
const Section = dynamic(() => import('@/components/Section/Section'));
const Page = ({ params }) => {
    return (
        <div>
            <Banner
                image="/home-banner.jpg"
                title={params.type}
                subtitle="Book directly from local suppliers. No commission, no mark-ups."
            />
            <Section></Section>
        </div>
    );
};

export default Page;
