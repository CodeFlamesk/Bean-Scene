


import Container from '@components/Container';
import imgBackground from '../components/img/HomeBackground.jpeg'
import imgCapCoffee from '../components/img/CupCoffee.webp'
const Home = () => {
    return (
        <>
            <div className='flex flex-col bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${imgBackground})`, }}>
                <Container>

                    <header className="flex flex-wrap justify-between items-center w-full pt-5 gap-x-8">
                        <p className="clicker-fonts text-[35px] whitespace-nowrap">Bean Scene</p>

                        <ul className="flex flex-wrap gap-[30px]  text-sm font-medium items-center justify-center flex-1">
                            <li>
                                <a href="#" className="nav-link">Home</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">Menu</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">About Us</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link">Contact Us</a>
                            </li>
                        </ul>

                        <div className="flex gap-[35px] items-center whitespace-nowrap">
                            <button type="button" className=" font-medium text-sm hover:text-orange-btn duration-300 transition-all ease-in-out button-header">Sign In</button>
                            <button type="button" className=" text-sm  button-header button-orange">Sign Up</button>
                        </div>
                    </header>
                </Container>

                <Container>
                    <div className='flex flex-col items-start pt-[58px] md:pt-[116px]  '>
                        <p className=' text-[22px] font-medium' >We’ve got your morning covered with</p>
                        <p className='clicker-fonts text-coffee '>Coffee</p>
                        <p className='text-xl md:leading-[34px] max-w-[572px] '>It is best to start your day with a cup of coffee. Discover the
                            best flavours coffee you will ever have. We provide the best
                            for our customers.</p>
                        <button className=' button-orange mt-5 mb-[95px] font-bold' >
                            Order Now
                        </button>
                    </div>
                </Container>

            </div>
            <Container style='pt-[58px] md:pt-[150px] flex-col md:flex-row justify-between md:items-center gap-10 '>
                <div className='flex flex-col md:basis-[60%] max-w-[585px] '>
                    <p className='text-color-coffee text-[54px] font-bold ' >Discover the best coffee</p>
                    <p className='text-grey text-xl leading-[34px] mt-[29px]'>Bean Scene is a coffee shop that provides you with quality coffee that helps boost your productivity and helps build your mood. Having a cup of coffee is good, but having a cup of real coffee is greater. There is no doubt that you will enjoy this coffee more than others you have ever tasted.</p>
                    <p className='button-orange font-bold mt-[29px] max-w-max'>Learn More</p>
                </div>
                <div className='md:basis-[40%]'>
                    <img src={imgCapCoffee} alt="imgCapCoffee" width='462' height='323' />
                </div>
            </Container>
            <div className='mt-[150px]'>

            </div>
        </>
    )
}

export default Home;
