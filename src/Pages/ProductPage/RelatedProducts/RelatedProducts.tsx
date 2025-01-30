import RelatedProduct from '../../../layout/Components/RelatedProduct';

import { recommendedProducts } from '../../../utilities/data';

function RelatedProducts() {
    return (
        <div className='related-products py-[15px] h-[fit-content] my-[40px]'>
            <h1 className='text-[20px] font-bold'>Related Products</h1>
            <div className='recommended-products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px] min-h-[400px] max-h-[fit-content] py-[15px]'>
                {recommendedProducts.map(product => ( <RelatedProduct product={product} key={product.id}/> ))}
            </div>
        </div>
    )
}

export default RelatedProducts