import RelatedProduct from './RelatedProduct';

import ProductOne from '../../../assets/RecommendedProducts/RelatedProductOne.webp';
import ProductTwo from '../../../assets/RecommendedProducts/RelatedProductTwo.webp';
import ProductThree from '../../../assets/RecommendedProducts/RelatedProductThree.webp';
import ProductFour from '../../../assets/RecommendedProducts/RelatedProductFour.webp';

const recpmmendedProducts = [
    {
        id: 1,
        name: 'Colgate Advance Protection Toothpaste',
        price: 1000,
        image: ProductOne,
        rate: 5,
    },
    {
        id: 2,
        name: 'Catch Sprinklers Chat Masala',
        price: 2000,
        image: ProductTwo,
        rate: 5,
    },
    {
        id: 3,
        name: 'Catch Italian Seasoning Grinder',
        price: 3000,
        image: ProductThree,
        rate: 5,
    },
    {
        id: 4,
        name: 'Tadka Garam Masala',
        price: 4000,
        image: ProductFour,
        rate: 5,
    },
]

function RelatedProducts() {
    return (
        <div className='related-products py-[15px] h-[fit-content] my-[40px]'>
            <h1 className='text-[20px] font-bold'>Related Products</h1>
            <div className='recommended-products flex flex-wrap gap-[20px] min-h-[400px] max-h-[fit-content] py-[15px]'>
                {recpmmendedProducts.map(product => ( <RelatedProduct product={product} key={product.id}/> ))}
            </div>
        </div>
    )
}

export default RelatedProducts