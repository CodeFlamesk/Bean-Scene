import PrevBtn from '@components/img/CommentsImg/PrevBtn'
import Quotation from '../../img/CommentsImg/quotation.webp'

const CommentsSlide = ({ text, author, profession, authorImg }) => {
    return (

        <div className="flex flex-col border border-orange-btn  border-opacity-40  relative pt-[50px] lg:pt-[129px] px-[50px] lg:px-[100px] pb-[50px] lg:pb-[100px] bg-orange-lite  h-full items-center max-w-[980px]">
            <div className='swiper-button-prev text-color-coffee hover:text-orange-btn  hover:bg-color-coffee hover:border-2 duration-300 transition-all ease-in-out border-orange-btn box-border hidden sm:flex  absolute z-50 w-[82px] h-[82px] left-[-41px]   top-[42%]  border-2 justify-center  items-center cursor-pointer border-l-yellow-lite bg-orange-btn rounded-2xl '>
                <PrevBtn />
            </div>
            <img src={Quotation} alt="quotation" className='absolute w-[34px] lg:w-[9%] left-6 lg:left-10 top-4 lg:top-[60px]' />
            <p className="text-grey text-xs sm:text-sm lg:text-lg font-semibold text-center leading-9">{text}</p>
            <p className="text-color-coffee font-bold text-2xl sm:text-[32px] pt-3 lg:pt-7 text-center" >{author}</p>
            <p className=" text-grey text-center text-xl leading-[32px] ">{profession}</p>
            <div className="w-[112px] h-[112px] rounded-2xl overflow-hidden absolute bottom-[-56px] z-50 ">
                <img src={authorImg} alt="author" className="w-full h-full object-cover" />
            </div>
            <div className='swiper-button-next text-color-coffee hover:text-orange-btn hover:bg-color-coffee hover:border-2 duration-300 transition-all ease-in-out border-orange-btn box-border hidden sm:flex absolute z-40 w-[82px] h-[82px] right-[-41px]    top-[42%] rotate-180 border-2 justify-center  items-center cursor-pointer border-l-yellow-lite bg-orange-btn rounded-2xl '>
                <PrevBtn />
            </div>
        </div>


    )
}

export default CommentsSlide