import dynamic from "next/dynamic";
const Banner = dynamic(() => import('@/components/Banner/Banner'));
const Section = dynamic(() => import('@/components/Section/Section'));
const Page = ({ params }) => {
    return (
        <div className="car_brands_page_wrapper">
            
            <Section></Section>
        </div>
    );
};

export default Page;
