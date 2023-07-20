import dynamic from "next/dynamic";
import {StyledButton} from "@/components/StyledButton/StyledButton";
import Link from "next/link";
const Banner = dynamic(() => import('@/components/Banner/Banner'));
const Section = dynamic(() => import('@/components/Section/Section'));
const Page = ({ params }) => {
    return (
        <div className="car_brands_page_wrapper">
            <Banner
                image="/home-banner.jpg"
                title={params.type}
                subtitle="Book directly from local suppliers. No commission, no mark-ups."
            >
                <Link className={"clr_light"} href={'/'}>Home</Link>  <span className={"clr_light"}>/</span> <Link className={"clr_light"} href={'/car-brand'}>Dubai</Link>
            </Banner>
            <Section></Section>
        </div>
    );
};

export default Page;
