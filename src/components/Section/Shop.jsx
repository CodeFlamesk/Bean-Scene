import Container from "@components/Container";
import CappuccinoImg from "../img/shopImg/cappuccino.webp";
import ChaiLatteImg from "../img/shopImg/chai_latte.webp";
import MacchiatoImg from "../img/shopImg/macchiato.webp";
import EspressoImg from "../img/shopImg/espresso.webp";

const datashop = [
    {
        id: 1,
        shopImg: CappuccinoImg,
        name: "Cappuccino",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        textButton: "Order Now"
    },
    {
        id: 2,
        shopImg: ChaiLatteImg,
        name: "Chai Latte",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        textButton: "Order Now"
    },
    {
        id: 3,
        shopImg: MacchiatoImg,
        name: "Macchiato",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        textButton: "Order Now"
    },
    {
        id: 4,
        shopImg: EspressoImg,
        name: "Espresso",
        description: "Coffee 50% | Milk 50%",
        price: "$8.50",
        textButton: "Order Now"
    }
];

const Shop = () => {
    return (
        <Container style='flex-col mt-[68px] md:mt-[150px] items-center  '>
            <p className='text-color-coffee best-coffee font-bold text-center bottom-anim'>
                Enjoy a new blend of coffee style
            </p>
            <p className='text-grey text-base md:text-xl pt-4 text-center bottom-anim'>
                Explore all flavours of coffee with us. There is always a new cup worth experiencing.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 pt-8 gap-y-10">
                {
                    datashop.map((item) => (
                        <ShopItem key={item.id} {...item} />
                    ))
                }
            </div>

        </Container>
    );
};

const ShopItem = ({ shopImg, name, description, price, textButton }) => {
    return (
        <div className="flex flex-col bg-orange-lite border border-orange-btn border-opacity-40 items-center relative max-w-[280px] bottom-anim">
            <img src={shopImg} alt={name} className="max-w-full" loading="lazy" width='280' height='222' />
            <h3 className="text-color-coffee text-[22px] font-bold pt-[14px] ">{name}</h3>
            <p className="text-base text-dark pt-[6px]">{description}</p>
            <p className="text-color-coffee font-bold text-lg mb-[42px] pt-[6px]">{price}</p>
            <button type="button" className="button-orange text-dark font-bold text-base absolute bottom-[-26px]">{textButton}</button>
        </div>
    );
};

export default Shop;
