import Container from '@components/Container';
import imgBackground from '../components/img/home_background.jpeg';
import imgCapCoffee from '../components/img/cup_coffee.webp';
import CoffeeBlast from "../components/img/coffee_blast.webp";
import Shop from '@components/Section/Shop';
import AboutShop from '@components/Section/AboutShop';
import GetChance from '@components/Section/GetChance';
import Subscribe from '@components/Section/Subscribe';
import Footer from '@components/Section/Footer';
import SliderComment from '@components/Section/Slider/CommentsSlider';
import { useEffect, useState } from 'react';
import BurgerBtn from '@components/BurgerBtn';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {

        const tl = gsap.timeline({ defaults: { duration: 1, ease: "power2.inOut" } });

        tl.from('.right-anim', { x: '100vh', opacity: 0 }, 0)
            .from('.left-anim', { x: '-100vh', opacity: 0 }, 0)
            .from('.top-anim', { y: '-100vh', opacity: 0 }, 0);


        gsap.utils.toArray('.bottom-anim').forEach((element) => {
            gsap.from(element, {
                y: '10%',
                opacity: 0,
                duration: 1,
                ease: "power2.inOut",
                scrollTrigger: {
                    trigger: element,
                    start: 'top 95%',
                    toggleActions: 'play none none none',
                    once: true
                }
            });
        });

        ScrollTrigger.refresh();
    }, []);


    return (
        <>
            <div className='flex flex-col bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${imgBackground})` }}>
                <Container style='top-anim'>
                    <header className="flex flex-wrap justify-between items-center w-full pt-5 gap-x-8 ">
                        <p className="clicker-fonts text-[40px] whitespace-nowrap">Bean Scene</p>
                        <ul className="flex flex-wrap gap-x-[30px] gap-y-3 text-sm font-medium items-center justify-center flex-1">
                            <li><a href="https://example.com/help" target='_blank' className="nav-link">Home</a></li>
                            <li><a href="https://example.com/help" target='_blank' className="nav-link">Menu</a></li>
                            <li><a href="https://www.upwork.com/freelancers/~01a687c8f95b7913d7" target='_blank' className="nav-link">About Us</a></li>
                            <li><a href="https://www.upwork.com/freelancers/~01a687c8f95b7913d7" target='_blank' className="nav-link">Contact Us</a></li>
                        </ul>
                        <div className="flex gap-[35px] items-center whitespace-nowrap">
                            <button type="button" className="font-medium text-base hover:text-orange-btn duration-300 transition-all ease-in-out button-header">Sign In</button>
                            <button type="button" className="text-base button-header button-orange">Sign Up</button>
                            <button aria-label="Main Menu" onClick={toggleMenu} className={`${isOpen ? 'opened' : ''} transition-all duration-300 md:hidden z-50`}>
                                <BurgerBtn />
                            </button>
                        </div>
                    </header>
                </Container>

                <div className={`fixed inset-0 h-screen w-full flex flex-col pt-[20%] bg-color-coffee z-50 md:hidden transition-all duration-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}`}>
                    <ul className="flex flex-col gap-8 text-xl font-medium text-white items-center">
                        <li><a href="https://example.com/help" target='_blank' onClick={toggleMenu} className='mob-link'>Home</a></li>
                        <li><a href="https://example.com/help" target='_blank' onClick={toggleMenu} className='mob-link'>Menu</a></li>
                        <li><a href="https://example.com/help" target='_blank' onClick={toggleMenu} className='mob-link'>About Us</a></li>
                        <li><a href="https://www.upwork.com/freelancers/~01a687c8f95b7913d7" target='_blank' onClick={toggleMenu} className='mob-link'>Contact Us</a></li>
                    </ul>
                    <button type="button" className="mt-8 font-medium text-xl hover:text-orange-btn duration-300 transition-all ease-in-out sm:hidden">Sign In</button>
                    <button type="button" className="mt-8 text-xl font-medium hover:text-orange-btn duration-300 transition-all ease-in-out sm:hidden">Sign Up</button>
                    <button aria-label="Main Menu" onClick={toggleMenu} className={`${isOpen ? 'opened' : ''} absolute top-5 right-5 text-white text-3xl`}>
                        <BurgerBtn />
                    </button>
                </div>

                <Container>
                    <div className='flex flex-col items-start pt-[58px] md:pt-[116px] left-anim'>
                        <p className='text-[22px] font-medium'>We’ve got your morning covered with</p>
                        <p className='clicker-fonts text-coffee'>Coffee</p>
                        <p className='text-xl md:leading-[34px] max-w-[572px]'>It is best to start your day with a cup of coffee. Discover the best flavours coffee you will ever have. We provide the best for our customers.</p>
                        <button className='button-orange mt-5 mb-[95px] font-bold'>Order Now</button>
                    </div>
                </Container>
            </div>

            <section className='relative'>
                <Container style='pt-[58px] md:pt-[116px] flex-col md:flex-row justify-between items-center gap-10'>
                    <div className='flex flex-col md:basis-[60%] max-w-[585px] items-center md:items-start '>
                        <p className='text-color-coffee best-coffee font-bold text-center md:text-start bottom-anim'>Discover the best coffee</p>
                        <p className='text-grey text-base md:text-xl leading-[34px] mt-[15px] md:mt-[29px] text-center md:text-start bottom-anim'>
                            Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.
                        </p>
                        <p className='button-orange font-bold mt-5 md:mt-[29px] max-w-max bottom-anim'>Learn More</p>
                    </div>
                    <div className='md:basis-[40%] bottom-anim'>
                        <img src={imgCapCoffee} alt="imgCapCoffee" width='462' height='323' loading="lazy" />
                    </div>
                </Container>
                <div className='absolute -z-10 w-[25%]'>
                    <img src={CoffeeBlast} alt="coffee_blast" className='w-full h-full object-cover' loading="lazy" />
                </div>
                <Shop />
                <div className='absolute -z-10 right-0 scale-x-[-1] w-[25%]'>
                    <img src={CoffeeBlast} alt="coffee_blast" className='w-full h-full object-cover' loading="lazy" />
                </div>
                <AboutShop />
            </section>

            <GetChance />
            <SliderComment />
            <Subscribe />

            <Footer />
        </>
    );
};

export default Home;
