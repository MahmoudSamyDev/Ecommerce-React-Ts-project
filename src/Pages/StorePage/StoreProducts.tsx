import StoreProduct from './StoreProduct';
import { StoreProductsCards } from '../../utilities/data';

function StoreProducts() {
    return(
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
            {StoreProductsCards.map((product, index) => (
                <StoreProduct key={index} product={product} />
            ))}
        </div>
    )
}

export default StoreProducts;