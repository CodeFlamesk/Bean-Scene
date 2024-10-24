import Container from "@components/Container";
import SubscribeBackground from "../img/getChance/get_chance_background.webp";

const Subscribe = () => {
    return (
        <section className='flex bg-cover bg-center bg-no-repeat relative overflow-hidden' style={{ backgroundImage: `url(${SubscribeBackground})`, }}>
            <Container style=" flex-col items-center py-10 md:py-20  ">
                <p className="text-white best-coffee font-bold text-center">Subscribe to get the Latest News</p>
                <p className="text-white text-base md:text-xl leading-[34px] text-center pt-4 ">Don’t miss out on our latest news, updates, tips and special offers</p>
                <form className="flex flex-col sm:flex-row items-center  max-w-[642px] w-full rounded overflow-hidden mt-[26px]">
                    <label htmlFor="email" className="w-full flex ">
                        <input
                            id="email"
                            type="email"
                            className="inputs  border-2 border-white input-shadow box-border h-[50px] sm:h-[69px] input-shadow w-full text-base sm:text-xl  leading-[34px] text-dark pl-[26px] placeholder:text-grey-second focus:outline-none focus:ring-0"
                            placeholder="Enter your mail"
                            required
                        />
                    </label>
                    <button type="submit" className="px-6 sm:py-[18px] rounded-lg mt-4 sm:mt-0 sm:rounded-none text-center border-2 border-orange-btn h-[50px] box-border sm:h-[69px] bg-orange-btn text-color-coffee text-lg sm:text-[22px] font-bold leading-normal">
                        Subscribe
                    </button>
                </form>

            </Container>
        </section>
    );
};
export default Subscribe;