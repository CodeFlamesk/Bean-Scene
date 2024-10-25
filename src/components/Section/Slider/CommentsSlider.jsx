import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import AuthorImg from '../../img/CommentsImg/author-jonny.webp'

import { Navigation } from 'swiper/modules';
import CommentsSlide from './CommentsSlide';
import Container from '@components/Container';
import PrevBtn from '@components/img/CommentsImg/PrevBtn';

const data = [
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        author: "Jonny Thomas",
        profession: "Project Manager",
        authorImg: AuthorImg,
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        author: "Jonny Thomas",
        profession: "Project Manager",
        authorImg: AuthorImg,
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        author: "Jonny Thomas",
        profession: "Project Manager",
        authorImg: AuthorImg,
    },
    {
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset.....",
        author: "Jonny Thomas",
        profession: "Project Manager",
        authorImg: AuthorImg,
    },


];

const CommentsSlider = () => {
    return (
        <div className='flex flex-col'>
            <Container style="flex-col items-center pt-[82px]">
                <p className="text-color-coffee font-bold best-coffee">Our coffee perfection feedback</p>
                <p className="text-grey text-xl leading-[34px] pt-4">Our customers have amazing things to say about us</p>
                <div className='flex justify-between gap-6 w-full pt-6'>
                    <div className='swiper-button-prev sm:hidden flex   z-50 w-[72px] h-[72px]   border-2 justify-center  items-center cursor-pointer border-l-yellow-lite bg-orange-btn rounded-2xl '>
                        <PrevBtn />
                    </div>
                    <div className='swiper-button-next sm:hidden flex  z-40 w-[72px] h-[72px]     rotate-180 border-2 justify-center  items-center cursor-pointer border-l-yellow-lite bg-orange-btn rounded-2xl '>
                        <PrevBtn />
                    </div>
                </div>
            </Container>
            <Container style="pt-[45px] pb-[78px]">
                <Swiper
                    modules={[Navigation]}
                    slidesPerView={1}
                    spaceBetween={16}

                    loop={true}
                    navigation={{  // Додаємо параметри навігації
                        prevEl: '.swiper-button-prev',
                        nextEl: '.swiper-button-next'
                    }}

                >

                    {



                        data.map((item, index) => {
                            return (

                                <SwiperSlide key={index} className='flex  justify-center items-center  h-auto' >

                                    <div className='pb-[60px] sm:px-[50px]'>      <CommentsSlide {...item} className='flex max-h-full ' /></div>

                                </SwiperSlide>


                            )
                        })
                    }

                </Swiper>
            </Container>
        </div>


    );
};

export default CommentsSlider;
