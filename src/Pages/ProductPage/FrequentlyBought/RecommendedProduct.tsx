import { ProductCard_TP } from '../../../Types';

function RecommendedProduct({product}: {product: ProductCard_TP}) {
    return(
        <div className='recommended-product w-full md:w-[200px] min-h-[290px] max-h-[fit-content] bg-white p-[15px] rounded-[12px]'>
            <div className='recommended-product-img w-full md:w-[170px] h-[170px] flex justify-center items-center bg-white hover:bg-[#f0f0f0] rounded-[12px] cursor-pointer duration-300'>
                <img src={product.image} alt='product' className='w-[170px] h-full object-cover rounded-[12px]' />
            </div>
            <h1 className='text-[15px] font-bold mt-[10px] text-center md:text-left h-[50px]'>{product.name}</h1>
            <div className='flex items-center mt-[10px] gap-[15px] justify-center md:justify-start'>
                <span className='text-[15px] text-officialRed'>${product.price}</span>
                <span className='text-[15px] line-through text-[grey]'>$300</span>
            </div>
        </div>
    )
}

export default RecommendedProduct;