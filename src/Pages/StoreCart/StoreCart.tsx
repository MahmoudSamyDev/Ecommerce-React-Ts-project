import ContainerWrapper from '../../layout/Components/ContainerWrapper';
import { useCart } from '../../hooks';
import ProductCard from './ProductCard';
import BuyJourneyComponent from '../BuyJourneyComponent';



function StoreCart() {
    const { productsInCart } = useCart();

    return (
        <div className="deals-of-the-day w-full content-center py-[15px] bg-background">
            <ContainerWrapper>
                <div className='flex flex-col gap-[15px]'>
                    <BuyJourneyComponent />
                    <div className='cart-page-content w-full flex justify-between gap-[15px] flex-wrap'>
                        <div className="cart-products w-full md:w-[65%] h-[fit-content] flex flex-col gap-[15px]">
                        {
                            productsInCart.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))
                        }
                        </div>
                        <div className="cart-products-summary flex-1 bg-white h-[100vh] rounded-[14px] shadow">
                            
                        </div>
                    </div>
                </div>
            </ContainerWrapper>
        </div>
    );
}


export default StoreCart;