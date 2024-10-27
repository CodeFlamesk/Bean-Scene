import Container from "@components/Container";
import GetChanceBackground from "../img/getChance/get_chance_background.webp";
import CupChance from "../img/getChance/cup_chance.webp";
import CoffeeBean from "../img/getChance/coffee_bean.webp"
const GetChance = () => {
    return (
        <section className='flex  bg-cover bg-center bg-no-repeat relative overflow-hidden' style={{ backgroundImage: `url(${GetChanceBackground})`, }}>
            <Container style="pb-10 pt-[58px] md:pt-[67px] flex-col md:flex-row justify-between items-center gap-y-5 z-20">
                <div className="flex flex-col md:basis-[60%] max-w-[575px] items-center md:items-start">
                    <p className="text-white best-coffee font-bold text-center md:text-start bottom-anim">Get a chance to have an Amazing morning</p>
                    <p className="text-white text-base md:text-xl leading-[34px] mt-[15px] md:mt-[22px] text-center md:text-start bottom-anim">We are giving you are one time opportunity to
                        experience a better life with coffee.</p>
                    <button className="button-orange font-bold mt-5 md:mt-[22px] max-w-max bottom-anim">Order Now</button>
                </div>
                <div className='md:basis-[40%] flex justify-center md:justify-end bottom-anim'>
                    <img src={CupChance} alt="cup_chance" className="w-[60%]" width='300' height='467' loading="lazy" />
                </div>

            </Container>
            <div className='absolute z-10 bottom-0 w-[60%] md:w-[40%] right-0 '>
                <img src={CoffeeBean} alt="coffee_bean" className='w-full h-full object-cover ' loading="lazy" />
            </div>
        </section>
    );
};
export default GetChance;