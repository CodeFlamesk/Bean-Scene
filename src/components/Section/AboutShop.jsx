import Container from "@components/Container";
import BeansImg from "../img/aboutShopImg/coffee-beans.webp"
import BadgeImg from "../img/aboutShopImg/badge.webp"
import BestPriceImg from "../img/aboutShopImg/best-price.webp"
import CupImg from "../img/aboutShopImg/coffee-cup.webp"
const aboutShop = [
    {
        id: 1,
        aboutImg: BeansImg,
        name: "Supreme Beans",
        description: "Beans that provides great taste",

    },
    {
        id: 2,
        aboutImg: BadgeImg,
        name: "High Quality",
        description: "We provide the highest quality",
    },
    {
        id: 3,
        aboutImg: BestPriceImg,
        name: "Extraordinary",
        description: "Coffee like you have never tasted",
    },
    {
        id: 4,
        aboutImg: CupImg,
        name: "Affordable Price",
        description: "Our Coffee prices are easy to afford",
    }
];

const AboutShop = () => {
    return (
        <Container style='flex-col mt-[82px] md:mt-[106px] items-center  mb-[68px] md:mb-[82px]'>
            <p className='text-color-coffee best-coffee font-bold text-center bottom-anim'>
                Why are we different?  </p>
            <p className='text-grey text-base md:text-xl pt-4 text-center bottom-anim'>
                We don’t just make your coffee, we make your day!   </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 pt-8 gap-y-10">
                {
                    aboutShop.map((item) => (
                        <AboutShopItem key={item.id} {...item} />
                    ))
                }
            </div>
            <p className="text-grey text-center text-base md:text-xl pt-8  bottom-anim">Great ideas start with great coffee, Lets help you achieve that</p>
            <p className="text-color-coffee text-started font-bold  bottom-anim ">Get started today.</p>
            <button type="button" className="button-orange text-base font-bold mt-6 bottom-anim"> Join Us</button>
        </Container>
    );
};

const AboutShopItem = ({ aboutImg, name, description }) => {
    return (
        <div className="flex flex-col bg-orange-lite border border-orange-btn hover:bg-color-hover duration-300 transition-all ease-in-out border-opacity-40 items-center relative max-w-[280px] px-[10px] py-4 md:py-9 bottom-anim">
            <img src={aboutImg} alt={name} loading="lazy" />
            <h3 className="pt-4 md:pt-[25px] text-color-coffee text-[22px] md:text-[26px] font-bold text-center ">{name}</h3>
            <p className="text-base md:text-xl pt-[8px] text-grey text-center mt-auto">{description}</p>

        </div>
    );
};

export default AboutShop;
