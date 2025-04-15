import Container from "@components/Container";
import FooterBackground from "../img/Footer/FooterBackground.webp"
import FacebookIcon from "./img/Facebook";
import InstagramIcon from "./img/Instagram";
import YouTubeIcon from "./img/YouTube";
import TwitterIcon from "./img/Twitter";
const Footer = () => {
    return (
        <footer className='flex  bg-cover bg-center bg-no-repeat relative overflow-hidden' style={{ backgroundImage: `url(${FooterBackground})`, }}>
            <Container style='flex-col lg:flex-row pt-10 lg:pt-[72px] pb-[72px] justify-between gap-6 '>
                {/* left хрєнь */}
                <div className=" flex flex-col gap-5 lg:max-w-[380px] bottom-anim">
                    <p className="clicker-fonts text-[54px] text-white">Bean Scene</p>
                    <p className="text-sm leading-[22px] text-white ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className="flex  gap-6 pt-4">
                        <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-facebook w-6 h-6 hover:scale-125 duration-300">
                            <FacebookIcon />
                        </a>
                        <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-instagram w-6 h-6 hover:scale-125 duration-300">
                            <InstagramIcon />
                        </a>
                        <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-red w-6 h-6 hover:scale-125 duration-300">
                            <YouTubeIcon />
                        </a>
                        <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-twitter w-6 h-6 hover:scale-125 duration-300">
                            <TwitterIcon />
                        </a>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row lg:gap-[66px] gap-y-10">
                    <div className="flex flex-col sm:flex-row lg:flex-col  gap-y-4 gap-x-8 lg:gap-0 bottom-anim">
                        <p className="text-[26px] font-bold lg:pb-[56px] w-[130px]">About</p>
                        <div className="flex lg:flex-col gap-[18px] flex-wrap items-center lg:items-start">
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Menu</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Features</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">News & Blogs</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Help & Supports</a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-y-4 gap-x-8 lg:gap-0 bottom-anim">
                        <p className="text-[26px] font-bold lg:pb-[56px] w-[130px] ">Company</p>
                        <div className="flex lg:flex-col gap-[18px] flex-wrap items-center lg:items-start ">
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">How we work</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Terms of service</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Pricing</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">FAQ</a>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row lg:flex-col  gap-y-4 gap-x-8 lg:gap-0 bottom-anim">
                        <p className="text-[26px] font-bold lg:pb-[56px]  w-[130px]  ">Contact&nbsp;Us</p>
                        <div className="lg:max-w-[332px] flex lg:flex-col gap-[18px] items-center lg:items-start flex-wrap ">
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">Akshya Nagar 1st Block 1st Cross</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">+1 234-567-8910</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">beanscene@mail.com</a>
                            <a href="mailto:volodymyr.kravets.dev@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">www.beanscene.com</a>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
export default Footer;
