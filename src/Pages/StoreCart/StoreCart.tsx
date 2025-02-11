import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import { useCart } from '../../hooks';
import ProductCard from './ProductCard';
import BuyJourneyComponent from '../BuyJourneyComponent';
import CartProductSummary from './CartProductSummary';


function StoreCart() {
    const { productsInCart } = useCart();

    return (
        <div className="deals-of-the-day w-full content-center py-[15px] bg-background">
            <ContainerWrapper>
                <div className='flex flex-col gap-[15px]'>
                    <BuyJourneyComponent route='cart'/>
                    <div className='cart-page-content w-full flex justify-between gap-[15px] flex-wrap'>
                        <div className="cart-products w-full lg:w-[65%] h-[fit-content] flex flex-col gap-[15px]">
                        {
                            productsInCart.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                        </div>
                        <CartProductSummary />
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
}


export default StoreCart;