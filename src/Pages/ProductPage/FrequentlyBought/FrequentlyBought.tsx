import RecommendedOne from '../../../assets/RecommendedProducts/recommended-1.webp';
import RecommendedTwo from '../../../assets/RecommendedProducts/recommended-2.webp';
import RecommendedThree from '../../../assets/RecommendedProducts/recommended-3.webp';
import RecommendedFour from '../../../assets/RecommendedProducts/recommended-4.webp';
import RecommendedProduct from './RecommendedProduct';
import RecommnededSummary from './RecommnededSummary';
import { useCart, useOpenSideCart } from '../../../hooks';


const RecommendedProducts = [
    {
        id: 1,
        name: 'Premium Grocery Collection',
        rate: 5,
        price: 100,
        image: RecommendedOne
    },
    {
        id: 2,
        name: 'Premium Grocery Package',
        rate: 5,
        price: 100,
        image: RecommendedTwo
    },
    {
        id: 3,
        name: 'Fresh & Real Chole Masala',
        rate: 5,
        price: 100,
        image: RecommendedThree
    },
    {
        id: 4,
        name: 'Gum Pack',
        rate: 5,
        price: 100,
        image: RecommendedFour
    }
]

function FrequentlyBought() {
    const { setProductsInCart } = useCart();
    const { setOpenSideCart, setTotalCartPrice } = useOpenSideCart();
    const totalRecommendPrice = RecommendedProducts?.reduce((acc, product) => acc + product.price, 0);

    function addRecommendedToCart() {
        setProductsInCart((prev: any) => {
            const updatedProducts = new Set([...prev, ...RecommendedProducts]);
            setTotalCartPrice((prev: any) => prev + totalRecommendPrice);
            return Array.from(updatedProducts);
        });
        setOpenSideCart(true);
    }
    return (
        <div className='py-[15px] h-[fit-content]'>
            <h1 className='text-[20px] font-bold'>Frequently Bought Together</h1>
            <div className='recommended-products flex flex-wrap items-center lg:flex-row gap-[20px] mt-[20px] min-h-[290px] max-h-[fit-content]'>
                <RecommendedProduct product={RecommendedProducts[0]}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>+</div>
                <RecommendedProduct product={RecommendedProducts[1]}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>+</div>
                <RecommendedProduct product={RecommendedProducts[2]}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>+</div>
                <RecommendedProduct product={RecommendedProducts[3]}/>
                <div className='flex justify-center items-center w-full md:w-[fit-content] font-bold text-[30px] text-[grey]'>=</div>
                <RecommnededSummary addToCartHandler={addRecommendedToCart}/>
            </div>
        </div>
    );
}

export default FrequentlyBought;