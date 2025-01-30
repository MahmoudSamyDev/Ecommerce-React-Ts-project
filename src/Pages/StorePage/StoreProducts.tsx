import StoreProduct from './StoreProduct';
import { recommendedProducts } from '../../utilities/data';

function StoreProducts() {
    return(
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]'>
            {recommendedProducts.map((product, index) => (
                <StoreProduct key={index} product={product} />
            ))}
            <StoreProduct product={recommendedProducts[0]} />
            <StoreProduct product={recommendedProducts[0]} />
            <StoreProduct product={recommendedProducts[0]} />
            <StoreProduct product={recommendedProducts[0]} />
            <StoreProduct product={recommendedProducts[0]} />
            <StoreProduct product={recommendedProducts[0]} />
            <StoreProduct product={recommendedProducts[0]} />
            <StoreProduct product={recommendedProducts[0]} />
        </div>
    )
}

export default StoreProducts;